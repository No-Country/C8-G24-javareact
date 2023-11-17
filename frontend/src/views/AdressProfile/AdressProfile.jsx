import React, { useEffect, useState } from "react";
import ProfileTable from "../ProfileTable/ProfileTable";
import { notRepeatItems } from "../helpers/helpers.mjs";
import { Card } from "flowbite-react";

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
        <div className="my-4 flex items-center max-lg:flex-col" key={index}>
          <div className="w-[3%] max-lg:mb-4 max-lg:w-full max-lg:bg-gray-100 max-lg:rounded max-lg:shadow-md">
            <p className="max-lg:font-medium max-lg:pl-4 max-lg:py-1 "># {index + 1}</p>
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
