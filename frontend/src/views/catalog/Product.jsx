import { Card } from "flowbite-react";
import Button from "./Button1";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import CardContext from "../Context/CardContext";

function Product() {
  const { chosenCard } = useContext(CardContext);
  const [product, setProduct] = useState(chosenCard);
  const [cantidad, setCantidad] = useState(1);
  const { cart, setCart, stockProd, setStockProd, stockReset, setStockReset } =
    useContext(CartContext);

  useEffect(() => {
    let findIds = cart.find((item) => item.idItem === product.idItem);
    setStockProd(findIds);
    if (findIds !== undefined) {
      setStockProd(findIds.stock);
    } else {
      setStockProd(product.stock);
      if (stockReset === true) {
        // se reestablecen cantidad de productos en stock y la cantidad
        product.stock = product.stock + product.cantidad;
        product.cantidad = product.stock + product.cantidad;
        setStockProd(product.stock);

        //se restablece cantidad a elegir
        setCantidad(1);

        //se vuelve a deshabilitar para cerrar
        setStockReset(false);
      }
    }
  });

  const addToCart = () => {
    let findId = cart.find((item) => item.idItem === product.idItem);

    if (!findId) {
      product.cantidad = cantidad;
      product.stock = product.stock - cantidad;
      setCart([...cart, product]);
      localStorage.setItem("usersCart", JSON.stringify([...cart, product]));
    } else {
      if (cantidad > findId.stock) {
        product.stock = findId.stock - 1;
        product.cantidad = 1 + findId.cantidad;
      } else {
        product.cantidad = cantidad + findId.cantidad;
        product.stock = findId.stock - cantidad;
      }

      const cartItemDelete = cart.filter(
        (item) => item.idItem !== product.idItem
      );

      setCart([...cartItemDelete, product]);

      localStorage.setItem("usersCart", JSON.stringify(cart));
    }
  };

  const handleChange = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  return (
    <div className="flex justify-around bg-[#F5F5F5] p-5 max-md:flex-col md:px-20 md:py-36 items-center">
       <header className=" md:hidden bg-[#F8CF32] p-5 text-md text-center font-bold tracking-tight text-gray-900 dark:text-white mb-8">
          <h1>Tienda: {chosenCard.negocio}</h1>
        </header>
      <img src={product.img} alt="imagen-producto" className=" max-md:self-center w-1/2 lg:w-1/4 h-full"/>
      <div className="text-center md:m-5 w-fit  flex flex-col items-center justify-center">
        <header className="bg-[#F8CF32] max-md:hidden p-5 text-lg lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <h1>Tienda: {chosenCard.negocio}</h1>
        </header>
        <div className="flex flex-col items-center mt-5">
          <Card href="#" className="xl:my-6">
            <h5 className="max-sm:text-sm md:text-md xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.product}
            </h5>
            <ul>
              <li className="max-md:text-sm">{`Precio: $${product.precio}`}</li> 
              <li className="my-3 max-md:text-sm">
                Stock:{" "}
                <span className="text-[#0E9A2D] font-bold max-md:text-sm">
                  {`${stockProd} unidades`}
                </span>
              </li>
              {stockProd !== 0 && (
                <li className="max-md:text-sm">
                  Cantidad:{" "}
                  <select className="bg-[#D9D9D9]" onChange={handleChange}>
                    {[...Array(stockProd).keys()].map((i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </li>
              )}
            </ul>
          </Card>
          <div className="mt-5">
            {stockProd !== 0 ? (
              <button onClick={() => addToCart()}>
                <Button tittle={"Agregar al carrito"} />
              </button>
            ) : (
              <p className="mt-3 font-bold">
                No tenemos más stock por el momento, espera unos dias y
                tendremos novedades para tí
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
