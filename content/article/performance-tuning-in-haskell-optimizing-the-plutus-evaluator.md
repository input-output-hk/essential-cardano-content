---
title: "Performance tuning in Haskell: optimizing the Plutus evaluator"
tags:
  - Haskell
url: ""
image: ""
image_text: ""
---

Performance optimization often comes down to identifying subtle inefficiencies in the generated code. While reviewing the Glasgow Haskell Compiler (GHC) Core of the production evaluator, the Input | Output (IO) Plutus team discovered that a key function, `safeIndexOne`, was not getting inlined and was introducing unnecessary laziness. By addressing strictness issues, eliminating redundant data structures, and leveraging the worker-wrapper transformation, the team achieved a **12% performance improvement**. 

  

This post, written by Roman Kireev – IO’s compiler engineer, describes the optimization process, detailing how the team turned recursive lookups into efficient jump-based execution.

## Identifying optimization opportunities

  

While analyzing the GHC Core output of the evaluator, the team noticed the following snippet:

  

\`\`\`haskell

case safeIndexOne env1\_XW (W64# bx18\_scPRb) of {

  Nothing -> jump exit\_X16 <...>

  Just val\_acLQA -> jump returnCek\_scPkh ctx1\_X0 val\_acLQA <...>

}

\`\`\`

  

This code performs a variable lookup using `safeIndexOne`. If the lookup fails, the evaluator terminates via `jump exit_X16`. Otherwise, recursion continues with the looked-up value using `jump returnCek_scPkh`.

  

In both cases, the `jump` keyword indicates that recursion compiles to an efficient jump to a label. For more details, see the ‘_Compiling without Continuations’_ [research paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/compiling-without-continuations.pdf). 

  

Several optimization opportunities stood out:

1.  `safeIndexOne` **is not inlined** – its presence in the Core suggests that GHC isn’t inlining it.
    
2.  **Unnecessary boxing of indices** – the in-scope variable index `bx18_scPRb` is wrapped with `W64#`, indicating that `safeIndexOne` is lazier than necessary.
    
3.  **Avoidable \`**Maybe\` **construction** – `safeIndexOne` returns a `Maybe`, which is immediately deconstructed, adding unnecessary overhead.
    

  

## Addressing strictness issues

Examining `safeIndexOne`, we see:

  

\`\`\`haskell

safeIndexOne :: RAList a -> Word64 -> Maybe a

safeIndexOne Nil \_ = Nothing

safeIndexOne (BHead w t ts) !i =

    if i <= w

    then indexTree w i t

    else safeIndexOne ts (i-w)

  where

    indexTree :: Word64 -> Word64 -> Tree a -> Maybe a

    indexTree = <...>

\`\`\`

  

The first clause ignores the second argument, leading GHC to treat it as lazy. This causes the `W64#` wrapping seen earlier. To enforce strict evaluation, we modify the function:

  

