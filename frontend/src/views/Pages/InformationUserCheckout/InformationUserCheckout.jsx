import React, { useContext } from "react";
import CartProductsConfirmation from "../../CartProductsConfirmation/CartProductsConfirmation";


/// padre de acaa!!!

import CheckedShip from "../../CheckedShip/CheckedShip";
import CartContext from "../../Context/CartContext";
const InformationUserCheckout = () => {
  const { cart, setCart } = useContext(CartContext);
  
  return (
    <div className="grid grid-cols-3  max-md:grid-cols-1">
      <div className="px-14 pt-20 pb-10 col-span-2  max-md:order-last bg-[#FFCC0A]">
        <CheckedShip />
      </div>
      <div className="grid justify-items-stretch px-8 xl:px-6 2xl:px-12 items-center xl:mr-12">
        <CartProductsConfirmation cart={cart} />
      </div>
    </div>
  );
};


export default InformationUserCheckout;
