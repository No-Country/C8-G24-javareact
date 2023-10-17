import { veterinaria } from '../assets/helpers/Images';

const Services = () => {
  return (
    <section className="lg:text-3xl text-md md:text-2xl 2xl:text-4xl font-new flex flex-wrap flex-row md:flex-row">
      <p className="uppercase text-blue-600 pt-16 pb-16 text-center px-4  2xl:px-40 md:leading-loose">
        en <span className="text-yellow-400">kai pet</span> te contactamos con
        los mejores centros veterinarios, cercanos a tu domicilio.
      </p>
      <div className="flex flex-row md:flex-row max-xl:flex-wrap max-xl:justify-center bg-blue-400 w-full max-md:justify-between">
        <ul className= "flex flex-col uppercase justify-evenly  lg:justify-center max-[375px]:pl-6 pl-8 lg:pl-28 xl:pl-40 2xl:pl-52 max-[360px]:w-3/5 w-1/2 lg:w-9/12">
          <li className="bg-blue-500 text-white pl-4 py-10">consulta de veterinaria</li>
          <li className="bg-blue-600 text-white pl-4 py-10">procedimientos quirúrjicos</li>
          <li className="bg-blue-700 text-white pl-4 py-10">urgencias y asistencia médica</li>
        </ul>
         <img
          className="w-1/2 lg:w-3/12 max-[360px]:w-2/5"
          src={veterinaria}
          alt="veterinaria"
          
        /> 
      </div>
    </section>
  );
};

export default Services;
