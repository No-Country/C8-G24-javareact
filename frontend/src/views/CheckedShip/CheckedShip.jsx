import React from "react";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import iconBack from "../../assets/vectors/icon-back.svg";
import CheckBuyuser from "../CheckBuyUser/CheckBuyuser";
import { BreadcrumbSetting } from "../Breadcrumb/Breadcrumb";

const CheckedShip = () => {
  const navigate = useNavigate();
  function payment(e) {
    e.preventDefault();

    const userRegistered = localStorage.getItem("usersLog");
    if (userRegistered !== null) {
      
      navigate("/checkform/payments");
    } else {
      alert("Registrate apretando el boton mi cuenta");
    }
  }
  return (
    <div className="mt-8">
      <div className="xl:ml-12">
        <BreadcrumbSetting/>
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
    </div>
  );
};

export default CheckedShip;
