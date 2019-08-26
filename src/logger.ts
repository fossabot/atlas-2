/* eslint-disable no-console */
import { LogObject } from "./types/custom_types"

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
  public constructor() {
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
  private disableConsole(
    methods: string[] = ["log", "debug", "info", "warn", "error"],
  ): void {
    for (const method of methods) {
      // @ts-ignore
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
  private buildPayload(level: string, payload: LogObject): LogObject {
    payload.timestamp = new Date()
    payload.level = level
    return payload
  }

  /**
   * @description Debug logging
   * @param {string} text
   * @param {object} payload
   * @memberof Logger
   */
  public debug(text: string, payload: LogObject = {}): void {
    payload = this.buildPayload("debug", payload)
    console.debug(text, payload)
  }

  /**
   * @description Info logging
   * @param {string} text
   * @param {object} payload
   * @memberof Logger
   */
  public info(text: string, payload: LogObject = {}): void {
    payload = this.buildPayload("info", payload)
    console.log(text, payload)
  }

  /**
   * @description Warning logging
   * @param {string} text
   * @param {object} payload
   * @memberof Logger
   */
  public warn(text: string, payload: LogObject = {}): void {
    payload = this.buildPayload("warn", payload)
    console.warn(text, payload)
  }

  /**
   * @description Error logging
   * @param {string} text
   * @param {object} payload
   * @memberof Logger
   */
  public error(text: string, payload: LogObject = {}): void {
    payload = this.buildPayload("error", payload)
    console.error(text, payload)
  }
}

const log = new Logger()
export { log }
