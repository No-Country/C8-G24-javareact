import { useState, useEffect, useContext } from "react";
import { hearth } from "../../assets/helpers/Images";
//Components from flowbite
import { Dropdown, Avatar } from "flowbite-react";
import LocationContext from "../Context/LocationContext";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import { Menu } from "@headlessui/react";
import TitleItemDropdown from "../TitleItemDropdown/TitleItemDropdown";
const Favourites = () => {
  const { favourites } = useContext(LocationContext);

  const [itemsFav, setItemsFav] = useState([]);

  useEffect(() => {
    if (favourites !== undefined) {
      setItemsFav(favourites);
    } else {
      const setFav = JSON.parse(localStorage.getItem("usersLog"));

      if (setFav === undefined || setFav !== null) {
        setFav[0].productsLike === null && setItemsFav(setFav[0].productsLike);
      }
    }
  }, [favourites]);

  return (
    <>
      <Menu>
        <Menu.Button>
          <Avatar
            alt="favourites"
            img={hearth}
            rounded={true}
            className="w-max rounded p-4 hover:bg-yellow-200"
          />
          {itemsFav.length !== 0 ? (
            <>
              <DropdownContainer
                boxStyles={"right-2 max-lg:left-2 lg:right-72 divide-y-0"}
              >
                <div className="divide-y">
                  <TitleItemDropdown
                    title={"Favoritos"}
                    padd={"py-2 text-md"}
                    paddContainer={"py-1"}
                  />
                  <div className="grid grid-cols-2  px-3 pt-2">
                    <div className="text-left text-sm">
                      <p>Productos</p>
                    </div>
                    <div className="text-right text-sm">
                      <p>Precio</p>
                    </div>
                  </div>
                </div>
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {itemsFav.map((products) => {
                      return (
                        <Menu.Item key={products.id}>
                          <div className="py-3 px-3 sm:py-4">
                            <div className="flex items-center text-left space-x-2">
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
                        </Menu.Item>
                      );
                    })}
                  </ul>
                </div>
              </DropdownContainer>
            </>
          ) : (
            <DropdownContainer
              boxStyles={"right-2 max-lg:left-2 lg:right-72 divide-y-0"}
            >
              <Menu.Item>
                <p className="text-sm m-6">
                  No haz agregado ningún producto a tu lista de favoritos
                </p>
              </Menu.Item>
            </DropdownContainer>
          )}
        </Menu.Button>
      </Menu>
    </>
  );
};

export default Favourites;
