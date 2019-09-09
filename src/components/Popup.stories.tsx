import { storiesOf } from "@storybook/react"
import React from "react"

import Popup, { PopupProps } from "./Popup"

export const data: PopupProps = {
  label: "Test Label",
  options: ["Option 1", "Option 2"],
}
export const actions = {}

storiesOf("Popup", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <Popup {...actions} />)
