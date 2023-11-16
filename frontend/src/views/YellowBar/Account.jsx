import { Dropdown } from "flowbite-react";
import { Avatar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import UserRegistration from "../UserRegistration/UserRegistration";
import UserLogged from "../UserLogged/UserLogged";
import userIcon from "../../assets/helpers/Images";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";

//Firestore
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

//Context
import LocationContext from "../Context/LocationContext";
import CartContext from "../Context/CartContext";

//Modal
import ModalAuth from "../Modal/Modal";

const Account = () => {
  const navigate = useNavigate();

  const { cart, setCart, openModal, setOpenModal, props, goToHome } =
    useContext(CartContext);
  const { countryChoose, holas } = useContext(LocationContext);

  const [registerUser, setRegisterUser] = useState();
  const [log, setLog] = useState(true);
  const [userMail, setUserMail] = useState();
  const [userName, setUserName] = useState();

  useEffect(() => {
    setRegisterUser(true);

    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Ha cambiado el estado");

      if (user) {
        // sign in...
        console.log("sign in");
        setLog(false);
        const countryLogged = localStorage.getItem("country");
        const uid = user.uid;
        getUsersFirestore(uid, countryLogged);
        holas(uid);
      } else {
        // User is signed out
        console.log("sign out");
        setLog(true);
        holas(null);
      }
    });

    return () => {
      // Limpia la suscripción cuando el componente se desmonta
      unsubscribe();
    };
  }, []);

  //Firebase data
  const getUsersFirestore = async (id, countryLogged) => {
    const productsSnapshot = await getDocs(collection(db, "users"));
    const productStocks = productsSnapshot.docs.map((doc) => {
      let products = doc.data();

      return products;
    });

    const productFind = productStocks.find((element) => element.id === id);

    setUserMail(productFind.mail);
    setUserName(productFind.name);
    countryChoose(productFind.pais);

    if (productFind.pais !== countryLogged) {
      setCart([]);
      localStorage.removeItem("usersCart");
      setOpenModal("pop-up");
      navigate("/");
    }
  };

  return (
    <>
      <Dropdown
        label={
          <>
            <Avatar
              alt="User settings"
              img={userIcon}
              rounded={true}
              className="max-[380px]:w-10 max-sm:py-2"
            />
            <div>
              <p className="text-xs sm:text-sm max-sm:hidden">MI CUENTA</p>
            </div>
          </>
        }
        className="rounded"
        id="bgColorNavBar"
      >
        {registerUser ? (
          <UserLogged
            registerUser={registerUser}
            setRegisterUser={setRegisterUser}
            log={log}
            setLog={setLog}
            userMail={userMail}
            userName={userName}
            cart={cart}
          />
        ) : (
          <UserRegistration
            registerUser={registerUser}
            setRegisterUser={setRegisterUser}
            log={log}
            setLog={setLog}
          />
        )}
      </Dropdown>
      <ModalAuth
        props={props}
        title={
          "Tiene productos de otro país, se borraran para mejorar su experiencia"
        }
        modaCloseFunction={() => goToHome()}
        buttonText={"Cerrar"}
        icon={"location"}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  );
};

export default Account;
