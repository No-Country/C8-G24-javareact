import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("usersCart"))
  );
  const [cartItems, setCartItems] = useState([]);
  const [stockProd, setStockProd] = useState([]);
  const [stockReset, setStockReset] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    if (cart === null) {
      setCart([]);
    }
  });

  const handleDelete = (item) => {
    const deleteItems = cart.filter(
      (element) => element.idItem !== item.idItem
    );
    setCart(deleteItems);
    setStockReset(true);
    localStorage.setItem("usersCart", JSON.stringify(deleteItems));

    if (
      deleteItems.length === 0 &&
      (path === "/cart" ||
        path === "/checkform" ||
        path === "/checkform/confirmation" ||
        path === "/checkform/payments")
    ) {
      alert(
        "No tienes productos en el carrito, te reedirigimos a la pagina principal para que puedas encontrar el producto que deseas"
      );
      navigate("/");
    }
  };

  const data = {
    cart,
    setCart,
    cartItems,
    setCartItems,
    handleDelete,
    stockProd,
    setStockProd,
    stockReset,
    setStockReset
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;

export { CartProvider };
