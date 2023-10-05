import { Slide } from "../Slides/Slide"

export const SlideBar = () => {
    const slides = [
        {
          descuento: "50%",
          titulo1: "APROVECHA NUESTRO",
          titulo2: "BLACK FRIDAY",
          titulo3: "¡¡OFERTAS IMPERDIBLES!!",
          url: "../src/assets/sonriendo1-ok.png",
          bg: "#F7D3F3",
          id: 1
        },
        {
          descuento: "25%",
          titulo1: "en accesorios para",
          titulo2: "¡TU MASCOTA!",
          titulo3: "Nuestros pequeños amigos",
          url: "../src/assets/cat.png",
          bg: "#90A8FF",
          id: 2
        }
      ];
    return (
        <Slide slides ={slides}/>
    )
}
