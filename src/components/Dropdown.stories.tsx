import { storiesOf } from "@storybook/react"
import React from "react"

import Dropdown, { DropdownProps } from "./Dropdown"

export const data: DropdownProps = {
  label: "Test Label",
  options: ["Option 1", "Option 2"],
}
export const actions = {}

storiesOf("Dropdown", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <Dropdown label={data.label} options={data.options} {...actions} />)
