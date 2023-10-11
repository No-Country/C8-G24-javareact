import { useContext , useState } from "react";
import SearchContext from "../../Context/SearchContext";
import LocationContext from "../../Context/LocationContext";
import Card1 from "../../CategoriesComponents/CardsItem/Card1";
import commerce from "../../helpers/helpers";
const SearchPage = () => {
  const { match } = useContext(SearchContext);
  const { productosFavoritos , setProductosFavoritos } = useContext(LocationContext);
  
  if (match.length >= 1) {
    return (
      <>
          <div className="grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:gap-12 py-16 px-8 md:px-18 lg:px-40 2xl:px-52 xl:gap-8 gap-4">
            {match.map((item) => {
               const commerceItems = (item.comercios.map((item) => item));
                commerce(commerceItems)
             
              return (
                <>
                  <Card1
                    image={item.img}
                    description={item.product}
                    comercios={item.comercios}
                    id = {item.id}
                    shopping={commerceItems[0].negocio}
                    shipments={commerceItems[0].envio}
                    price={commerceItems[0].precio}
                    productosFavoritos={productosFavoritos}
                    setProductosFavoritos={setProductosFavoritos}
                    match={match}
                  />
                </>
              );
            })}
          </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container mx-auto my-20">
          <p className="text-center">PRODUCTO NO ENCONTRADO</p>
        </div>
      </>
    );
  }
};

export default SearchPage;
