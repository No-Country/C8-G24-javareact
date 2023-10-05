import { SlideBar } from "../../Slides/SlideBar/SlideBar";
import Services from "../../Services";
import imgChicaHome from "../../../assets/img-chica-home.png";
import Catalog from "../../catalog/Catalog";
import NavBar from "../../navBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <SlideBar />
      <div className="flex flex-row max-xl:flex-wrap bg-[#fbabafae] max-xl:justify-center ">
        <img className="max-lg:w-96" src={imgChicaHome}></img>
        <div className="flex flex-col justify-around items-center">
          <p className="text-center font-fontFresca text-5xl leading-normal max-xl:my-8">
            ¡Tus mascotas estarán felices de que te quedes en casa!
          </p>
          <p className="font- font-fontFredoka text-white text-5xl leading-normal text-stroke">
            CON <span className="text-[#FFCC0A]"> KAI PET </span>ESCOGE EL
            PRODUCTO QUE NECESITAS, SELECCIONA TU MÉTODO DE PAGO Y NOSOTROS TE
            LO LLEVAMOS!
          </p>
        </div>
      </div>
      <Services />
      <Catalog />
    </>
  );
};

export default Home;
