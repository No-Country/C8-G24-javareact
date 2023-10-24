import React, { useContext } from "react";
import CartProductsConfirmation from "../../CartProductsConfirmation/CartProductsConfirmation";

import CheckedShip from "../../CheckedShip/CheckedShip";
import CartContext from "../../Context/CartContext";
const InformationUserCheckout = () => {
  const { cart, setCart, handleDelete } = useContext(CartContext);

  return (
    <div className="grid xl:grid-cols-7 max-lg:grid-cols-1">
      <div className="max-sm:px-6 px-14 pt-20 pb-10 xl:col-span-4 max-xl:order-last bg-[#FFCC0A]">
        <CheckedShip />
      </div>
      <div className="grid xl:col-span-3 max-sm:px-6  justify-items-stretch px-14 xl:px-6 2xl:px-12 items-center xl:mr-12 py-12 max-xl:bg-[#FFCC0A]">
        <CartProductsConfirmation
          cart={cart}
          handleDelete={handleDelete}
          setCart={setCart}
        />
      </div>
    </div>
  );
};

export default InformationUserCheckout;
