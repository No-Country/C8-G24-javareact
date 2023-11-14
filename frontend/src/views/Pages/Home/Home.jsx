import { SlideBar } from "../../Slides/SlideBar/SlideBar";
import Services from "../../Services";
import Catalog from "../../catalog/Catalog";
import NavBar from "../../navBar/NavBar";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState } from "react";

const Home = () => {
  const [imgChicaHome, setChicaHome] = useState();

  const storage = getStorage();
  getDownloadURL(ref(storage, "img-chica-home.png"))
    .then((url) => {
      setChicaHome(url);
    })
    .catch((error) => {
      // Handle any errors
    });

  return (
    <>
      <NavBar />
      <SlideBar />
      <div className="flex flex-row bg-[#fbabafae] max-xl:justify-center">
        <img className="w-1/2 lg:w-[30%]" src={imgChicaHome}></img>
        <div className="w-1/2 lg:w-4/6 lg:mx-20 flex-col p-4 flex justify-center lg:gap-6">
          <p className="text-left text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl my-4">
            ¡Tus mascotas estarán felices de que te quedes en casa!
          </p>
          <p
            className="text-white font-medium md:text-3xl lg:text-4xl 2xl:text-5xl"
            id="textSecondSectionHome"
          >
            Escoge el producto que necesitas, selecciona tu metodo de pago y nosotros te lo llevamos!
          </p>
        </div>
      </div>
      <Services />
      <Catalog />
    </>
  );
};

export default Home;
