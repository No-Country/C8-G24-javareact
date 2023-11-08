// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { CartList } from "../../CartList/CartList";
import LocationContext from "../../Context/LocationContext";
import { getUsersFirestore } from "../../helpers/helpers";
import { Spinner } from "flowbite-react";
import TitleAccount from "../../TitleAccount/TitleAccount";
import { useNavigate } from "react-router-dom";
import ButtonsPageNotProducts from "../../ButtonsPageNotProducts/ButtonsPageNotProducts";

const FavouritesPage = () => {
  const { authUser } = useContext(LocationContext);
  const [productsLike, setProductsLike] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [productsView , setProductsView] = useState(false)
 
  const navigate = useNavigate()
  
  useEffect(() => {
    
   setTimeout(() => {
    
      setShowComponent(true);

    }, 800);
   
    if (authUser) {

      getUsersFirestore(authUser.uid, setProductsLike, false);

    }
    
    if (productsLike) {
      if (productsLike.length >= 1) {
        setProductsView(true)
      }else{
        setProductsView(false)
      }
    }

  }, [authUser, productsLike]);

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

export default FavouritesPage;
