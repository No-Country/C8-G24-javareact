

import CartProductsConfirmation from "../../CartProductsConfirmation/CartProductsConfirmation";
import UserInformation from "../../UserInformation/UserInformation";
import { CartList } from "../../CartList/CartList";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
const CheckoutForm = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-1">
      <div className="px-14 pt-20 pb-10 col-span-2  max-md:order-last bg-[#FFCC0A]">
        <UserInformation/>
      </div>
      <div className="grid justify-items-stretch px-8 xl:px-6 2xl:px-12 items-center xl:mr-12">
      <CartProductsConfirmation cart={cart} />
      </div>
    </div>
  );
};

export default CheckoutForm;
