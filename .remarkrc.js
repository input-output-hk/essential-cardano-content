export default {
  plugins: [
    "remark-frontmatter",
    "remark-preset-lint-markdown-style-guide",
    ["remark-lint-maximum-line-length", false],
    ["remark-lint-ordered-list-marker-value", "ordered"],
    ["remark-lint-emphasis-marker", "consistent"],
    "remark-lint-no-html",
    ["remark-lint-maximum-heading-length", false],
    ["remark-lint-no-duplicate-headings", false],
    ["remark-lint-unordered-list-marker-style", "consistent"],
    ["remark-lint-no-file-name-articles", false],
    ["remark-lint-no-emphasis-as-heading", false],
  ],
};
