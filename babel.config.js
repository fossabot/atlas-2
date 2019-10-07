module.exports = api => {
  const isTest = api.env("test")
  api.cache(true)
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          debug: false,
          useBuiltIns: "entry",
          corejs: 3,
          modules: isTest ? "commonjs" : false,
          targets: {
            browsers: ["last 2 versions", "ie >= 11"],
            node: "current",
          },
        },
      ],
      "@babel/react",
      "@babel/typescript",
    ],
    plugins: isTest ? ["macros"] : [],
  }
}
