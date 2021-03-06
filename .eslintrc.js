module.exports = {
  /*
  settings configuration from here:
  https://github.com/yannickcr/eslint-plugin-react#configura
*/
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint", "jest", "promise", "react", "testcafe", "jsdoc"],
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:testcafe/recommended",
    "plugin:jsdoc/recommended",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-ignore": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "error",
    "no-prototype-builtins": "off",
    "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    "react/prop-types": "off",
    "no-console": "warn",

    // jsdoc
    "jsdoc/check-access": "warn",
    "jsdoc/check-values": "warn",
    "jsdoc/newline-after-description": "warn",
    "jsdoc/check-alignment": "warn",
    "jsdoc/check-examples": "off",
    "jsdoc/check-indentation": "warn",
    "jsdoc/check-param-names": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/check-tag-names": "warn",
    "jsdoc/check-types": "off",
    "jsdoc/implements-on-classes": "warn",
    "jsdoc/match-description": "warn",
    "jsdoc/newline-after-description": "warn",
    "jsdoc/no-types": "error",
    "jsdoc/no-undefined-types": "off",
    "jsdoc/require-description-complete-sentence": "warn",
    "jsdoc/require-description": "warn",
    "jsdoc/require-example": "off",
    "jsdoc/require-hyphen-before-param-description": "warn",
    "jsdoc/require-jsdoc": "error",
    "jsdoc/require-param-description": "warn",
    "jsdoc/require-param-name": "warn",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-param": "warn",
    "jsdoc/require-returns-check": "warn",
    "jsdoc/require-returns-description": "warn",
    "jsdoc/require-returns-type": "off",
    "jsdoc/require-returns": "warn",
    "jsdoc/valid-types": "warn",
  },
  overrides: [
    {
      files: ["*/e2e/*test.ts"],
      rules: {
        "jest/no-test-callback": "off",
        "jest/expected-expect": "off",
      },
    },
  ],
}
