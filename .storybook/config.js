import "../static/css/ol-ext.css"
import "../static/css/ol.css"
import "../static/css/tailwind.css"
import "./storybook.css"

import { addDecorator, configure } from "@storybook/react"
import requireContext from "require-context.macro"

import { withProvider } from "./decorators"

const req = requireContext("../src", true, /\.stories.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

addDecorator(withProvider)
