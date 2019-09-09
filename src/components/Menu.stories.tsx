import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import React from "react"

import Menu from "./Menu"

export const actions = {
  toggleModal: action("toggleModal"),
  toggleFullscreen: action("toggleFullscreen"),
}

storiesOf("Menu", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <Menu isFullscreen={false} {...actions} />)
  .add("fullscreen", () => <Menu isFullscreen={true} {...actions} />)
