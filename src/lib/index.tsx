import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import "../../static/css/tailwind.css"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "../components/App"
import store from "../redux/store"
import LogRocket from "logrocket"
LogRocket.init("1eugfg/atlas")
LogRocket.identify("THE_USER_ID_IN_YOUR_APP", {
  name: "James Morrison",
  email: "jamesmorrison@example.com",

  // Add your own custom user variables here, ie:
  subscriptionType: "pro",
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("map-container"),
)
