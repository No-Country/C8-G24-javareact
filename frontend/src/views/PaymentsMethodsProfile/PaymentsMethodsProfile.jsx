import React, { useEffect , useState } from "react";
import ProfileTable from "../ProfileTable/ProfileTable";
import { notRepeatItems } from "../helpers/helpers";

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
          <div className="flex items-center" key={index}>
            <p className="w-[3%]"># {index + 1}</p>
            <div className="w-full flex gap-10">
              <div className="w-8/12">
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
              <div className="w-4/12">
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
