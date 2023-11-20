import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { translateDateToSpanish, dateShipping } from "../helpers/helpers.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "flowbite-react";
import { GrCopy } from "react-icons/gr";
import { BsCheck2 } from "react-icons/bs"
const OrderDataProfile = ({ data }) => {

  const [buttonActive, setButtonActive] = useState(true)

  useEffect(( ) => {
    if (!buttonActive) {
      setTimeout(() => {
        setButtonActive(true)
      }, "3000");
    }
  },[buttonActive])

  const dateDayOrder = new Date(data.item.dateOrder);
  const formatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Europe/Madrid"
  };

  const localDate = translateDateToSpanish(dateDayOrder, formatOptions);

  const {
    number: dayIn,
    month: monthIn,
    year: yearIn
  } = data.item.shippingSet.inDateItems;

  const {
    number: dayOut,
    month: monthOut,
    year: yearOut
  } = data.item.shippingSet.outDateItems;

  const dateOrderIn = dateShipping(yearIn, monthIn, dayIn, formatOptions);
  const dateOrderOut = dateShipping(yearOut, monthOut, dayOut, formatOptions);

  return (
    <div className="top-0 sticky">
      <Card>
        <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Pedido #{data.index}
        </h6>
        <div>
          <p className="font-bold">Dia y hora de pedido</p>
          <p>{localDate}</p>
        </div>
        <div className="flex items-end gap-10">
          <div>
          <p className="font-bold">Numero de pedido</p>
          <p># {data.item.idOrder}</p>
          </div>
          <div className="flex">
            <CopyToClipboard text={data.item.idOrder}>
              <Button color={"light"} as="span"  size="lg" className="hover:bg-slate-50 border-solid border-1 border-black bg-white cursor-pointer buttonCopy focus:ring-white" onClick={() => setButtonActive(false)}>
               {buttonActive ?  <GrCopy size={18} className="redIcon"/> : <BsCheck2 size={18} className="redIcon"/>  }  
              </Button>
            </CopyToClipboard>
          </div>
        </div>
        <div>
          <p className="font-bold">Dirección de entrega</p>
          <p>
            {data.item.orderClient.nombre} {data.item.orderClient.apellido}
          </p>
          <p>{data.item.orderClient.direccion}</p>
          <p>{data.item.orderClient.localidad}</p>
          <p>
            {data.item.orderClient.provincia} -{" "}
            {data.item.orderClient.codigoPostal}
          </p>
        </div>
        <div>
          <p className="font-bold">Fecha de entrega planificada</p>
          <p>
            Entre los dias {dateOrderIn} y {dateOrderOut}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default OrderDataProfile;

