import React, { useContext } from "react";

import CheckBuyuser from "../CheckBuyUser/CheckBuyuser";
import { Button, TextInput } from "flowbite-react";
import { Mastercard, AmericanExpress, Visa } from "../../assets/helpers/Images";
import { BreadcrumbSetting } from "../Breadcrumb/Breadcrumb";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocationContext from "../Context/LocationContext";
import { confirmationUser } from "../helpers/helpers";
const PaymentsSets = ({ setCart, cart }) => {
  const { authUser } = useContext(LocationContext);
  const navigate = useNavigate();
  const location = useLocation();

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
    if (
      creditCard.cvv.length >= 3 &&
      creditCard.dni.length >= 8 &&
      creditCard.expiracion != "" &&
      creditCard.nombre != "" &&
      creditCard.numero.length >= 19
    ) {
      confirmationUser({
        auth: authUser,
        creditCard: creditCard,
        session: "creditCard",
        pageTo: "/checkform/validation",
        functionNav: navigate,
        locationPath: location.pathname,
        setCart: setCart
      });
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
            placeholder="Ingrese los numeros de su tarjeta"
            required={true}
            shadow={true}
            value={creditCard.numero}
            onChange={(e) => {
              if (e.target.value.length <= 19) {
                handleChangeCard(e);
              }
            }}
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
              onChange={(e) => {
                if (e.target.value.length <= 3) {
                  handleChangeCard(e);
                }
              }}
            />
            <TextInput
              id="dni"
              name="dni"
              type="number"
              placeholder="DNI"
              required={true}
              shadow={true}
              value={creditCard.dni}
              onChange={(e) => {
                if (e.target.value.length <= 8) {
                  handleChangeCard(e);
                }
              }}
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
  );
};

export default PaymentsSets;
