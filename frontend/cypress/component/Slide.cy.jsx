import { Slide } from "../../src/views/Slides/Slides/Slide"

describe('Slide.cy.jsx', () => {
  it('playground', () => {
     cy.mount(<Slide slides={[{"id":"1", "title":"tleOne", "juli":"ddd"},{"id":"2", "title":"tleOne", "juli":"ddd"}]}/>)
  })
})