import React, { useEffect, useState } from "react";
import ProfileTable from "../ProfileTable/ProfileTable";
import { notRepeatItems } from "../helpers/helpers";

const AdressProfile = ({ data }) => {
  const dataClient = data.userRequest;
  const [notRepeatDataClient , setNotRepeatDataClient] = useState();
  const [adressEmpty, setAdressEmpty] = useState()


  useEffect(() => {
    if (dataClient) {
      setNotRepeatDataClient(notRepeatItems(
        dataClient,
        "orderClient",
        "direccion"
      ));
      setAdressEmpty(true)
    }else{
      setAdressEmpty(false)
    }
  },[dataClient])


  return (
    <div className="mt-4">
      {adressEmpty ? notRepeatDataClient.map((item, index) => (
        <div className="my-4 flex items-center" key={index}>
          <div className="w-[3%]">
            <p># {index + 1}</p>
          </div>
          <div className="w-full">
            <ProfileTable
              title={"Dirección"}
              subtitle={"Localidad"}
              thirdCol={true}
              textThirdCol={item.orderClient.codigoPostal}
              thirdColTitle={"Codigo postal"}
              firstData={item.orderClient.direccion}
              secondData={`${item.orderClient.localidad} - ${item.orderClient.provincia} `}
              fourData={item.orderClient.telefono}
              fourTitle={"Teléfono"}
              fourCol={true}
            />
          </div>
        </div>
      )) : <p>No hay registrada ninguna dirección</p> }
    </div>
  );
};

export default AdressProfile;
