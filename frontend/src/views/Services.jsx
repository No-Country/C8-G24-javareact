const Services = () => {
  return (
    <section className="lg:text-5xl font-new flex flex-wrap flex-row md:flex-row">
      <p className="uppercase text-blue-600 pt-16 pb-16 w-full text-center">
        en <span className="text-yellow-400">kai pet</span> te contactamos con
        los mejores centros veterinarios, cercanos a tu domicilio.
      </p>
      <div className="flex flex-row md:flex-row max-xl:flex-wrap max-xl:justify-center bg-blue-400 w-full justify-between">
        <ul className="flex flex-col list-disc uppercase px-8 w-1/2 justify-evenly">
          <li>consulta de veterinaria</li>
          <li>procedimientos quirúrjicos</li>
          <li>urgencias y asistencia médica</li>
        </ul>
         <img
          className="w-1/2"
          src="../src/assets/veterinarian.jpg"
          alt="veterinaria"
          
        /> 
      </div>
    </section>
  );
};

export default Services;
