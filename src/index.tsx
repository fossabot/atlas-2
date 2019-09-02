/* global NodeList:true */

import "../static/css/ol-ext.css"
import "../static/css/ol.css"

import React from "react"
import ReactDOM from "react-dom"

import Pantheon from "./components/pantheon"
import { log } from "./logger"

function polyfillForEach(): void {
  // @ts-ignore
  if (window.NodeList && !NodeList.prototype.forEach) {
    log.info("Polyfilling `forEach`")
    // @ts-ignore
    NodeList.prototype.forEach = Array.prototype.forEach
  }
}

polyfillForEach()
ReactDOM.render(React.createElement(Pantheon), document.getElementById("root"))
