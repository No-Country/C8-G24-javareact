import { createContext, useEffect, useState } from "react";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("usersCart")));
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    if (cart === null) {
      setCart([])
    }
  });
  
  const handleDelete = (item) => {
    const deleteItems = cart.filter((element) => element.idItem !== item.idItem)
    setCart(deleteItems)

    localStorage.setItem("usersCart" ,JSON.stringify(deleteItems))
  }

  const data = {
    cart,
    setCart,
    cartItems,
    setCartItems,
    handleDelete
  }
  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export { CartProvider };
