// @ts-ignore
const createTestCafe = require("testcafe")

let testcafe = null
const concurrency = 1

let browsers = process.env.CI ? ["chrome:headless"] : ["all"]
if (process.env.IE_ONLY) {
  browsers = ["ie"]
}
createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc
    const runner = testcafe.createRunner()

    return runner
      .browsers(browsers)
      .concurrency(1)
      .src("__tests__/e2e/*.test.ts")
      .tsConfigPath("tsconfig.json")
      .run({
        stopOnFirstfail: true,
      })
  })
  .then(failedCount => {
    console.log("Tests failed: " + failedCount)
    testcafe.close()
  })
  .catch(error => {
    console.error(error)
    testcafe.close()
  })
