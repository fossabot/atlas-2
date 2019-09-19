import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import React from "react"

import SearchBar from "./SearchBar"

export const actions = {
  search: action("search"),
}

storiesOf("SearchBar", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <SearchBar defaultValue="Nürnberg" {...actions} />)
  .add("loading", () => <SearchBar defaultValue="Deutschland" {...actions} />)
