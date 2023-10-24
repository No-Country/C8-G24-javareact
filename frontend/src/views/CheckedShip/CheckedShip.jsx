import React, { useContext , useState} from "react";
import ModalAuth from "../Modal/Modal";
import { Button } from "flowbite-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { iconBack } from "../../assets/helpers/Images";
import CheckBuyuser from "../CheckBuyUser/CheckBuyuser";
import { BreadcrumbSetting } from "../Breadcrumb/Breadcrumb";
import LocationContext from "../Context/LocationContext";
import { confirmationUser } from "../helpers/helpers";
const CheckedShip = () => {
  const { authUser } = useContext(LocationContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  function payment(e) {
    e.preventDefault();
    confirmationUser(props,{
      auth: authUser,
      pageTo: "/checkform/payments",
      functionNav: navigate,
      locationPath: location.pathname
    });
  }
  return (
    <div className="mt-8">
      <div className="xl:ml-12">
        <BreadcrumbSetting />
        <CheckBuyuser />
        <div className="flex justify-center mt-14">
          <Button className="bg-[#37cbfa] hover:bg-[#269cc0]" onClick={payment}>
            Elegir forma de pago
          </Button>
        </div>
        <Link to="/checkform" className="text-sm flex items-center mt-8">
          {" "}
          <img src={iconBack} className="w-8"></img> Volver a información
        </Link>
      </div>
      <ModalAuth props={props} setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  );
};

export default CheckedShip;
