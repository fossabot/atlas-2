import React from "react"
import renderer from "react-test-renderer"

import Form, { createSelectOptions } from "../../../src/components/Form"

describe("Form", () => {
  describe("Snapshot", () => {
    it("should render correctly", () => {
      const component = renderer.create(<Form />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe("createSelectOptions()", () => {
    it("should return the correct options for more than 1 option", () => {
      const testCases = [
        {
          in: ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF"],
          snapshot: `
          Array [
            <option
              value="AAAA"
            >
              AAAA
            </option>,
            <option
              value="BBBB"
            >
              BBBB
            </option>,
            <option
              value="CCCC"
            >
              CCCC
            </option>,
            <option
              value="DDDD"
            >
              DDDD
            </option>,
            <option
              value="EEEE"
            >
              EEEE
            </option>,
            <option
              value="FFFF"
            >
              FFFF
            </option>,
          ]
          `,
        },
        {
          in: ["Angewandte Mathematik, Physik und Allgemeinwissenschaften", "Architektur", "Bauingenieurwesen"],
          snapshot: `
          Array [
            <option
              value="Angewandte Mathematik, Physik und Allgemeinwissenschaften"
            >
              Angewandte Mathematik, Physik und Allgemeinwissenschaften
            </option>,
            <option
              value="Architektur"
            >
              Architektur
            </option>,
            <option
              value="Bauingenieurwesen"
            >
              Bauingenieurwesen
            </option>,
          ]
          `,
        },
      ]
      testCases.forEach(tc => {
        expect(createSelectOptions(tc.in)).toMatchInlineSnapshot(tc.snapshot)
      })
    })

    it("should return the correct options for 1 option", () => {
      const testCase = {
        in: ["AAAA"],
        snapshot: `
          Array [
            <option
              value="AAAA"
            >
              AAAA
            </option>,
          ]
          `,
      }
      expect(createSelectOptions(testCase.in)).toMatchInlineSnapshot(testCase.snapshot)
    })

    it("should return an empty string if no options are provided", () => {
      expect(createSelectOptions([])).toEqual([])
    })
  })
})
