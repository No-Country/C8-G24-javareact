import Card from "../CardsItem/Card1";
import { Breadcrumb } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";

import products from "../../Records/ProductsLists/ProductLists.json";
import commerce from "../../helpers/helpers";

const Filters = ({ name }) => {
  let location = useLocation();
  const { product } = useParams();
  const [type, setType] = useState([]);
  
  useEffect(() => {
    setType(exactType); 
   },[] );
   
  
const exactType = products.filter(checkTypes);

function checkTypes(types) {
  return types.subtipo === product.slice(1);
}

const filterProd = type.filter(subCheckTypes)

function subCheckTypes(types) {
  
  if(location.pathname.includes("perros")){
    return types.tipo === "perros";
  }else if (location.pathname.includes("gatos")){
    return types.tipo === "gatos";
  }else if (location.pathname.includes("otros")){
    return types.tipo === "otros";
  }else if (location.pathname.includes("promociones")){
    return types.tipo === "promociones";
  }else if (location.pathname.includes("servicios")){
    return types.tipo === "servicios";
  }
}

  const priceShop = products.map((shop) => shop.comercios);
  
  for (let i = 0; i < priceShop.length; i++) {
    const highPriceShop = priceShop[i].sort((a, b) => {
      return Number.parseInt(a.precio) - Number.parseInt(b.precio);
    });
  }
 
  const [filtersSelected, setFiltersSelected] = useState(
    filterProd.map(
      (accumulator, el) => ({ ...accumulator, [el.product]: false }),
      {}
    )
  );
  const [filteredData, setFilteredData] = useState([]);

  const handleOnCheckbox = (e) => {
    setFiltersSelected({
      ...filtersSelected,
      [e.target.value]: e.target.checked
    });

    if (e.target.checked) {
      const result = filterProd.filter(
        (item) =>
          item.product.includes(e.target.value) && !filteredData.includes(item)
      );
      setFilteredData([...filteredData, ...result]);
    } else {
      const result = filteredData.filter(
        (item) => !item.product.includes(e.target.value)
      );
      setFilteredData(result);
    }
  };

  return (
    <div>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item exact href="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">{name}</Breadcrumb.Item>
        <Breadcrumb.Item>{product.slice(1)}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex flex-row ">
        <div className="w-60 bg-[#B4FFED] p-6">
          <h1>Filtros</h1>
          <h2>Raza:</h2>
          <div className="text-[#927D7D]">
            <div>
              <input
                type="checkbox"
                value={"pequeña"}
                onChange={handleOnCheckbox}
              />
              <label>{"pequeña"}</label>
            </div>
            <div>
              <input
                type="checkbox"
                value={"mediana"}
                onChange={handleOnCheckbox}
              />
              <label>{"mediana"}</label>
            </div>
            <div>
              <input
                type="checkbox"
                value={"grande"}
                onChange={handleOnCheckbox}
              />
              <label>{"grande"}</label>
            </div>
          </div>
    
          <h2>Kilogramos:</h2>
          <div className="text-[#927D7D]">
            <div>
              <input type="checkbox" value={"5"} onChange={handleOnCheckbox} />
              <label>{"5 kg"}</label>
            </div>
            <div>
              <input type="checkbox" value={"8"} onChange={handleOnCheckbox} />
              <label>{"8 kg"}</label>
            </div>
            <div>
              <input type="checkbox" value={"10"} onChange={handleOnCheckbox} />
              <label>{"10 kg"}</label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 w-full">
          {filteredData.map((item) => {
             const commerceItems = (item.comercios.map((item) => item));

             commerce(commerceItems)
             
            return (
              <Card
                image={item.img}
                description={item.product}
                comercios={item.comercios}
                shopping={commerceItems[0].negocio}
                shipments={commerceItems[0].envio}
                price={commerceItems[0].precio}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
