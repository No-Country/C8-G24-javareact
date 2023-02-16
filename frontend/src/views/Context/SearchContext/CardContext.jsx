import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";
import { useState } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const navigate = useNavigate();
  const [chosenCard, setChosenCard] = useState();
  const handleCardFunctionX = (
    items,
    description,
    image,
    comercios,
    shopping,
    shipments,
    price,
    id
  ) => {
    navigate(`/producto/:${id}`);

    const informationChosenCard = {
      id: id,
      img: image,
      product: description,
      precio: items.precio,
      cantidad: 1,
      envio: items.envio,
      negocio: items.negocio,
      stock: items.stock,
      idItem : items.id
    };
    setChosenCard(informationChosenCard);
  };

  const data = {
    handleCardFunctionX,
    chosenCard
  };

  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};

export default CardContext;

export { CardProvider };
