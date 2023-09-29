import { createContext, useEffect, useState } from "react";
// import {
//   shoppingInitialState,
//   shoppingReducer
// } from "./reducers/shoppingReducer";
// import { TYPES } from "./actions/shoppingAction";
import records from "../Records/ProductsLists/ProductLists.json"
const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("usersCart")));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cart === null) {
      setCart([])
    }
  });
     
  const data = {
    cart,
    setCart,
    cartItems,
    setCartItems
  }
  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export { CartProvider };
