// @ts-ignore
const createTestCafe = require("testcafe")
const os = require("os")

let testcafe = null

const browsers = process.env.CI
  ? ["chrome:headless"]
  : [
      "chrome",
      "firefox",
      // "ie",
      // "edge",
      "chrome:emulation:width=720;height=1280;mobile=true;orientation=vertical;touch=true",
      "chrome:emulation:width=1080;height=1920;mobile=true;orientation=vertical;touch=true",
    ]

createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc
    const runner = testcafe.createRunner()

    return (
      runner
        .browsers(browsers)
        // Try to aim for 1 browser per thread.
        .concurrency(
          Math.max(1, Math.floor(browsers.length / os.cpus().length)),
        )
        .reporter("spec")
        .src("__tests__/e2e/*.test.ts")
        .tsConfigPath("tsConfig.json")
        .run()
    )
  })
  .then(() => {
    testcafe.close()
  })
