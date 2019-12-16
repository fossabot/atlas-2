module.exports = {
  tags: {
    allowUnknownTags: ["category"],
  },
  source: {
    include: ["./src"],
    includePattern: "\\.(js|jsx|ts|tsx)$",
  },
  plugins: ["node_modules/better-docs/typescript", "node_modules/better-docs/category"],
  opts: {
    encoding: "utf8",
    destination: "docs/",
    recurse: true,
    verbose: true,
    readme: "./README.md",
    template: "node_modules/better-docs",
  },
  templates: {
    "better-docs": {
      name: "Atlas",
      navigation: [
        {
          label: "GitHub",
          href: "https://github.com/chronark/atlas",
        },
      ],
    },
    default: {
      staticFiles: {
        include: ["./static"],
      },
    },
  },
}
