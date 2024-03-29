import React from "react";
import { CartList } from "../../CartList/CartList";
import { Card, TextInput, Button, Select } from "flowbite-react";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import CartContext from "../../Context/CartContext";
import TitleAccount from "../../TitleAccount/TitleAccount";
import ButtonsPageNotProducts from "../../ButtonsPageNotProducts/ButtonsPageNotProducts";
import SpinnerContainer from "../../SpinnerContainer/SpinnerContainer";
import ModalAuth from "../../Modal/Modal";

export const CartPage = () => {
  
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 800);
  }, []);

  const { cart, setCart, cartItems, setCartItems, handleDelete , openModal,
    setOpenModal,props , goToHome } =
    useContext(CartContext);
  const [showComponent, setShowComponent] = useState(false);
  const [optionText, setOptionText] = useState();
  const [print, setPrint] = useState();
  const [impress, setImpress] = useState();
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const [formValue, setFormValue] = useState({
    form: ""
  });

  const [inDateItems, setInDateItems] = useState({
    number: "",
    month: "",
    year: ""
  });

  const [outDateItems, setOutDateItems] = useState({
    number: "",
    month: "",
    year: ""
  });

  const [weekDayStart, setWeekDayStart] = useState();
  const [weekDayEnd, setWeekDayEnd] = useState();

  const [storageShipping, setStorageShipping] = useState([]);

  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ];

  function clickOn() {
    const today = new Date();
    let firstDay = new Date(today);
    const [mes, dia, año] = value.startDate.split("-").map(Number);
    let secondDay = new Date(`${mes}/${dia}/${año}`);

    if (
      formValue.length >= 7 &&
      weekDayStart !== undefined &&
      optionText !== undefined &&
      firstDay <= secondDay
    ) {
      setImpress(true);

      const objHola = {
        ...storageShipping,
        optionText,
        formValue,
        inDateItems,
        outDateItems
      };
      sessionStorage.setItem("shippingSet", JSON.stringify(objHola));
    }
  }

  const handleValueChange = (newValue) => {
    setImpress(false);
    setValue(newValue);

    //Introducir valores de inicio

    const dateIn = newValue.startDate.split("-");

    Object.assign(inDateItems, {
      number: parseInt(dateIn[2], 10),
      month: parseInt(dateIn[1], 10),
      year: parseInt(dateIn[0], 10)
    });

    const dayExactStart = new Date(
      inDateItems.year,
      inDateItems.month - 1,
      inDateItems.number
    ).getDay();
    const dayWeekStart = dias[dayExactStart];

    setWeekDayStart(dayWeekStart);

    //Introducir valores de salida

    const dateOut = newValue.endDate.split("-");

    Object.assign(outDateItems, {
      number: dateOut[2],
      month: dateOut[1],
      year: dateOut[0]
    });

    const dayExactEnd = new Date(
      outDateItems.year,
      outDateItems.month - 1,
      outDateItems.number
    ).getDay();
    const dayWeekEnd = dias[dayExactEnd];
    setWeekDayEnd(dayWeekEnd);
  };

  const handleChangeForm = (event) => {
    event.preventDefault();
    setImpress(false);
    setFormValue(event.target.value);
  };

  const handleChangeTurns = () => {
    setImpress(false);
    const turns = document.getElementById("turns");
    const textTurns = turns.options[turns.selectedIndex].text;
    setOptionText(textTurns);
  };

  const handleSubmitCart = (e) => {
    e.preventDefault();
    if (formValue.length >= 7 && optionText !== undefined) {
      setPrint(formValue);
    }
  };

  const navigate = useNavigate();

  const changePage = () => {
    if (impress) {
      navigate("/checkform");
    }
  };


  return (
    <div className="container mx-auto my-16 max-2xl:px-6">
      <TitleAccount title={"Carrito de compras"} />
      {showComponent ? (
        cart.length >= 1 ? (
          <div>
            <CartList
              products={cart}
              setCart={setCart}
              handleDelete={handleDelete}
            />
            <div className="mt-8 flex gap-2 sm:gap-6 md:gap-10 max-sm:flex-wrap max-sm:justify-center">
              <Card className="w-full">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmitCart}
                >
                  <div>
                    <TextInput
                      maxLength={8}
                      id="zipCode"
                      type="text"
                      placeholder="Ingresa tu codigo postal"
                      required={true}
                      name="zipCode"
                      onChange={handleChangeForm}
                    />
                  </div>
                  <div className="flex items-center">
                    <Datepicker onChange={handleValueChange} value={value} />
                  </div>
                  <Select
                    id="turns"
                    required={true}
                    onChange={handleChangeTurns}
                    defaultValue=""
                  >
                    <option disabled value="">
                      Selecciona un horario para la recogida
                    </option>
                    <option value="morning">
                      Mañana (Entre las 9 y las 14hs)
                    </option>
                    <option value="evening">
                      Tarde (Entre las 14 y las 19hs)
                    </option>
                    <option value="allDay">Todo el día</option>
                  </Select>
                  <Button
                    type="submit"
                    className="bg-[#37cbfa] hover:bg-[#269cc0]"
                    onClick={clickOn}
                  >
                    Continuar
                  </Button>
                </form>
              </Card>
              <Card className="max-sm:mt-4 w-full">
                <div className="text-center">
                  {impress ? (
                    <div className="leading-8">
                      <p>Tu codigo postal es el {print}</p>
                      <p>
                        {`
                  Te llevaremos tu producto entre los dias ${weekDayStart}
                  ${inDateItems.number}/${inDateItems.month}/${inDateItems.year} y el ${weekDayEnd}
                  ${outDateItems.number}/${outDateItems.month}/${outDateItems.year} entre los horarios de ${optionText} `}
                      </p>
                    </div>
                  ) : (
                    "Por favor completa el formulario"
                  )}
                </div>
                <Button
                  className="bg-[#37cbfa] hover:bg-[#269cc0]"
                  type="submit"
                  onClick={changePage}
                >
                  Confirmar
                </Button>
              </Card>
            </div>
          </div>
        ) : (
          <>
          <ModalAuth props={props} title={"No tienes más productos en el carrito, selecciona más productos"} modaCloseFunction={()=>goToHome()} buttonText={"Ir a pagina de inicio"} icon={"cart"} setOpenModal={setOpenModal} openModal={openModal} />
          <ButtonsPageNotProducts
            title={"No tienes productos en el carrito"}
            btnText={"Volver a la pagina principal"}
            color={"warning"}
            click={() => navigate("/")}
          />
           </>
        )
      ) : (
        <SpinnerContainer />
      )}
    </div>
  );
};
