import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import React from "react"

import Form from "./Form"
import Modal from "./Modal"

export const children: React.ReactNode = <div></div>

export const actions = {
  toggle: action("toggle"),
}

storiesOf("Modal", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)

  .add("default", () => (
    <Modal show={true} {...actions}>
      {children}
    </Modal>
  ))
  .add("not shown", () => (
    <Modal show={false} {...actions}>
      {children}
    </Modal>
  ))
  .add("with Form", () => (
    <Modal show={true} {...actions}>
      {<Form></Form>}
    </Modal>
  ))
