module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "@next/next/no-img-element": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
