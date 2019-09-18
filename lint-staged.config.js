module.exports = {
  "package.json": ["npm run format-package-json", "git add"],
  "**/*.{css,gql,graphql,html,json,less,md,mdx,scss,vue,yaml,yml}": [
    "prettier --write",
    "git add",
  ],
  "**/*.{js,jsx,ts,tsx}": [
    "import-sort --write",
    "prettier --write",
    "eslint --cache --ext '.js,.jsx,.ts,.tsx' --fix",
    "git add",
    "jest --bail --findRelatedTests",
  ],
  "src/**/*": [
    // Run build without passing changed files to command: https://github.com/okonet/lint-staged/issues/174
    "bash -c 'yarn build'",
  ],
}
