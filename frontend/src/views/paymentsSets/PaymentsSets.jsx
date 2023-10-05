import React from 'react'

import CheckBuyuser from "../CheckBuyUser/CheckBuyuser";
import { Button, TextInput } from "flowbite-react";
import Mastercard from "../../assets/vectors/Mastercard.svg";
import AmericanExpress from "../../assets/vectors/AmericanExpress.svg";
import Visa from "../../assets/vectors/visalogo.svg";
import { BreadcrumbSetting } from "../Breadcrumb/Breadcrumb";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const PaymentsSets = ({setCart , cart}) => {
    const navigate = useNavigate();

  const [creditCard, setCreditCard] = useState({
    numero: "",
    nombre: "",
    expiracion: "",
    cvv: "",
    dni: ""
  });

  const handleChangeCard = (e) => {
    e.preventDefault();
    setCreditCard({ ...creditCard, [e.target.name]: e.target.value });
  };


    function checkPayments(e) {
        e.preventDefault();
    
        const userRegistered = localStorage.getItem("usersLog");
        if (userRegistered !== null) {
          
          sessionStorage.setItem("creditCard", JSON.stringify(creditCard));
          console.log(cart)
          setCart([])
          navigate("/checkform/validation");
        } else {
          alert("Registrate apretando el boton mi cuenta");
        }
      }
  return (
    <div className="xl:ml-12">
    <BreadcrumbSetting />
    <CheckBuyuser />
    <div className="flex justify-between">
      <p>Datos del pago</p>
      <div className="flex h-8 gap-4">
        <img src={Mastercard}></img>
        <img src={AmericanExpress}></img>
        <img src={Visa}></img>
      </div>
    </div>
    <form onSubmit={checkPayments}>
      <div className="mt-4">
        <TextInput
          name="numero"
          id="creditCard"
          type="number"
          maxlength="12"
          placeholder="Ingrese los numeros de su tarjeta"
          required={true}
          shadow={true}
          value={creditCard.numero}
          onChange={creditCard.numero.length < 19 ? handleChangeCard : ""}
        />
      </div>
      <div className="mt-4">
        <TextInput
          name="nombre"
          id="nameCard"
          type="text"
          placeholder="Ingrese nombre y apellido como figura en la tarjeta"
          required={true}
          shadow={true}
          value={creditCard.nombre}
          onChange={handleChangeCard}
        />
      </div>
      <div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <TextInput
            name="expiracion"
            id="dateExpirationCard"
            type="date"
            placeholder="Fecha de expiración"
            required={true}
            shadow={true}
            value={creditCard.expiracion}
            onChange={handleChangeCard}
          />
          <TextInput
            id="cvv"
            name="cvv"
            type="number"
            placeholder="CVV"
            required={true}
            shadow={true}
            value={creditCard.cvv}
            onChange={creditCard.cvv.length < 3 ? handleChangeCard : ""}
          />
          <TextInput
            id="dni"
            name="dni"
            type="number"
            placeholder="DNI"
            required={true}
            shadow={true}
            value={creditCard.dni}
            onChange={creditCard.dni.length < 8 ? handleChangeCard : ""}
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          className="bg-[#37cbfa] hover:bg-[#269cc0]"
          onClick={checkPayments}
        >
          Pagar
        </Button>
      </div>
    </form>
  </div>
  )
}

export default PaymentsSets