\`\`\`haskell

safeIndexOne Nil !\_ = Nothing

safeIndexOne (BHead w t ts) i =

\`\`\`

  

After recompiling, we see that the strictness issue is resolved:

  

\`\`\`haskell

case $wsafeIndexOne env1\_XW bx18\_swNG of {

  Nothing -> jump exit\_X16 <...>

  Just val\_apny -> jump returnCek\_sw4D ctx1\_X0 val\_apny <...>

}

\`\`\`

  

Now, `$wsafeIndexOne` (see ‘[The Worker/Wrapper Transformation’ research paper](https://people.cs.nott.ac.uk/pszgmh/wrapper-extended.pdf)) operates directly on a machine word value, eliminating unnecessary boxing and unboxing.

## Attempting inlining through worker-wrapper transformation

However, `safeIndexOne` is still not inlined. Since it is recursive, GHC won’t inline it by default. We attempt a manual worker-wrapper transformation to create a non-recursive top-level function:

  

\`\`\`haskell

safeIndexOne :: forall a. RAList a -> Word64 -> Maybe a

safeIndexOne = go

  where

    go :: RAList a -> Word64 -> Maybe a

    go Nil !\_ = Nothing

    go (BHead w t ts) !i =

        if i <= w

        then indexTree w i t

        else go ts (i-w)

  

    indexTree :: Word64 -> Word64 -> Tree a -> Maybe a

    indexTree = <...>

\`\`\`

  

However, this does not solve the issue – GHC floats go to the top level, preventing inlining.

## Ensuring inlining with Church encoding

We need to ensure that GHC retains `go` and `indexTree` as local definitions so when `safeIndexOne` is inlined, both appear in the generated Core at the call site, allowing GHC to optimize them. This could likely be achieved using something from `GHC.Magic`, but the simplest approach is to make `safeIndexOne` accept a term-level argument and use it within `go` and `indexTree`. To do this, we introduce a term-level argument by Church-encoding `Maybe`:

  

\`\`\`haskell

safeIndexOne :: forall a b. b -> (a -> b) -> RAList a -> Word64 -> b

safeIndexOne z f = go

  where

    go :: RAList a -> Word64 -> b

    go Nil !\_ = z

    go (BHead w t ts) !i =

        if i <= w

        then indexTree w i t

        else go ts (i-w)

  

    indexTree :: Word64 -> Word64 -> Tree a -> Maybe a

    indexTree = <...>

\`\`\`

  

Now, `z` replaces `Nothing`, and `f` replaces `Just`. The call site is adapted from:

\`\`\`haskell

case Env.safeIndexOne varEnv varIx of

    Nothing  -> throw <...>

    Just val -> pure val

\`\`\`

to:

\`\`\`haskell

Env.safeIndexOne

    (throw <...>)

    pure

    varEnv

    varIx

\`\`\`

  

This allows `safeIndexOne` to inline, along with its internals.

## Result: optimized Core output

The final Core output shows a recursive join point with efficient machine word operations and label jumps:

  

<details>

<summary>Core</summary>

  

\`\`\`haskell

joinrec {

  $windexTree\_swMk

    :: Word64#

       -> Word64#

       -> Tree (CekValue uni\_swN8 fun\_swN9 ann\_swNa)

       -> (# State# RealWorld,

             Either

               (CekEvaluationException

                  NamedDeBruijn uni\_swN8 fun\_swN9)

               (NTerm uni\_swN8 fun\_swN9 ()) #)

  $windexTree\_swMk (ww2\_swMc :: Word64#)

                   (ww3\_swMg :: Word64#)

                   (ds28\_swMi

                      :: Tree

                           (CekValue

                              uni\_swN8 fun\_swN9 ann\_swNa))

    = case ww3\_swMg of wild14\_X15 {

        \_\_DEFAULT ->

          case ww2\_swMc of wild15\_X1m {

            \_\_DEFAULT ->

              case ds28\_swMi of {

                Leaf ds29\_avEa -> jump exit14\_X16;

                Node ipv13\_avEc ipv14\_avEd ipv15\_avEe ->

                  case wild14\_X15 of wild17\_X1n {

                    \_\_DEFAULT ->

                      let {

                        offset'\_swtg :: Word64#

                        offset'\_swtg

                          = subWord64#

                              wild17\_X1n 1#Word64 } in

                      let {

                        halfSize\_sw7I :: Word64#

                        halfSize\_sw7I

                          = uncheckedShiftRL64#

                              wild15\_X1m 1# } in

                      case leWord64#

                             offset_swtg halfSize_sw7I

                      of {

                        \_\_DEFAULT ->

                          jump $windexTree\_swMk

                            halfSize\_sw7I

                            (subWord64#

                               offset_swtg halfSize_sw7I)

                            ipv15\_avEe;

                        1# ->

                          jump $windexTree\_swMk

                            halfSize\_sw7I

                            offset'\_swtg

                            ipv14\_avEd

                      };

                    1#Word64 -> jump exit15\_X17 ipv13\_avEc

                  }

              };

            1#Word64 ->

              case wild14\_X15 of wild16\_X1n {

                \_\_DEFAULT ->

                  case ds28\_swMi of {

                    Leaf ds29\_avEa -> jump exit14\_X16;

                    Node ipv13\_avEc ipv14\_avEd ipv15\_avEe ->

                      let! { \_\_DEFAULT ~ wild18\_X1o

                      <- wild16\_X1n } in

                      let {

                        offset'\_swtg :: Word64#

                        offset'\_swtg

                          = subWord64#

                              wild18\_X1o 1#Word64 } in

                      case leWord64# offset'\_swtg 0#Word64

                      of {

                        \_\_DEFAULT ->

                          jump $windexTree\_swMk

                            0#Word64 offset_swtg ipv15_avEe;

                        1# ->

                          jump $windexTree\_swMk

                            0#Word64 offset_swtg ipv14_avEd

                      }

                  };

                1#Word64 ->

                  case ds28\_swMi of {

                    Leaf x\_avEC ->

                      jump returnCek\_sw7q

                        ctx1\_X0 x\_avEC ipv12\_swMu;

                    Node ipv13\_avEE ipv14\_avEF ipv15\_avEG ->

                      jump exit15\_X17 ipv13\_avEE

                  }

              }

          };

        0#Word64 -> jump exit16\_X18

      }; } in

joinrec {

  $wgo\_swMs

    :: RAList (CekValue uni\_swN8 fun\_swN9 ann\_swNa)

       -> Word64#

       -> (# State# RealWorld,

             Either

               (CekEvaluationException

                  NamedDeBruijn uni\_swN8 fun\_swN9)

               (NTerm uni\_swN8 fun\_swN9 ()) #)

  $wgo\_swMs (ds28\_swMm

               :: RAList

                    (CekValue uni\_swN8 fun\_swN9 ann\_swNa))

            (ww2\_swMp :: Word64#)

    = case ds28\_swMm of {

        BHead bx19\_avEO t\_avEP ts\_avEQ ->

          case leWord64# ww2\_swMp bx19\_avEO of {

            \_\_DEFAULT ->

              jump $wgo\_swMs

                ts\_avEQ (subWord64# ww2\_swMp bx19\_avEO);

            1# ->

              jump $windexTree\_swMk bx19\_avEO ww2\_swMp t\_avEP

          };

        Nil -> jump exit13\_X1l

      }; } in

jump $wgo\_swMs env1\_XW bx18\_swRA }

\`\`\`

</details>

## Conclusion

By enforcing strict evaluation, restructuring `safeIndexOne`, and leveraging Church encoding, we eliminated unnecessary boxing, ensured inlining, and improved evaluator performance by 12%.
