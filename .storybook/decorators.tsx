import React from "react"
import { Provider } from "react-redux"

import store from "../src/redux/store"

export const withProvider = (story: any): React.ReactNode => (
  <Provider store={store}>{story()}</Provider>
)
