import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { CartList } from "../../CartList/CartList";
import LocationContext from "../../Context/LocationContext";
import { getUsersFirestore } from "../../helpers/helpers";
import { Spinner } from "flowbite-react";

const FavouritesPage = () => {
  const { authUser } = useContext(LocationContext);
  const [productsLike, setProductsLike] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 800);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUsersFirestore(user.uid, setProductsLike, false);
      }
    });

    return () => {
      // Cancela la suscripción cuando el componente se desmonte
      unsubscribe(); 
    };
  }, []);

  return (
    <div className="container mx-auto my-16 max-2xl:px-6">
      {showComponent ? (
        authUser ? (
          productsLike.length >= 1 ? (
            <CartList products={productsLike} title={"Tus favoritos"} />
          ) : (
            <h2 className="text-center">No tienes productos favoritos</h2>
          )
        ) : (
          <h2 className="text-center">no conectado</h2>
        )
      ) : (
        <div className="text-center flex justify-center items-center h-96">
          <Spinner
            aria-label="Extra large Center-aligned spinner"
            size="xl"
            color="warning"
          />
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
