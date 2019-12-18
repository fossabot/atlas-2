module.exports = {
  "**/!docs/*.{css,gql,graphql,html,json,less,md,mdx,scss,vue,yaml,yml}": ["prettier --write", "git add"],
  "**/!docs/*.{js,jsx,ts,tsx}": [
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
