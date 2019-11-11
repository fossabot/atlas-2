// @ts-ignore
const createTestCafe = require("testcafe")
const os = require("os")

let testcafe = null

const browsers = process.env.CI ? ["chrome:headless"] : ["all"]

// Try to aim for 1 browser per thread.
const concurrency = Math.max(1, Math.floor((os.cpus().length - 1) / browsers.length))

createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc
    const runner = testcafe.createRunner()

    return runner
      .browsers(browsers)
      .concurrency(concurrency)
      .reporter("spec")
      .src("__tests__/e2e/*.test.ts")
      .tsConfigPath("tsconfig.json")
      .run()
  })
  .then(() => {
    testcafe.close()
  })
