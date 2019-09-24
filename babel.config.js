module.exports = api => {
  const isTest = api.env("test")
  api.cache(true)
  return {
    presets: [
      "@babel/react",
      "@babel/typescript",
      [
        "@babel/env",
        {
          modules: isTest ? "commonjs" : false,
          targets: {
            browsers: ["last 2 versions", "ie >= 11"],
            node: "current",
          },
        },
      ],
    ],
    plugins: isTest ? ["macros"] : [],
  }
}
