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
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    // Use function hoisting to improve code readability
    "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    "react/prop-types": "off",
    "no-console": "warn",
    "require-jsdoc": [
      "off",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    /**
     * jsdoc
     */
    "jsdoc/check-alignment": 1, // Recommended
    "jsdoc/check-examples": "off",
    "jsdoc/check-indentation": 1,
    "jsdoc/check-param-names": "warn", // Recommended
    "jsdoc/check-syntax": 1,
    "jsdoc/check-tag-names": 1, // Recommended
    "jsdoc/check-types": 1, // Recommended
    "jsdoc/implements-on-classes": 1, // Recommended
    "jsdoc/match-description": 1,
    "jsdoc/newline-after-description": 1, // Recommended
    "jsdoc/no-types": 1,
    "jsdoc/no-undefined-types": 1, // Recommended
    "jsdoc/require-description": 1,
    "jsdoc/require-description-complete-sentence": 1,
    "jsdoc/require-example": "off",
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-jsdoc": 1, // Recommended
    "jsdoc/require-param": "warn", // Recommended
    "jsdoc/require-param-description": 1, // Recommended
    "jsdoc/require-param-name": 1, // Recommended
    "jsdoc/require-param-type": "off", // Recommended
    "jsdoc/require-returns": 1, // Recommended
    "jsdoc/require-returns-check": 1, // Recommended
    "jsdoc/require-returns-description": 1, // Recommended
    "jsdoc/require-returns-type": "off", // Recommended
    "jsdoc/valid-types": 1, // Recommended
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
