---
title: "Performance tuning in Haskell: optimizing the Plutus evaluator"
tags:
  - Smart Contracts
  - Plutus
  - Haskell
url: ""
image: https://ucarecdn.com/4852b04a-ad19-43ed-a437-cbb6db666d3a/
image_text: Developer deep dive
---

Performance optimization often comes down to identifying subtle inefficiencies in the generated code. While reviewing the Glasgow Haskell Compiler (GHC) Core of the production evaluator, the Input | Output (IO) Plutus team discovered that a key function, `safeIndexOne`, was not getting inlined and was introducing unnecessary laziness. By addressing strictness issues, eliminating redundant data structures, and leveraging the worker-wrapper transformation, the team achieved a **12% performance improvement**.

This post, written by Roman Kireev – IO’s compiler engineer, describes the optimization process, detailing how the team turned recursive lookups into efficient jump-based execution.

## Identifying optimization opportunities

While analyzing the GHC Core output of the evaluator, the team noticed the following snippet:

```haskell
case safeIndexOne env1_XW (W64# bx18_scPRb) of {
  Nothing -> jump exit_X16 <...>
  Just val_acLQA -> jump returnCek_scPkh ctx1_X0 val_acLQA <...>
}
```

This code performs a variable lookup using `safeIndexOne`. If the lookup fails, the evaluator terminates via `jump exit_X16`. Otherwise, recursion continues with the looked-up value using `jump returnCek_scPkh`.

In both cases, the `jump` keyword indicates that recursion compiles to an efficient jump to a label. For more details, see the ‘*Compiling without Continuations*’ [research paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/compiling-without-continuations.pdf).

Several optimization opportunities stood out:
- `safeIndexOne` **is not inlined** – its presence in the Core suggests that GHC isn’t inlining it
- **Unnecessary boxing of indices** – the in-scope variable index `bx18_scPRb` is wrapped with `W64#`, indicating that `safeIndexOne` is lazier than necessary
- **Avoidable `Maybe` construction** – `safeIndexOne` returns a `Maybe`, which is immediately deconstructed, adding unnecessary overhead.

## Addressing strictness issues

Examining `safeIndexOne`, we see:

```haskell
safeIndexOne :: RAList a -> Word64 -> Maybe a
safeIndexOne Nil _ = Nothing
safeIndexOne (BHead w t ts) !i =
    if i <= w
    then indexTree w i t
    else safeIndexOne ts (i-w)
  where
    indexTree :: Word64 -> Word64 -> Tree a -> Maybe a
    indexTree = <...>
```

The first clause ignores the second argument, leading GHC to treat it as lazy. This causes the `W64#` wrapping seen earlier. To enforce strict evaluation, we modify the function:

```haskell
safeIndexOne Nil !_ = Nothing
safeIndexOne (BHead w t ts) i =
```

After recompiling, we see that the strictness issue is resolved:

```haskell
case $wsafeIndexOne env1_XW bx18_swNG of {
  Nothing -> jump exit_X16 <...>
  Just val_apny -> jump returnCek_sw4D ctx1_X0 val_apny <...>
}
```

