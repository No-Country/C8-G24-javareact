import { createContext , useEffect, useState } from "react";
import { useLocation , useNavigate } from 'react-router-dom';

//Data - Records
import chiStock from "../Records/ProductsLists/ChileStock.json"
import argStock from "../Records/ProductsLists/ArgentinaStock.json"
import uruStock from "../Records/ProductsLists/UruguayPets.json"
import braStock from "../Records/ProductsLists/BrasilStock.json"

const LocationContext = createContext();

const LocationProvider = ({children}) =>{

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(()=>{
    
    setCountryState(storeLocation)
  
    localStorage.getItem("country") === null ? countryChoose("ARGENTINA") : countryChoose(storeLocation)

    
  },[])

    const [locationProducts, setLocationProducts] = useState([]);
    const [countryState, setCountryState] = useState();

    const storeLocation = localStorage.getItem("country");

    function countryChoose(country) {
     
       setCountryState(country)
       switch (country) {
         case "CHILE":
           setLocationProducts(chiStock);
           localStorage.setItem("country", country)
           if(location.pathname === "/search"){
            navigate("/")
           }
           break;
         case "ARGENTINA":
           setLocationProducts(argStock);
           localStorage.setItem("country", country)
           if(location.pathname === "/search"){
            navigate("/")
           }
           break;
         case "BRASIL":
           setLocationProducts(braStock);
           localStorage.setItem("country", country)
           if(location.pathname === "/search"){
            navigate("/")
           }
           break;
         case "URUGUAY":
           setLocationProducts(uruStock);
           localStorage.setItem("country", country)
           if(location.pathname === "/search"){
            navigate("/")
           }
           break;
     
         default:
           break;

     }
        
      }
    const data = {
        countryChoose,
        locationProducts,
        countryState
      };

      return(
        <LocationContext.Provider value={data}> 
        {children} 
        </LocationContext.Provider>
    )

}

export default LocationContext;

export {LocationProvider};