import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("usersCart"))
  );
  const [cartItems, setCartItems] = useState([]);
  const [stockProd, setStockProd] = useState([]);
  const [reset, setReset] = useState();
  const [quantityStock, setQuantityStock] = useState();
  const [stockReset, setStockReset] = useState(false);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  useEffect(() => {
    if (cart === null) {
      setCart([]);
    }
  });

  function goToHome() {
    props.setOpenModal(undefined);
    navigate("/");
  }

  const handleDelete = (item) => {
    // setReset(item.stock);
    // setQuantityStock(item.cantidad);
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
      console.log("hola")
      return props.setOpenModal("pop-up");
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
    setStockReset,
    setReset,
    reset,
    quantityStock,
    openModal,
    setOpenModal,
    props,
    goToHome
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;

export { CartProvider };
