import { Card } from "flowbite-react";
import Button from "./Button1";
import { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
import CardContext from "../Context/CardContext";

function Product() {
  const { chosenCard } = useContext(CardContext);
  const [product, setProduct] = useState(chosenCard);
  const [cantidad, setCantidad] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    let findId = cart.find((item) => item.idItem === product.idItem);

    if (!findId) {
      product.cantidad = cantidad;
      setCart([...cart, product]);
      localStorage.setItem("usersCart", JSON.stringify([...cart, product]));
    } else {
      product.cantidad = cantidad + findId.cantidad;

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
    <div className="flex justify-around bg-[#F5F5F5] p-5">
      <img src={product.img} alt="" className="w-1/3" />
      <div className="text-center m-5 w-1/3 flex flex-col items-center">
        <header className="bg-[#F8CF32] p-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <h1>Tienda: {chosenCard.negocio}</h1>
        </header>
        <div className="flex flex-col items-center mt-5 w-3/4">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.product}
            </h5>
            <ul>
              <li>{`precio: $${product.precio}`}</li>
              <li>
                stock:{" "}
                <span className="text-[#0E9A2D] font-bold">
                  {`${product.stock} unidades`}
                </span>
              </li>
              <li>
                cantidad:{" "}
                <select className="bg-[#D9D9D9]" onChange={handleChange}>
                  {[...Array(product.stock).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </Card>
          <div className="mt-5">
            <button onClick={() => addToCart()}>
              <Button tittle={"Agregar al carrito"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
