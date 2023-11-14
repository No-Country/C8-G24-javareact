import { Slide } from "../Slides/Slide"
import { catSlide , dogSlide , natural , food, dogSmile } from "../../../assets/helpers/Images";

export const SlideBar = () => {
    const slides = [
        {
          descuento: "50%",
          titulo1: "en nuestro",
          titulo2: "BLACK FRIDAY",
          titulo3: "¡¡Ofertas imperdibles!!",
          url: dogSlide,
          bg: dogSmile ,
          id: 1
        },
        {
          descuento: "25%",
          titulo1: "en accesorios para",
          titulo2: "¡TU MASCOTA!",
          titulo3: "Todo para ellos!",
          url: catSlide,
          bg: natural,
          id: 2
        }
      ];
    return (
        <Slide slides ={slides}/>
    )
}
