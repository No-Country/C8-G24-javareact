import { useContext } from "react";
import SearchContext from "../../Context/SearchContext/SearchContext";
import Card1 from "../../CategoriesComponents/CardsItem/Card1";

const SearchPage = () => {
  const { match } = useContext(SearchContext);

  if (match.length >= 1) {
    return (
      <>
        <div className="container mx-auto my-20">
          <div className="grid sm:grid-cols-2 max-lg:gap-6 xl:grid-cols-3 gap-y-8">
            {match.map((item) => {
             
              return (
                <>
                  <Card1
                    image={item.img}
                    description={item.product}
                    comercios={item.comercios}
                    id = {item.id}
                    shopping={item.comercios.map((item) => item.negocio)[0]}
                    shipments={item.comercios.map((item) => item.envio)[0]}
                    price={item.comercios.map((item) => item.precio)[0]}
                  />
                </>
              );
            })}
          </div>
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
