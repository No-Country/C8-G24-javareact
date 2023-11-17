import Card from "../CardsItem/Card1";
import { Breadcrumb } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import commerce from "../../helpers/helpers.mjs";

// Context
import { useContext } from "react";
import LocationContext from "../../Context/LocationContext";

const Filters = ({ name }) => {
  const { locationProducts, productosFavoritos, setProductosFavoritos } =
    useContext(LocationContext);

  let location = useLocation();
  const { product } = useParams();
  const [type, setType] = useState([]);

  useEffect(() => {
    setType(exactType);
  }, []);

  const exactType = locationProducts.filter(checkTypes);

  function checkTypes(types) {
    return types.subtipo === product.slice(1);
  }

  const filterProd = type.filter(subCheckTypes);

  function subCheckTypes(types) {
    if (location.pathname.includes("perros")) {
      return types.tipo === "perros";
    } else if (location.pathname.includes("gatos")) {
      return types.tipo === "gatos";
    } else if (location.pathname.includes("otros")) {
      return types.tipo === "otros";
    } else if (location.pathname.includes("promociones")) {
      return types.tipo === "promociones";
    } else if (location.pathname.includes("servicios")) {
      return types.tipo === "servicios";
    }
  }

  const priceShop = locationProducts.map((shop) => shop.comercios);

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
      <Breadcrumb aria-label="Default breadcrumb example" className="mb-4">
        <Breadcrumb.Item href="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">{name}</Breadcrumb.Item>
        <Breadcrumb.Item>{product.slice(1)}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="mb-4 font-bold text-xl">Productos</h1>
      <div className="flex flex-col sm:flex-row ">
        <div className="sm:w-60 bg-[#B4FFED] p-6 sm:mb-0 mb-4 ">
          <h2>Filtros</h2>
          <div className="flex sm:flex-col gap-10 sm:gap-4">
            <div>
              <h2>Raza:</h2>
              <div>
                <input
                  type="checkbox"
                  value={"pequeña"}
                  onChange={handleOnCheckbox}
                />
                <label className="text-[#927D7D] pl-2">{"pequeña"}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"mediana"}
                  onChange={handleOnCheckbox}
                />
                <label className="text-[#927D7D] pl-2">{"mediana"}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"grande"}
                  onChange={handleOnCheckbox}
                />
                <label className="text-[#927D7D] pl-2">{"grande"}</label>
              </div>
            </div>

            <div>
              <h2>Kilogramos:</h2>
              <div>
                <input
                  type="checkbox"
                  value={"5"}
                  onChange={handleOnCheckbox}
                />
                <label className="text-[#927D7D] pl-2">{"5 kg"}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"8"}
                  onChange={handleOnCheckbox}
                />
                <label className="text-[#927D7D] pl-2">{"8 kg"}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"10"}
                  onChange={handleOnCheckbox}
                />
                <label className="text-[#927D7D] pl-2">{"10 kg"}</label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:gap-12 sm:pl-8 xl:gap-8 gap-4 ">
          {filteredData.map((item) => {
            const commerceItems = item.comercios.map((item) => item);

            commerce(commerceItems);

            return (
              <div key={item.id}>
              <Card
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
        </div>
      </div>
    </div>
  );
};

export default Filters;
