import "@testing-library/jest-dom"
import { render } from '@testing-library/react';
import { Slide } from '../Slides/Slides/Slide'



test('renders content', () => { 
    const slides = [
        { id: 1, bg: 'url1', descuento: 'Descuento 1', titulo1: 'Titulo 1', titulo2: 'Titulo 2', titulo3: 'Titulo 3', url: 'imagen1.jpg' }];


    const component = render(<Slide slides={slides} />);

    component.getByText("Descuento 1")
    component.getByText("Titulo 1 Titulo 2")
    component.getByText("Titulo 3")
    const imageElement = component.getByAltText('imagen mascota');
    expect(imageElement).toHaveAttribute('src', 'imagen1.jpg');

})