import { storiesOf } from "@storybook/react"
import React from "react"

import { Notification as NotificationInterface } from "../redux/notifications/types"
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
  warning: {
    id: 0,
    level: "WARNING",
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
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <Notification notification={data.default} {...actions} />)
  .add("info", () => <Notification notification={data.info} {...actions} />)
  .add("warning", () => <Notification notification={data.warning} {...actions} />)
  .add("error", () => <Notification notification={data.error} {...actions} />)
  .add("success", () => <Notification notification={data.success} {...actions} />)
