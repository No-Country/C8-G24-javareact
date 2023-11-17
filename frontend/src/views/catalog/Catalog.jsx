import Card1 from "../CategoriesComponents/CardsItem/Card1";
import commerce from "../helpers/helpers.mjs";
import { useContext } from "react";
import LocationContext from "../Context/LocationContext";

const Catalogo = () => {
  const { productosFavoritos, setProductosFavoritos ,locationProducts  } =
    useContext(LocationContext);

  return (
     
      <ul className="bg-[#EADCDC] grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:gap-12 py-16 px-8 md:px-18 lg:px-40 2xl:px-52 xl:gap-8 gap-4 ">
        {locationProducts.map((item) => {
          const commerceItems = item.comercios.map((item) => item);
          
          commerce(commerceItems);

          return (
            <div key={item.id}>
              <Card1
                image={item.img}
                description={item.product}
                comercios={item.comercios}
                id={item.id}
                shopping={commerceItems[0].negocio}
                shipments={commerceItems[0].envio}
                price={commerceItems[0].precio}
                productosFavoritos={productosFavoritos}
                setProductosFavoritos={setProductosFavoritos}
              />
            </div>
          );
        })}
      </ul>
  );
};

export default Catalogo;
