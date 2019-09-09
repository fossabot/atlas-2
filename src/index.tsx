/* global NodeList:true */

import "../static/css/ol-ext.css"
import "../static/css/ol.css"
import "../static/css/tailwind.css"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Pantheon from "./components/pantheon"
import { log } from "./logger"
import store from "./redux/store"

function polyfillForEach(): void {
  // @ts-ignore
  if (window.NodeList && !NodeList.prototype.forEach) {
    log.info("Polyfilling `forEach`")
    // @ts-ignore
    NodeList.prototype.forEach = Array.prototype.forEach
  }
}

polyfillForEach()

ReactDOM.render(
  <Provider store={store}>
    <Pantheon />
  </Provider>,
  document.getElementById("map-container"),
)