Now, `$wsafeIndexOne` (see *The Worker/Wrapper Transformation* [research paper](https://people.cs.nott.ac.uk/pszgmh/wrapper-extended.pdf)) operates directly on a machine word value, eliminating unnecessary boxing and unboxing.

## Attempting inlining through worker-wrapper transformation

However, `safeIndexOne` is still not inlined. Since it is recursive, GHC won’t inline it by default. We attempt a manual worker-wrapper transformation to create a non-recursive top-level function:

```haskell
safeIndexOne :: forall a. RAList a -> Word64 -> Maybe a
safeIndexOne = go
  where
    go :: RAList a -> Word64 -> Maybe a
    go Nil !_ = Nothing
    go (BHead w t ts) !i =
        if i <= w
        then indexTree w i t
        else go ts (i-w)

    indexTree :: Word64 -> Word64 -> Tree a -> Maybe a
    indexTree = <...>
```

However, this does not solve the issue – GHC floats go to the top level, preventing inlining.

## Ensuring inlining with Church encoding

We need to ensure that GHC retains `go` and `indexTree` as local definitions. When `safeIndexOne` is inlined, both appear in the generated Core at the call site, allowing GHC to optimize them. This could likely be achieved using something from `GHC.Magic`, but the simplest approach is to make `safeIndexOne` accept a term-level argument and use it within `go` and `indexTree`. To do this, we introduce a term-level argument by Church-encoding `Maybe`:

```haskell
safeIndexOne :: forall a b. b -> (a -> b) -> RAList a -> Word64 -> b
safeIndexOne z f = go
  where
    go :: RAList a -> Word64 -> b
    go Nil !_ = z
    go (BHead w t ts) !i =
        if i <= w
        then indexTree w i t
        else go ts (i-w)

    indexTree :: Word64 -> Word64 -> Tree a -> Maybe a
    indexTree = <...>
```

Now, `z` replaces `Nothing`, and `f` replaces `Just`. The call site is adapted from:

```haskell
case Env.safeIndexOne varEnv varIx of
    Nothing  -> throw <...>
    Just val -> pure val
```
to:

```haskell
Env.safeIndexOne
    (throw <...>)
    pure
    varEnv
    varIx
```

This allows `safeIndexOne` to inline, along with its internals.

## Result: optimized Core output

The final Core output shows a recursive join point with efficient machine word operations and label jumps:

```haskell
joinrec {
  $windexTree_swMk
    :: Word64#
       -> Word64#
       -> Tree (CekValue uni_swN8 fun_swN9 ann_swNa)
       -> (# State# RealWorld,
             Either
               (CekEvaluationException
                  NamedDeBruijn uni_swN8 fun_swN9)
               (NTerm uni_swN8 fun_swN9 ()) #)
  $windexTree_swMk (ww2_swMc :: Word64#)
                   (ww3_swMg :: Word64#)
                   (ds28_swMi
                      :: Tree
                           (CekValue
                              uni_swN8 fun_swN9 ann_swNa))
    = case ww3_swMg of wild14_X15 {
        __DEFAULT ->
          case ww2_swMc of wild15_X1m {
            __DEFAULT ->
              case ds28_swMi of {
                Leaf ds29_avEa -> jump exit14_X16;
                Node ipv13_avEc ipv14_avEd ipv15_avEe ->
                  case wild14_X15 of wild17_X1n {
                    __DEFAULT ->
                      let {
                        offset'_swtg :: Word64#
                        offset'_swtg
                          = subWord64#
                              wild17_X1n 1#Word64 } in
                      let {
                        halfSize_sw7I :: Word64#
                        halfSize_sw7I
                          = uncheckedShiftRL64#
                              wild15_X1m 1# } in
                      case leWord64#
                             offset'_swtg halfSize_sw7I
                      of {
                        __DEFAULT ->
                          jump $windexTree_swMk
                            halfSize_sw7I
                            (subWord64#
                               offset'_swtg halfSize_sw7I)
                            ipv15_avEe;
                        1# ->
                          jump $windexTree_swMk
                            halfSize_sw7I
                            offset'_swtg
                            ipv14_avEd
                      };
                    1#Word64 -> jump exit15_X17 ipv13_avEc
                  }
              };
            1#Word64 ->
              case wild14_X15 of wild16_X1n {
                __DEFAULT ->
                  case ds28_swMi of {
                    Leaf ds29_avEa -> jump exit14_X16;
                    Node ipv13_avEc ipv14_avEd ipv15_avEe ->
                      let! { __DEFAULT ~ wild18_X1o
                      <- wild16_X1n } in
                      let {
                        offset'_swtg :: Word64#
                        offset'_swtg
                          = subWord64#
                              wild18_X1o 1#Word64 } in
                      case leWord64# offset'_swtg 0#Word64
                      of {
                        __DEFAULT ->
                          jump $windexTree_swMk
                            0#Word64 offset'_swtg ipv15_avEe;
                        1# ->
                          jump $windexTree_swMk
                            0#Word64 offset'_swtg ipv14_avEd
                      }
                  };
                1#Word64 ->
                  case ds28_swMi of {
                    Leaf x_avEC ->
                      jump returnCek_sw7q
                        ctx1_X0 x_avEC ipv12_swMu;
                    Node ipv13_avEE ipv14_avEF ipv15_avEG ->
                      jump exit15_X17 ipv13_avEE
                  }
              }
          };
        0#Word64 -> jump exit16_X18
      }; } in
joinrec {
  $wgo_swMs
    :: RAList (CekValue uni_swN8 fun_swN9 ann_swNa)
       -> Word64#
       -> (# State# RealWorld,
             Either
               (CekEvaluationException
                  NamedDeBruijn uni_swN8 fun_swN9)
               (NTerm uni_swN8 fun_swN9 ()) #)
  $wgo_swMs (ds28_swMm
               :: RAList
                    (CekValue uni_swN8 fun_swN9 ann_swNa))
            (ww2_swMp :: Word64#)
    = case ds28_swMm of {
        BHead bx19_avEO t_avEP ts_avEQ ->
          case leWord64# ww2_swMp bx19_avEO of {
            __DEFAULT ->
              jump $wgo_swMs
                ts_avEQ (subWord64# ww2_swMp bx19_avEO);
            1# ->
              jump $windexTree_swMk bx19_avEO ww2_swMp t_avEP
          };
        Nil -> jump exit13_X1l
      }; } in
jump $wgo_swMs env1_XW bx18_swRA }
```

## Conclusion

By enforcing strict evaluation, restructuring `safeIndexOne`, and leveraging Church encoding, we eliminated unnecessary boxing, ensured inlining, and improved evaluator performance by 12%.

*This article has been written in collaboration with Olga Hryniuk.*
