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
      <div className="flex flex-row max-xl:flex-wrap bg-[#fbabafae] max-xl:justify-center">
        <img className="w-1/2" src={imgChicaHome}></img>
        <div className="w-1/2 flex-col justify-around items-center p-4">
          <p className="text-left lg:text-5xl leading-normal my-4">
            ¡Tus mascotas estarán felices de que te quedes en casa! 
          </p>
          <p className=" text-white font-medium lg:text-5xl font-fontGotu">
            CON <span className="text-black"> KAI PET </span>ESCOGE EL
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
