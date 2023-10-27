
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect , useContext  , useState} from 'react'
import LocationContext from '../../Context/LocationContext';
import { getUsersFirestore } from "../../helpers/helpers";
import { Spinner } from "flowbite-react";


import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

const UserPage = () => {
    
   
   //PRUEBA//
   
   const auth = getAuth();
   const { authUser } = useContext(LocationContext);
   const [userDatabase, setUserDatase] = useState([]);
   const [showComponent, setShowComponent] = useState(false);

   useEffect(() => {
    
    setTimeout(() => {
     
       setShowComponent(true);
 
     }, 800);
    
     if (authUser) {
 
       getUsersFirestore(authUser.uid, setUserDatase, true);
       console.log(userDatabase)
     }
     

  
   }, [authUser]);
   
  return (
    <div className="text-center flex justify-center items-center h-96">
    {(showComponent ? 
    <Tabs
      aria-label="Pills"
      style="pills"
    >
      <Tabs.Item
        active
        title="Tab 1"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content 1
        </p>
      </Tabs.Item>
      <Tabs.Item title="Tab 2">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content 2
        </p>
      </Tabs.Item>
      <Tabs.Item title="Tab 3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content 3
        </p>
      </Tabs.Item>
      <Tabs.Item title="Tab 4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content 4
        </p>
      </Tabs.Item>
      <Tabs.Item
        disabled
        title="Tab 5"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content 5
        </p>
      </Tabs.Item>
    </Tabs>
   : 
   <Spinner
     aria-label="Extra large Center-aligned spinner"
     size="xl"
     color="warning"
   />
 )} 
 </div> 
)
}

export default UserPage