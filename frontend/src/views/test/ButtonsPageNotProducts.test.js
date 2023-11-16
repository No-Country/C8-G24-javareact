import "@testing-library/jest-dom"
import {render , fireEvent} from '@testing-library/react'
import ButtonsPageNotProducts from "../ButtonsPageNotProducts/ButtonsPageNotProducts"



test('renders content', () => { 
    const texts = {
        contentButton: "Volver a la pagina principal",
        titleTxt : "No tienes pedidos registrados"
    } 

    const mockHandler = jest.fn()

    const component = render(<ButtonsPageNotProducts btnText={texts.contentButton} title={texts.titleTxt} click={mockHandler} />);


    const button = component.getByText("Volver a la pagina principal")
    component.getByText("No tienes pedidos registrados")

    fireEvent.click(button)

    expect(mockHandler).toHaveBeenCalledTimes(1)
    //component.debug()

})