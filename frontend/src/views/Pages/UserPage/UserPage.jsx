
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect , useContext  , useState} from 'react'
import LocationContext from '../../Context/LocationContext';
import { getUsersFirestore } from "../../helpers/helpers";
import { Spinner } from "flowbite-react";

const UserPage = () => {
    
   
   //PRUEBA//
   
   const auth = getAuth();
   const { authUser } = useContext(LocationContext);
   const [userDatabase, setUserDatase] = useState([]);
   const [showComponent, setShowComponent] = useState(false);

   useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 800);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUsersFirestore(user.uid, setUserDatase, true);
      }
    });
    console.log(userDatabase)
    return () => {
      // Cancela la suscripción cuando el componente se desmonte
      unsubscribe(); 
    };
    
  }, []);
   

  return (
    (showComponent ? 
    <div>UserPage</div>
   : <div className="text-center flex justify-center items-center h-96">
   <Spinner
     aria-label="Extra large Center-aligned spinner"
     size="xl"
     color="warning"
   />
 </div> ) )
}

export default UserPage