// @flow

/* eslint-disable no-console */

/**
 * @description Custom logger
 * @export
 * @class Logger
 */
class Logger {
  /**
   *Creates an instance of Logger.
   * @memberof Logger
   */
  constructor() {
    switch (process.env.NODE_ENV) {
      case "production":
        this.disableConsole(["log", "debug", "info"])
        break
      case "test":
        this.disableConsole(["debug"])
        break
      default:
        this.info("Development mode detected, verbose-logging enabled.")
        break
    }
  }

  /**
   * @description Disables all console output for production.
   * possible methods are: ["log", "debug", "info", "warn", error"]
   * @param {string[]} [methods=["log", "debug", "info", "warn", "error"]]
   * @memberof Atlas
   */
  disableConsole(
    methods: string[] = ["log", "debug", "info", "warn", "error"],
  ) {
    if (!window.console) {
      window.console = {}
    }
    for (const method of methods) {
      // eslint-disable-next-line
      console[method] = function() {}
    }
  }

  /**
   * @description Basic console.log call with additional parameters
   * @static
   * @param {string} [level="info"]
   * @param {String} text
   * @param {object} payload
   * @memberof Logger
   */
  log(level: string, text: string, payload: ILogObject) {
    payload.timestamp = new Date()
    payload.level = level
    console[level](text, payload)
  }

  /**
   * @description Debug logging
   * @param {string} text
   * @param {object} payload
   * @memberof Logger
   */
  debug(text: string, payload: ILogObject = {}) {
    this.log("debug", text, payload)
  }

  /**
   * @description Info logging
   * @param {string} text
   * @param {object} payload
   * @memberof Logger
   */
  info(text: string, payload: ILogObject = {}) {
    this.log("info", text, payload)
  }

  /**
   * @description Warning logging
   * @param {string} text
   * @param {object} payload
   * @memberof Logger
   */
  warn(text: string, payload: ILogObject = {}) {
    this.log("warn", text, payload)
  }

  /**
   * @description Error logging
   * @param {string} text
   * @param {object} payload
   * @memberof Logger
   */
  error(text: string, payload: ILogObject = {}) {
    this.log("error", text, payload)
  }
}

const log = new Logger()
export { log }
