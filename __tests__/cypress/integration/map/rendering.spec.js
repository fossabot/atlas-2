describe("Basic Map tests", () => {
  it("finds the map-container element", () => {
    cy.visit("http://localhost:5000")

    cy.contains("map-container")
  })
})
