import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Data - Records - stock
import chiStock from "../Records/ProductsLists/ChileStock.json";
import argStock from "../Records/ProductsLists/ArgentinaStock.json";
import uruStock from "../Records/ProductsLists/UruguayPets.json";
import braStock from "../Records/ProductsLists/BrasilStock.json";

//Data records locations
import countriesData from "../Records/CountriesData/CountriesData.json" 

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setCountryState(storeLocation);

    localStorage.getItem("country") === null
      ? countryChoose("ARGENTINA")
      : countryChoose(storeLocation);
  }, []);

  const [productosFavoritos, setProductosFavoritos] = useState([]);
  const [locationProducts, setLocationProducts] = useState([]);
  const [countryState, setCountryState] = useState();
  const [disabled, setDisabled] = useState();
  const [move, setMove] = useState();
  const [favourites , setFavourites] = useState();
  

  const storeLocation = localStorage.getItem("country");

 function holas(){
  const favouritesItems = JSON.parse(localStorage.getItem("usersLog"));
  
  if (favouritesItems !== null){
    setFavourites(favouritesItems[0].productsLike)
  }else{
    setFavourites([])
  }
 }

  function countryChoose(country) {
    
    const userLoggedCountry = JSON.parse(localStorage.getItem("usersLog"));
    if (userLoggedCountry !== null) {
      
      const holas = userLoggedCountry[0].pais
 
      setCountryState(holas)
    }else{
      setCountryState(country);
    }
      
    
    switch (country) {
      case "CHILE":
        setLocationProducts(chiStock);
        localStorage.setItem("country", country);
        if (location.pathname === "/search") {
          navigate("/");
        }
        break;
      case "ARGENTINA":
        setLocationProducts(argStock);
        localStorage.setItem("country", country);
        if (location.pathname === "/search") {
          navigate("/");
        }
        break;
      case "BRASIL":
        setLocationProducts(braStock);
        localStorage.setItem("country", country);
        if (location.pathname === "/search") {
          navigate("/");
        }
        break;
      case "URUGUAY":
        setLocationProducts(uruStock);
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
    countriesData 
  };

  return (
    <LocationContext.Provider value={data}>{children}</LocationContext.Provider>
  );
};

export default LocationContext;

export { LocationProvider };
