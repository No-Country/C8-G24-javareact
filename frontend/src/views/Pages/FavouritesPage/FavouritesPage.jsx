import React, { useContext, useEffect, useState } from "react";
import { CartList } from "../../CartList/CartList";
import LocationContext from "../../Context/LocationContext";
import { getUsersFirestore } from "../../helpers/helpers";
import TitleAccount from "../../TitleAccount/TitleAccount";
import { useNavigate } from "react-router-dom";
import ButtonsPageNotProducts from "../../ButtonsPageNotProducts/ButtonsPageNotProducts";
import SpinnerContainer from "../../SpinnerContainer/SpinnerContainer";
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

const getUsersFirestoreData = async (id, returnUserData = false) => {
  const db = getFirestore();
  const usersCollection = collection(db, 'users');
  const currentUserDoc = doc(usersCollection, id);
  const userDoc = await getDoc(currentUserDoc);
  const userData = userDoc.data();

  return returnUserData ? userData : userData.productsLike || [];
};

const FavouritesPage = () => {
  const { authUser } = useContext(LocationContext);
  const [productsLike, setProductsLike] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [productsView , setProductsView] = useState(false)
 
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (authUser) {
          const userProducts = await getUsersFirestoreData(authUser.uid, false);
          setProductsLike(userProducts);
          setProductsView(userProducts.length >= 1);
        }
      } finally {
        setShowComponent(true);
      }
    };

    // Llamamos a fetchData después de un retardo de 800 ms
    const timeoutId = setTimeout(fetchData, 800);

    // Limpiamos el timeout en la limpieza del efecto
    return () => clearTimeout(timeoutId);

  }, [authUser]);

  return (
    <div className="container mx-auto my-16 max-2xl:px-6">
       <TitleAccount title={"Mis productos favoritos"} />
      {showComponent ? (
        authUser ? (
          productsView ? (
            <CartList products={productsLike}/>
          ) : (
           <ButtonsPageNotProducts title={"No tienes productos favoritos"} btnText={"Volver a la pagina principal"} color={"warning"} click={() => navigate("/")}/>
          )
        ) : (
          <p className="text-center my-72 text-3xl">no conectado</p>
        )
      ) : (
        <SpinnerContainer/>
      )}
    </div>
  );
};

export default FavouritesPage;
