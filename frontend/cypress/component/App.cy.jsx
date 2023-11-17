import App from "../../src/App";

describe('App.cy.jsx', () => {
  it('playground', () => {
     cy.mount(<App/>)
  })
})