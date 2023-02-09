import records from "../Records/ProductsLists/ProductLists.json";
import Card1 from "../CategoriesComponents/CardsItem/Card1";

const Catalogo = () => {
  return (
    <div>
      <ul className="bg-[#EADCDC] grid grid-cols-4 gap-4 text-center p-16">
      {records.map((item) => {
             
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
      </ul>
    </div>
  );
};

export default Catalogo;
