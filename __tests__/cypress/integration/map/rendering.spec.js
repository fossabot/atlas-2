describe("Basic Map tests", () => {
  it("finds the map-container element", () => {
    cy.visit("/")

    cy.get("[id=map-container]").should("exist")
  })
})
