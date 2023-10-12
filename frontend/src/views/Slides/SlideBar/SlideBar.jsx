import { Slide } from "../Slides/Slide"

export const SlideBar = () => {
    const slides = [
        {
          descuento: "50%",
          titulo1: "Aprovecha nuestro",
          titulo2: "BLACK FRIDAY",
          titulo3: "¡¡OFERTAS IMPERDIBLES!!",
          url: "/sonriendo1-ok.png",
          bg: "#F7D3F3",
          id: 1
        },
        {
          descuento: "25%",
          titulo1: "en accesorios para",
          titulo2: "¡TU MASCOTA!",
          titulo3: "Nuestros pequeños amigos",
          url: "/cat.png",
          bg: "#90A8FF",
          id: 2
        }
      ];
    return (
        <Slide slides ={slides}/>
    )
}
