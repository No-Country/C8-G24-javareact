import React, { useState, useEffect } from "react";

const CheckBuyuser = () => {
  const [mail, setMail] = useState();
  const [ship, setShip] = useState([]);

  useEffect(() => {
    const orderClientSet = JSON.parse(sessionStorage.getItem("orderClient"));
    setShip(orderClientSet);
  }, []);

  return (
    <div className="flex flex-col bg-white p-4 mb-8 mt-8">
      <div className="flex gap-10 pb-2 border-b-2">
        <p>Contacto: {ship.mail}</p>
      </div>
      <div className="flex gap-10 pt-2">
        <p>
          Enviar a: {ship.direccion}, {ship.localidad}, {ship.provincia} ,{" "}
          {ship.codigoPostal}
        </p>
      </div>
    </div>
  );
};

export default CheckBuyuser;
