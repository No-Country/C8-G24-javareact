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
      <div className="flex flex-row bg-[#fbabafae] max-xl:justify-center">
        <img className="w-1/2 lg:w-2/6" src={imgChicaHome}></img>
        <div className="w-1/2 lg:w-4/6 lg:mx-20 flex-col items-center p-4 flex justify-center lg:gap-6">
          <p className="text-left  sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl my-4">
            ¡Tus mascotas estarán felices de que te quedes en casa! 
          </p>
          <p className="text-white font-medium md:text-3xl lg:text-4xl 2xl:text-5xl font-fontGotu" id="textSecondSectionHome">
            ESCOGE EL PRODUCTO QUE NECESITAS, SELECCIONA TU MÉTODO DE PAGO Y NOSOTROS TE LO LLEVAMOS!
          </p>
        </div>
      </div>
      <Services />
      <Catalog />
    </>
  );
};

export default Home;
