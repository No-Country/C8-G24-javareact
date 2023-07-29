import { useContext } from "react";
import SearchContext from "../../Context/SearchContext/SearchContext";
import Card1 from "../../CategoriesComponents/CardsItem/Card1";
import commerce from "../../helpers/helpers";
const SearchPage = () => {
  const { match } = useContext(SearchContext);


  if (match.length >= 1) {
    return (
      <>
        <div className="container mx-auto my-20">
          <div className="grid sm:grid-cols-2 max-lg:gap-6 xl:grid-cols-3 gap-y-8">
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
