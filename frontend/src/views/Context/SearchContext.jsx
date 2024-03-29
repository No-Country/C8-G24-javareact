import { createContext ,useState } from "react";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import LocationContext from "./LocationContext";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    const {locationProducts , setMove} = useContext(LocationContext);

    let navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [match , setMatch] = useState([]);

    
    const handleSearch = (e) =>{
      
        navigate('/search')
        setSearch(e.target.value);
       
        //el move lo puse para que cada vez que apriete una tecla vuelva a pensar la logica de corazones
        setMove(e.target.value)
        
       
        let searchKeywords = e.target.value; 

        const matchProductsKeywords = locationProducts.filter((item) => item.product.toUpperCase().includes(searchKeywords.toUpperCase()))
        setMatch(matchProductsKeywords)
        
    }
  
    const data = {
        handleSearch,
        search,
        match
    };

    return(
        <SearchContext.Provider value={data}> 
        {children} 
        </SearchContext.Provider>
    )
}

export default SearchContext;

export {SearchProvider};