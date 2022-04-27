module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "off",
  },
}
