import "@testing-library/jest-dom"
import { render } from '@testing-library/react';
import ProfileTable from "../ProfileTable/ProfileTable";


test('tables render ', () => { 
    const texts = {
        title : "Volver a la pagina principal",
        subtitle : "Vopal1",
        firstData : "V2",
        secondData : "Vo3",
        thirdColTitle : "Vcipal",
        fourCol : "Vipal",
        fourTitle :"al",
        fourData : "principal",
    } 
    
    const component = render(<ProfileTable firstData={texts.firstData} textThirdCol={texts.textThirdCol} secondData={texts.secondData} fourTitle={texts.fourTitle} fourCol={texts.fourCol} fourData={texts.fourData}  title={texts.title} subtitle={texts.subtitle}  />);

    component.getByText("V2")
    component.getByText("Volver a la pagina principal")
    component.getByText("Vopal1")
    component.getByText("principal")
    component.getByText("Vo3")
    component.getByText("al");
    
})

test('renders third column when thirdCol is true and flag', () => {
    const trueElement = render(
      <ProfileTable thirdCol={true} flag={'url/to/flag'} />
    );
  
    // Verificar que la tercera columna se renderice cuando thirdCol es true
   const thirdColElement = trueElement.queryByTestId('table-row-element'); // Puedes agregar un data-testid para facilitar la búsqueda
   expect(thirdColElement).toBeInTheDocument();

    // Verificar que la bandera se renderice cuando flag es proporcionado
    const flagElement = trueElement.getByAltText("User settings")
    expect(flagElement).toBeInTheDocument();
    
  });

  test('renders third column when thirdCol is true, no flags', () => {
    const trueElement = render(
      <ProfileTable thirdCol={true} flag={undefined} textThirdCol={'Some Text'} />
    );
  
    // Verificar que la tercera columna se renderice cuando thirdCol es true
   const thirdColElement = trueElement.queryByTestId('table-row-element'); // Puedes agregar un data-testid para facilitar la búsqueda
   expect(thirdColElement).toBeInTheDocument();

  //Aparece texto si flag es undefined
  trueElement.getByText("Some Text")
    
  });


  test('renders third column when thirdCol is true and flag', () => {
    const falseElement = render(
      <ProfileTable thirdCol={false} fourCol={true} fourData={"subtitle"} />
    );
   
    falseElement.getByText("subtitle")
});