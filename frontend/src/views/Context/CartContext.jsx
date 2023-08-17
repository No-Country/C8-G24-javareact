import { createContext, useState } from "react";
// import {
//   shoppingInitialState,
//   shoppingReducer
// } from "./reducers/shoppingReducer";
// import { TYPES } from "./actions/shoppingAction";
import records from "../Records/ProductsLists/ProductLists.json"
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // const [cart, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // const addTocart = (id) => {
  //   dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  // };

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
