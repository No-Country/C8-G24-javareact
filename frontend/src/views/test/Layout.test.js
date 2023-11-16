import "@testing-library/jest-dom"
import {render , fireEvent} from '@testing-library/react'
import Layout from "../Layout/Layout"

describe ("<Layout/>" , () => {
    let component

    beforeEach(() => 
    component = render(
        <Layout>
            <div className="hola">
                HOLA
            </div>
        </Layout>
    ))
    //Text children
    test('Render children inside div', () => {  component.getByText("HOLA")})
    
    //Classname of layout component
    test('Render style layout', () => { 
        const el = component.getByText("HOLA")
        expect(el.parentNode).toHaveClass('flex');
     })
      //Classname of div
     test('Render style layout', () => { 
        const el = component.getByText("HOLA")
        expect(el).toHaveClass('hola');
     })
     
})