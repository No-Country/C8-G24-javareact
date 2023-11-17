import {render, screen , act} from '@testing-library/react'

import React from 'react'
import '@testing-library/jest-dom'
import App from "../../App"
import { MemoryRouter } from 'react-router-dom'

test('renders home page', async () => {
  await  act( async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
});
    // Verifica que el componente Home se renderice en la página de inicio
    expect(screen.getByText(/quirúrjicos/i)).toBeInTheDocument();
  });
  
   test('renders about page', async () => {
   await act( async () => {
     render(
       <MemoryRouter initialEntries={['/otros/:product']}>
         <App />
       </MemoryRouter>
     );
    });
        // Verifica que el botón esté presente en el DOM
        expect(screen.getByText(/filtro/i)).toBeInTheDocument();
       
       const checkboxes = screen.getAllByRole('checkbox');
  
       checkboxes.forEach((checkbox) => {
       
        console.log('Checkbox value:', checkbox.value);
       
      });


   });