module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 50,
      statements: -25,
    },
  },
  roots: ["./__tests__/unit/"],
  testURL: "http://localhost",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
  transform: {
    "^.+\\.(t|j)s$": "babel-jest",
  },
}
