import records from "../Records/ProductsLists/ProductLists.json";
import Card1 from "../CategoriesComponents/CardsItem/Card1";
import commerce from "../helpers/helpers";

const Catalogo = () => {
  return (
    <div>
      <ul className="bg-[#EADCDC] grid grid-cols-4 gap-4 text-center p-16">
        {records.map((item) => {
          const commerceItems = (item.comercios.map((item) => item));

          commerce(commerceItems)
         
          return (
            <>
              <Card1
                image={item.img}
                description={item.product}
                comercios={item.comercios}
                id={item.id}
                shopping={commerceItems[0].negocio}
                shipments={commerceItems[0].envio}
                price={commerceItems[0].precio}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Catalogo;
