import React, { useContext } from "react";
import ModalAuth from "../Modal/Modal";
import CheckBuyuser from "../CheckBuyUser/CheckBuyuser";
import { Button, TextInput } from "flowbite-react";
import { Mastercard, AmericanExpress, Visa } from "../../assets/helpers/Images";
import { BreadcrumbSetting } from "../Breadcrumb/Breadcrumb";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocationContext from "../Context/LocationContext";
import { confirmationUser } from "../helpers/helpers";
import {
  setDoc,
  doc,
  addDoc,
  collection,
  orderBy,
  query,
  limit,
  getDocs,
  updateDoc,
  getDoc
} from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const PaymentsSets = ({ setCart, cart }) => {
  const { authUser } = useContext(LocationContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

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

  const saveDataOrder = async () => {
    const cartListOrder = JSON.parse(localStorage.getItem("usersCart"));
    const orderClient = JSON.parse(sessionStorage.getItem("orderClient"));
    const shippingSet = JSON.parse(sessionStorage.getItem("shippingSet"));
    const orderFinalUser = [];
    let dateNow = new Date();
    let dateOrder = dateNow.toString();

    const order = {
      ...orderFinalUser,
      cartListOrder,
      orderClient,
      shippingSet,
      creditCard,
      dateOrder
    };

    //esto lo saque pero hay QUE PROBARLO
    const docRef = await addDoc(collection(db, "orders"), order);

    const idOrder = docRef.id;

    //añade el ID del pedido a la lista de pedidos del usuario
    const addIdOrder = { ...order, idOrder };

    const userDocRef = doc(db, "users", authUser.uid);

    // Obtén el documento del usuario actual
    const userDoc = await getDoc(userDocRef);

    // Verifica si ya existe un campo "userRequest" en el documento del usuario
    if (userDoc.exists()) {
      // Si existe, obtén el valor actual y agrégale el nuevo pedido al array
      const userRequest = userDoc.data().userRequest || [];
      userRequest.push(addIdOrder);

      // Actualiza el campo "userRequest" con el nuevo array
      setDoc(userDocRef, { userRequest }, { merge: true })
        .then(() => {
          console.log("Pedido agregado con éxito a userRequest");
        })
        .catch((error) => {
          console.error("Error al agregar el pedido a userRequest: ", error);
        });
    } else {
      // Si no existe un campo "userRequest" en el documento del usuario, crea uno nuevo
      setDoc(userDocRef, { userRequest: [addIdOrder] })
        .then(() => {
          console.log("Pedido agregado con éxito a userRequest");
        })
        .catch((error) => {
          console.error("Error al agregar el pedido a userRequest: ", error);
        });
    }
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
      saveDataOrder();

      confirmationUser(props, {
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
      <ModalAuth
        props={props}
        setOpenModal={setOpenModal}
        openModal={openModal}
        title={"Por registrate o ingresa como usuario"}
        buttonText={"Entendido"}
        modaCloseFunction={() => props.setOpenModal(undefined)}
        icon={"register"}
      />
    </div>
  );
};

export default PaymentsSets;
