import { Card, Button } from "flowbite-react";
// import Button from "./Button1";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import CardContext from "../Context/CardContext";
import { useParams } from "react-router-dom";
import LocationContext from "../Context/LocationContext";

function Product() {
  const { locationProducts } = useContext(LocationContext);
  const { cart, setCart, stockProd, setStockProd, stockReset, setStockReset , reset , quantityStock } =
    useContext(CartContext);

  const [product, setProduct] = useState();
  const [cantidad, setCantidad] = useState(1);

  const parametro = useParams();

  const regex = /:(.*?)-/;
  const idUrl = parametro.id.match(regex);
  const id = idUrl[1];
  const idItem = parametro.id.slice(-3);
  const equalProd = locationProducts.find((item) => item.id === id);

  useEffect(() => {

    if (equalProd) {
      const commerceProdsEqual = equalProd.comercios;
      const commercerceItems = commerceProdsEqual.find(
        (item) => item.id === parseInt(idItem)
      );

      const chosenCard = {
        id: equalProd.id,
        peso: equalProd.peso,
        edad: equalProd.edad,
        subtipo: equalProd.subtipo,
        cantidad: equalProd.cantidad,
        img: equalProd.img,
        stock: commercerceItems.stock,
        tipo: equalProd.tipo,
        producto: equalProd.product,
        precio: commercerceItems.precio,
        idItem: commercerceItems.id,
        envio: commercerceItems.envio,
        negocio: commercerceItems.negocio
      };
      setProduct(chosenCard);
    }
  }, [locationProducts]);

  useEffect(() => {
    if (product) {
      let findIds = cart.find((item) => item.idItem === product.idItem);
      
      if (findIds !== undefined) {
        setStockProd(findIds.stock);
      } else {
        setStockProd(product.stock);
        
        if (stockReset === true) {
         
         const resetStock = equalProd.comercios.find((item) => item.id === product.idItem)

           product.stock = resetStock.stock;
           product.cantidad = product.cantidad + product.stock
        
          setCantidad(1);
         
          setStockReset(false);
        }
      }
    }
  }, [cart, stockReset, product]);

  const addToCart = () => {
    let findId = cart.find((item) => item.idItem === product.idItem);

    if (!findId) {
      product.cantidad = cantidad;
      product.stock = product.stock - cantidad;
      setCart((prevCart) => [...prevCart, product]);
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
      localStorage.setItem(
        "usersCart",
        JSON.stringify([...cartItemDelete, product])
      );
    }
  };

  const handleChange = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  if (product) {
    return (
      <div className="flex justify-around bg-[#F5F5F5] p-5 max-md:flex-col md:px-20 md:py-36 items-center">
        <header className=" md:hidden bg-[#F8CF32] p-5 text-md text-center font-bold tracking-tight text-gray-900 dark:text-white mb-8">
          <h1>Tienda: {product.negocio}</h1>
        </header>
        <img
          src={product.img}
          alt="imagen-producto"
          className=" max-md:self-center w-1/2 lg:w-1/4 h-full"
        />
        <div className="text-center md:m-5 w-fit  flex flex-col items-center justify-center">
          <header className="bg-[#F8CF32] max-md:hidden p-5 text-lg lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <h1>Tienda: {product.negocio}</h1>
          </header>
          <div className="flex flex-col items-center mt-5">
            <Card href="#" className="xl:my-6">
              <h5 className="max-sm:text-sm md:text-md xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.producto}
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
                <Button onClick={() => addToCart()}>Agregar al carrito</Button>
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
}

export default Product;
