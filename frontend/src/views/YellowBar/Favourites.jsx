import { useState , useEffect, useContext } from "react";
import { hearth } from "../../assets/helpers/Images";
//Components from flowbite
import { Dropdown, Avatar } from "flowbite-react";
import LocationContext from "../Context/LocationContext";

const Favourites = () => {

const { favourites } = useContext(LocationContext) 

const [itemsFav , setItemsFav] = useState([]);

useEffect(() => {
  
  if(favourites !== undefined){

   setItemsFav(favourites)

   
  }else{
   const setFav = JSON.parse(localStorage.getItem("usersLog"))
   
   if(setFav === undefined || setFav !== null){

    setFav[0].productsLike === null && setItemsFav(setFav[0].productsLike)
   } 
  }
},[favourites])

return (
    <>
      <Dropdown
        label={
          <>
            <Avatar
              alt="cart"
              img={hearth}
              rounded={true}
              className="w-max rounded p-4 hover:bg-yellow-200"
              
            />
          </>
        }
        arrowIcon={false}
        inline={true}
        placement="bottom" 
      >
         {itemsFav.length !== 0  ?  (<>
         <Dropdown.Header>
              <span className="block text-sm md:text-lg md:font-semibold md:truncate">
                Favoritos
              </span>
              <span className="flex max-sm:hidden">
                <div className="sm:w-10/12 max-sm:w-40">
                  <p>Productos</p>
                </div>
                <div className="inline-flex justify-end items-center  text-gray-900 dark:text-white sm:w-28 max-sm:10">
                  <p>Precio</p>
                </div>
              </span>
            </Dropdown.Header>
           
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {itemsFav.map((products) => {
                    return (
                      <Dropdown.Item key={products.id}>
                      <div className="py-3 sm:py-4" >
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <img
                              className="h-8 w-8 rounded"
                              src={products.image}
                              alt="Neil image"
                            />
                          </div>
                          <div className="sm:w-72 flex-1">
                            <p className="md:truncate text-xs sm:text-sm md:font-medium text-gray-900 dark:text-white">
                              {products.description}
                            </p>
                            
                          </div>
                          <div className="inline-flex justify-end items-center text-gray-900 dark:text-white sm:w-32">
                          <p className="md:truncate text-xs sm:text-sm md:font-medium text-gray-900 dark:text-white">
                             $ {products.price}
                            </p>
                          </div>
                        </div>
                      </div>
                      </Dropdown.Item>
                    );
                  })}
                </ul>
              </div>
            </> ) :  <>
            <p className="text-lg m-6">
              No haz agregado ningún producto a tu lista de favoritos
            </p>
          </>}
        <Dropdown.Divider /> 
      </Dropdown>
    </>
  );
};

export default Favourites;
