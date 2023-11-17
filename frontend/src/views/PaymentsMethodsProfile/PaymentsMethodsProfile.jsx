import React, { useEffect , useState } from "react";
import ProfileTable from "../ProfileTable/ProfileTable";
import { notRepeatItems } from "../helpers/helpers.mjs";

const PaymentsMethodsProfile = ({ data }) => {
  const dataMeta = data.userRequest;
  const [notRepeatDataClient , setNotRepeatDataClient] = useState();
  const [paymentsEmpty, setPaymentsEmpty] = useState()
  useEffect(() => {
    if (dataMeta) {
      setNotRepeatDataClient(notRepeatItems(dataMeta, "creditCard", "numero"));
      setPaymentsEmpty(true)
    }else{
      setPaymentsEmpty(false)
    }
  } , [dataMeta])

  return (
    <div className="mt-4">
      {paymentsEmpty ? notRepeatDataClient.map((item, index) => {
        return (
          <div className="flex items-center mb-4 max-lg:mb-5 max-lg:flex-col" key={index}>
            <p className="lg:w-[3%] max-lg:mb-4 max-lg:w-full  max-lg:font-medium max-lg:pl-4 max-lg:bg-gray-100 max-lg:rounded max-lg:shadow-md max-lg:py-1 "># {index + 1}</p>
            <div className="w-full flex gap-4 xl:gap-10 max-lg:flex-col">
              <div className="xl:w-8/12 max-xl:w-full ">
                <ProfileTable
                  title={"Numero de tarjeta"}
                  subtitle={"Fecha de expiración"}
                  fourTitle={"Codigo de verificación"}
                  firstData={item.creditCard.numero}
                  secondData={item.creditCard.expiracion}
                  fourCol={true}
                  fourData={item.creditCard.cvv}
                />
              </div>
              <div className="w-4/12 max-xl:w-full max-lg:mb-5">
                <ProfileTable
                  title={"Nombre y apellidos"}
                  subtitle={"DNI"}
                  firstData={item.creditCard.nombre}
                  secondData={item.creditCard.dni}
                />
              </div>
              
            </div>
            
            
          </div>
          
        );
      }) : <p>No hay metodos de pago registrados</p> }
    </div>
  );
};

export default PaymentsMethodsProfile;
