describe("Basic Map tests", () => {
  it("finds the root element", () => {
    cy.visit("http://localhost:5000")

    cy.contains("root")
  })
})
