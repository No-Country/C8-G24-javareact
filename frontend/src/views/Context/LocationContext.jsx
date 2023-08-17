import { createContext , useState } from "react";

//Data - Records
import chiStock from "../Records/ProductsLists/ChileStock.json"
import argStock from "../Records/ProductsLists/ArgentinaStock.json"
import uruStock from "../Records/ProductsLists/UruguayPets.json"
import braStock from "../Records/ProductsLists/BrasilStock.json"

const LocationContext = createContext();

const LocationProvider = ({children}) =>{

    const [locationProducts, setLocationProducts] = useState(argStock);

    function countryChoose(country) {
      
        switch (country) {
          case "chile":
            setLocationProducts(chiStock);
            break;
          case "argentina":
            setLocationProducts(argStock);
            break;
          case "brasil":
            setLocationProducts(braStock);
            break;
          case "uruguay":
            setLocationProducts(uruStock);
            break;
      
          default:
            break;
        }
      }
    const data = {
        countryChoose,
        locationProducts
      };

      return(
        <LocationContext.Provider value={data}> 
        {children} 
        </LocationContext.Provider>
    )

}

export default LocationContext;

export {LocationProvider};