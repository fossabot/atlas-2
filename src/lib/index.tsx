import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import "../../static/css/tailwind.css"
import LogRocket from "logrocket"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "../components/App"
import store from "../redux/store"

LogRocket.init("wpbi3h/atlas")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("map-container"),
)
