const Services = () => {
  return (
    <section className="text-5xl font-fontFresca font-new flex flex-wrap flex-col-reverse md:flex-row">
      <p className="uppercase text-blue-600 pt-16 pb-16 w-full text-center">
        en <span className="text-yellow-400">kai pet</span> te contactamos con
        los mejores centros veterinarios, cercanos a tu domicilio.
      </p>
      <div className="flex flex-col-reverse md:flex-row max-xl:flex-wrap max-xl:justify-center bg-blue-400 w-full justify-between">
        <ul className="flex flex-col justify-around items-center px-8 list-inside list-disc uppercase p-6">
          <li>consulta de veterinaria</li>
          <li>procedimientos quirúrjicos</li>
          <li>urgencias y asistencia médica</li>
        </ul>
        <img
          className=""
          src="../src/assets/veterinaria.png"
          alt="veterinaria"
        />
      </div>
    </section>
  );
};

export default Services;
