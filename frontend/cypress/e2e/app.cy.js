describe('App', () => {
  beforeEach('Home site', () => {
    cy.visit("http://localhost:5173/")
  })

  it("text" , () => {
    cy.get("p").contains("mascota")
  })
  
})