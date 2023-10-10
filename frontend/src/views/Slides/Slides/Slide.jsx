import { Carousel } from "flowbite-react";

export const Slide = ({ slides }) => {
  return (
    <div className="h-40 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel id="carrousel">
        {slides.map((slide) => {
          return (
            <div
              className={`flex h-full  dark:bg-gray-700 dark:text-white pl-8 pr-8`}
              style={{ backgroundColor: slide.bg }}
              key={slide.id}
            >
              
              <div className="flex flex-col justify-center items-start w-2/3 font-fontGotu pl-8 lg:px-28 xl:px-40 sm:justify-evenly">
                <p className="truncate  max-sm:text-sm text-3xl max-md:text-lg ">
                  <span className="font-bold text-lg sm:text-5xl 2xl:text-7xl">{slide.descuento}</span>{" "}
                  {slide.titulo1}
                </p>
                <p className="truncate max-sm:text-3xl max-sm:py-2 sm:text-5xl 2xl:text-7xl ">
                  {slide.titulo2}
                </p>
                <p className="text-3xl max-sm:text-xs max-md:text-lg sm:text-4xl truncate 2xl:text-6xl">
                  {slide.titulo3}
                </p>
              </div>
              <div className="flex pt-16 w-1/3">
                <img src={slide.url} alt="imagen mascota"  />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
