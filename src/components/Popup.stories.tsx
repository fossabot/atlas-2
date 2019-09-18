import { storiesOf } from "@storybook/react"
import React from "react"

import Popup from "./Popup"

export const actions = {}

storiesOf("Popup", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <Popup {...actions} />)
