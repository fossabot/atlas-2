import { storiesOf } from "@storybook/react"
import React from "react"
import { Provider } from "react-redux"

import { Notification as NotificationInterface } from "../redux/notifications/types"
import store from "../redux/store"
import Notification from "./Notification"

export const data: Record<string, NotificationInterface> = {
  default: {
    id: 0,
    level: "SOMETHING_ELSE",
    content: "My Placeholder",
  },
  info: {
    id: 0,
    level: "INFO",
    content: "My Placeholder",
  },
  warn: {
    id: 0,
    level: "WARN",
    content: "My Placeholder",
  },
  error: {
    id: 0,
    level: "ERROR",
    content: "My Placeholder",
  },
  success: {
    id: 0,
    level: "SUCCESS",
    content: "My Placeholder",
  },
}
export const actions = {}

storiesOf("Notification", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => (
    <Notification notification={data.default} {...actions} />
  ))
  .add("info", () => <Notification notification={data.info} {...actions} />)
  .add("warn", () => <Notification notification={data.warn} {...actions} />)
  .add("error", () => <Notification notification={data.error} {...actions} />)
  .add("success", () => (
    <Notification notification={data.success} {...actions} />
  ))
