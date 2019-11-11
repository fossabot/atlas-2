// @ts-ignore
const createTestCafe = require("testcafe")
const os = require("os")

let testcafe = null

const browsers = process.env.CI ? ["chrome:headless"] : ["all"]

createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc
    const runner = testcafe.createRunner()

    return runner
      .browsers(browsers)
      .concurrency(1)
      .reporter("spec")
      .src("__tests__/e2e/*.test.ts")
      .tsConfigPath("tsconfig.json")
      .run()
  })
  .then(() => {
    testcafe.close()
  })
