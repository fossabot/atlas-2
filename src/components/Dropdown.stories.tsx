import { storiesOf } from "@storybook/react"
import React from "react"

import Dropdown, { DropdownProps } from "./Dropdown"
export const data: DropdownProps = {
  label: "Test Label",
  options: [
    "Praktikum im Studium",
    "Bachelor- oder Masterarbeit",
    "Stellen f&uuml;r Doktoranden und Doktorandinnen",
    "Stellen f&uuml;r Duales Studium",
    "Werkstudentent&auml;tigkeit",
    "Studentenjob",
    "Stelle f&uuml;r Absolventen und Absolventinnen",
    "Traineeprogramm",
    "Stelle, die erste Berufserfahrung voraussetzt",
    "Stellen f&uuml;r Studienabbrecher",
  ],
}
export const actions = {}

storiesOf("Dropdown", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <Dropdown label={data.label} options={data.options} {...actions} />)
