import { log } from "../../src/pantheon"

describe("pantheon", () => {
  it("should return the correct message", () => {
    const messages = ["Hello", "World", "How are you?"]

    messages.forEach(message => {
      expect(log(message)).toEqual(message)
    })
  })
})
