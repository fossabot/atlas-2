import { storiesOf } from "@storybook/react"
import React from "react"

import TextInput, { TextInputProps } from "./TextInput"

export const data: TextInputProps = {
  label: "Test Label",
  placeholder: "My Placeholder",
}
export const actions = {}

storiesOf("TextInput", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)

  .add("default", () => (
    <TextInput label={data.label} placeholder={data.placeholder} {...actions} />
  ))
  .add("without Placeholder", () => (
    <TextInput label={data.label} {...actions} />
  ))
