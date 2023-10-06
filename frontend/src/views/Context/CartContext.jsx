import { createContext, useEffect, useState } from "react";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("usersCart"))
  );
  const [cartItems, setCartItems] = useState([]);
  const [stockProd, setStockProd] = useState([]);
  const [stockReset, setStockReset] = useState(false);
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
