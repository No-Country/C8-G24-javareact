import CartProductsConfirmation from "../../CartProductsConfirmation/CartProductsConfirmation";
import { Link } from "react-router-dom";
import { iconBack } from "../../../assets/helpers/Images";
import PaymentsSets from "../../paymentsSets/PaymentsSets";
import CartContext from "../../Context/CartContext";
import { useContext} from "react";
import ModalAuth from "../../Modal/Modal";

const CheckoutPayments = () => {
  const { cart, setCart , handleDelete , props , openModal , setOpenModal , goToHome } = useContext(CartContext);
  
  return (
    <div className="grid xl:grid-cols-7 max-lg:grid-cols-1">
      <div className="max-sm:px-6 px-14 pt-20 pb-10 xl:col-span-4 max-xl:order-last bg-[#FFCC0A]">
       <PaymentsSets setCart={setCart} cart={cart}/>
        <Link to="/checkform" className="text-sm flex items-center mt-8">
          {" "}
          <img src={iconBack} className="w-8"></img> Volver a información
        </Link>
      </div>
      <div className="grid xl:col-span-3 max-sm:px-6  justify-items-stretch px-14 xl:px-6 2xl:px-12 items-center xl:mr-12 py-12 max-xl:bg-[#FFCC0A]">
        <CartProductsConfirmation cart={cart} handleDelete={handleDelete} setCart={setCart} />
      </div>
      <ModalAuth props={props} title={"No tienes más productos en el carrito, selecciona más productos"} modaCloseFunction={()=>goToHome()} buttonText={"Ir a pagina de inicio"} icon={"cart"} setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  );
};

export default CheckoutPayments;
