import CartProductsConfirmation from "../../CartProductsConfirmation/CartProductsConfirmation";
import { Link } from "react-router-dom";
import iconBack from "../../../assets/vectors/icon-back.svg";
import PaymentsSets from "../../paymentsSets/PaymentsSets";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";

const CheckoutPayments = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1">
      <div className="px-14 pt-20 pb-14 col-span-2  max-md:order-last bg-[#FFCC0A]">
       <PaymentsSets setCart={setCart} cart={cart}/>
        <Link to="/checkform" className="text-sm flex items-center mt-8">
          {" "}
          <img src={iconBack} className="w-8"></img> Volver a información
        </Link>
      </div>
      <div className="grid justify-items-stretch px-8 xl:px-6 2xl:px-12 items-center xl:mr-12">
        <CartProductsConfirmation cart={cart}/>
      </div>
    </div>
  );
};

export default CheckoutPayments;
