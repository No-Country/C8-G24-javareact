import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Firestore
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  getFirestore,
  doc
} from "firebase/firestore";
import db from "../../utils/firebaseConfig";

//Data records locations
import countriesData from "../Records/CountriesData/CountriesData.json";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    //saveData(chiStock[11])
    setCountryState(storeLocation);

    localStorage.getItem("country") === null
      ? countryChoose("ARGENTINA")
      : countryChoose(storeLocation);

    //En caso de que este logueado, no se nos deja acceder a seleccionar la ubicacion
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });
  }, []);

  const [authUser, setAuthUser] = useState();
  const [productosFavoritos, setProductosFavoritos] = useState([]);
  const [locationProducts, setLocationProducts] = useState([]);
  const [countryState, setCountryState] = useState();
  const [disabled, setDisabled] = useState();
  const [move, setMove] = useState();
  const [favourites, setFavourites] = useState();

  const storeLocation = localStorage.getItem("country");

  //Firebase Set

  // const saveData = async(newOrder) =>{
  //   const orderFirebase = collection(db, 'chiStock')
  //   const orderDoc = await addDoc(orderFirebase, newOrder)

  // }

  //Firebase data
  const getStockFirestore = async (prop) => {
    const productsSnapshot = await getDocs(collection(db, prop));
    const productStocks = productsSnapshot.docs.map((doc) => {
      let products = doc.data();
      products.id = doc.id;
      return products;
    });
    return productStocks;
  };
  
  const holas = async (param) => {
    const favouritesItems = JSON.parse(localStorage.getItem("usersLog"));

    if (param !== null) {
      const db = getFirestore();

      const docRef = doc(db, "users", param);
      const docSnap = await getDoc(docRef);

      const docDataFav = docSnap.data().productsLike;

      console.log("si");
      setFavourites(docDataFav);
    } else {
      console.log("No");
      setFavourites([]);
    }
  };

  function countryChoose(country) {
    // const userLoggedCountry = JSON.parse(localStorage.getItem("usersLog"));
    // if (userLoggedCountry !== null) {

    //   const holas = userLoggedCountry[0].pais

    //   setCountryState(holas)
    // }else{
    setCountryState(country);
    // }

    switch (country) {
      case "CHILE":
        getStockFirestore("chiStock").then((prods) => {
          setLocationProducts(prods);
        });
        localStorage.setItem("country", country);
        if (location.pathname === "/search") {
          navigate("/");
        }
        break;
      case "ARGENTINA":
        getStockFirestore("argStock").then((prods) => {
          setLocationProducts(prods);
        });
        localStorage.setItem("country", country);
        if (location.pathname === "/search") {
          navigate("/");
        }
        break;
      case "BRASIL":
        getStockFirestore("braStock").then((prods) => {
          setLocationProducts(prods);
        });
        localStorage.setItem("country", country);
        if (location.pathname === "/search") {
          navigate("/");
        }
        break;
      case "URUGUAY":
        getStockFirestore("uruStock").then((prods) => {
          setLocationProducts(prods);
        });
        localStorage.setItem("country", country);
        if (location.pathname === "/search") {
          navigate("/");
        }
        break;

      default:
        break;
    }
  }
  const data = {
    countryChoose,
    locationProducts,
    countryState,
    productosFavoritos,
    setProductosFavoritos,
    setDisabled,
    disabled,
    setMove,
    move,
    holas,
    favourites,
    countriesData,
    authUser,
    setAuthUser
  };

  return (
    <LocationContext.Provider value={data}>{children}</LocationContext.Provider>
  );
};

export default LocationContext;

export { LocationProvider };
