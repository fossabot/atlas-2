import { buildOptions } from "../../../src/components/Form"

describe("Form", () => {
  describe("buildOptions()", () => {
    it("should return the correct options", () => {
      const testCases = [
        {
          in: [
            "Automobilbau",
            "Banken, Versicherung, Immobilien,",
            "Finanzdienstleistung",
            "Bauwesen, Architektur",
            "Bergbau",
            "Bildung&amp;Training",
          ],
          out:
            "<option>Automobilbau</option><option>Banken, Versicherung, Immobilien,</option><option>Finanzdienstleistung</option><option>Bauwesen, Architektur</option><option>Bergbau</option><option>Bildung&amp;Training</option>",
        },
        {
          in: [
            "Angewandte Mathematik, Physik und Allgemeinwissenschaften",
            "Architektur",
            "Bauingenieurwesen",
          ],
          out:
            "<option>Angewandte Mathematik, Physik und Allgemeinwissenschaften</option><option>Architektur</option><option>Bauingenieurwesen</option>",
        },
      ]
      testCases.forEach(tc => {
        expect(buildOptions(tc.in)).toEqual(tc.out)
      })
    })
    it("should return an empty string if no options are provided", () => {
      expect(buildOptions([])).toEqual("")
    })
  })
})
