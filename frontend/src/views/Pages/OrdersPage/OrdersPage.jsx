import React from "react";
import LocationContext from "../../Context/LocationContext";
import { useContext, useState, useEffect } from "react";
import { getUsersFirestore } from "../../helpers/helpers";
import TitleAccount from "../../TitleAccount/TitleAccount";
import OrderDataProfile from "../../OrdersDataProfile/OrderDataProfile";
import { CartList } from "../../CartList/CartList";
import { calculateTotal } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import ButtonsPageNotProducts from "../../ButtonsPageNotProducts/ButtonsPageNotProducts";
import { Spinner } from "flowbite-react";

const OrdersPage = () => {
  const { authUser } = useContext(LocationContext);
  const [productsLike, setProductsLike] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const location = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 800);

    if (authUser) {
      getUsersFirestore(authUser.uid, setProductsLike, true);
    }
  }, [authUser]);

  const dataClient = productsLike.userRequest;

  return (
    <div className="container mx-auto my-16 max-2xl:px-6">
      <TitleAccount title={"Mis pedidos"} />

      {showComponent ? (
        dataClient ? (
          dataClient.map((item, index) => {
            return (
              <div className="lg:flex lg:gap-8 mt-10 mb-20" key={item.idItem}>
                <div className="lg:w-3/6">
                  <OrderDataProfile data={{ item, index: index + 1 }} />
                </div>
                <div className="lg:w-3/6 flex-col ">
                  <CartList products={item.cartListOrder} />
                  <p className="mt-4 text-lg font-bold text-right">
                    Total : {calculateTotal(item.cartListOrder)}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <ButtonsPageNotProducts
            title={"No tienes pedidos registrados"}
            btnText={"Volver a la pagina principal"}
            color={"warning"}
            click={() => location("/")}
          />
        )
      ) : (
        <div className="text-center flex justify-center items-center h-96">
          <Spinner
            aria-label="Extra large Center-aligned spinner"
            className="w-20 h-20"
            color="warning"
          />
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
