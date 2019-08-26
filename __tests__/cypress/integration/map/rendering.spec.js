describe("Basic Map tests", function() {
  it("finds the map element", function() {
    cy.visit("http://localhost:5000")

    cy.contains("map")
  })
})
