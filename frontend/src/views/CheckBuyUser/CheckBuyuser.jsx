import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CheckBuyuser = () => {

  const [mail, setMail] = useState();
  const [ship , setShip] = useState([]);

  useEffect(() => {
    const usersLog = JSON.parse(localStorage.getItem("usersLog"))
    setMail(usersLog.map((item) => item.mail))
    
    const orderClientSet = JSON.parse(sessionStorage.getItem('orderClient'));
    setShip(orderClientSet)
    
  }, []);


  return (
    <div className="flex flex-col bg-white p-4 mb-8 mt-8">
      <div className="flex gap-10 pb-2 border-b-2">
       
        <p>Contacto: {mail}</p>
      </div>
      <div className="flex gap-10 pt-2">
        
        <p>Enviar a: {ship.direccion}, {ship.localidad}, {ship.provincia} , {ship.codigoPostal}</p>
      </div>
    </div>
  );
};

export default CheckBuyuser;
