//Img or vector import
import { cartImg } from "../../assets/helpers/Images";
import { deleteIcon } from "../../assets/helpers/Images";

//Components from flowbite
import { Avatar, Button, Tooltip } from "flowbite-react";
import { useState, useEffect, useContext } from "react";
import CartContext from "../Context/CartContext";

import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import TitleItemDropdown from "../TitleItemDropdown/TitleItemDropdown";

const Cart = () => {
  const { cart, setCart, handleDelete } = useContext(CartContext);

  const [btnBuy, setBtnBuy] = useState(false);
  const [subtotal, setSubtotal] = useState();
  const [plusQuantity, setPlusQuantity] = useState();

  useEffect(() => {
    if (cart !== null) {
      if (cart.length === 0) {
        setBtnBuy(false);
      } else {
        setBtnBuy(true);
      }
      setSubtotal(
        cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
      );

      setPlusQuantity(cart.reduce((prev, curr) => prev + curr.cantidad, 0));
    }
  }),
    [subtotal, plusQuantity];

  const navigate = useNavigate();
  function buyCart() {
    navigate("/cart");
  }

  return (
    <>
      <Menu>
        <Menu.Button>
          <div className="relative">
            <span
              color="warning"
              className="absolute bottom-14 max-sm:bottom-11 left-14 flex items-center rounded-full bg-yellow-100 justify-center w-8 h-8"
            >
              <p className="text-black text-md">{plusQuantity}</p>
            </span>
            <Avatar
              alt="cart"
              img={cartImg}
              rounded={true}
              className="w-max rounded p-4 hover:bg-yellow-200"
            />
          </div>

          {btnBuy === true ? (
            <>
              <DropdownContainer
                boxStyles={"right-2 max-lg:left-2 lg:right-48 divide-y-0"}
              >
                <div className="divide-y">
                  <TitleItemDropdown
                    title={"Carrito"}
                    padd={"py-2 text-md"}
                    paddContainer={"py-1"}
                  />

                  <div className="max-sm:text-xs grid grid-cols-6 px-3 pt-2">
                    <div className="text-left text-sm col-span-2">
                      <p>Productos</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-center">Cantidad</p>
                    </div>
                    <div className="dark:text-white max-[325px]:ml-1">
                      <p className="text-sm text-center">Precio</p>
                    </div>
                  </div>
                </div>
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
                    {cart.map((products) => {
                      return (
                        <Menu.Item key={products.idItem}>
                          <div className="py-3 px-3 sm:py-4  items-center grid grid-cols-6">
                            <div className="flex max-sm:flex-col items-center gap-4 col-span-2">
                              <img
                                className="h-10 w-10"
                                src={products.img}
                                alt="Neil image"
                              />
                              <div>
                                <p className="max-sm:text-xs text-sm font-medium text-gray-900 dark:text-white">
                                  {products.product}
                                </p>
                                <p className="sm:truncate text-sm text-gray-500 dark:text-gray-400 max-sm:text-xs">
                                  {`${products.precio} + 500 de envío en ${products.negocio}`}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col col-span-2">
                              <p className="text-center max-sm:pl-3">
                                {products.cantidad}
                              </p>
                            </div>
                            <div className="max-sm:text-sm  font-semibold text-gray-900 dark:text-white">
                              <p className="text-center">
                                $ {products.precio * products.cantidad}
                              </p>
                            </div>
                            <div className="inline-flex justify-end items-center text-base font-semibold text-gray-900 dark:text-white ">
                              <Tooltip content="Eliminar producto">
                                <Avatar
                                  className="h-16 max-lg:w-10 rounded-md hover:bg-slate-200 cursor-pointer"
                                  img={deleteIcon}
                                  rounded={true}
                                  onClick={() => handleDelete(products)}
                                />
                              </Tooltip>
                            </div>
                          </div>
                        </Menu.Item>
                      );
                    })}
                  </ul>
                </div>
                {/* </Item> */}
                <div>
                  <Menu.Item>
                    <div className="flex gap-2 px-3 justify-end border-t pt-2">
                      <p className="text-md font-black">Subtotal:</p>
                      <p className="text-md font-black">{`$ ${subtotal}`}</p>
                    </div>
                  </Menu.Item>
                  <Menu.Item
                    className="flex justify-center hover:bg-transparent"
                    required={true}
                  >
                    <div className="flex py-2">
                      <Button
                        onClick={buyCart}
                        color="dark"
                        className="hover:bg-slate-600 bg-black"
                      >
                        Ir al carrito
                      </Button>
                    </div>
                  </Menu.Item>
                </div>
              </DropdownContainer>
            </>
          ) : (
            <>
              <DropdownContainer
                boxStyles={"right-0 max-lg:left-2 lg:right-44 divide-y-0"}
              >
                <Menu.Item>
                  <p className="text-md max-sm:text-sm m-6 paddingLeft">
                    No haz agregado ningún pedido al carrito de compras
                  </p>
                </Menu.Item>
              </DropdownContainer>
            </>
          )}
        </Menu.Button>
      </Menu>
    </>
  );
};

export default Cart;
