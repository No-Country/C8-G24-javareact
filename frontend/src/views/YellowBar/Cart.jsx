//Img or vector import
import { cartImg } from "../../assets/helpers/Images";
import { deleteIcon } from "../../assets/helpers/Images";

//Components from flowbite
import { Dropdown, Avatar, Button, Tooltip } from "flowbite-react";
import { useState, useEffect, useContext } from "react";
import CartContext from "../Context/CartContext";

import { useNavigate } from "react-router-dom";

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
      <Dropdown
        label={
          <>
            <Avatar
              alt="cart"
              img={cartImg}
              rounded={true}
              className="w-max rounded p-4 hover:bg-yellow-200"
            />
            <span
              color="warning"
              className="self-start rounded-full bg-opacity-95 bg-yellow-100 max-sm:top-0.5"
              id="rounded-full"
            >
              <p className="p-1 text-black text-sm">{plusQuantity}</p>
            </span>
          </>
        }
        arrowIcon={false}
        inline={true}
        placement="bottom-end"
        className="ml-2 mr-2 w-3/4  2xl:w-1/3 "
      >
        {btnBuy === true ? (
          <>
            <Dropdown.Header >
              <span className="block text-lg font-semibold truncate">
                Carrito
              </span>
              <span className="max-sm:text-xs grid grid-cols-5">
                <div className="col-span-2">
                  <p>Productos</p>
                </div>
                <div>
                  <p className="text-center">Cantidad</p>
                </div>
                <div className="dark:text-white max-[325px]:ml-1">
                  <p className="text-center">Precio</p>
                </div>
              </span>
            </Dropdown.Header>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
                {cart.map((products) => {
                  return (
                    <Dropdown.Item key={products.idItem}>
                      <div
                        className="py-3 sm:py-4  items-center grid grid-cols-5"  
                      >
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
                        <div className="flex flex-col   ">
                          <p className="text-center max-sm:pl-3">{products.cantidad}</p>
                        </div>
                        <div className="max-sm:text-sm  font-semibold text-gray-900 dark:text-white">
                         <p className="text-center">$ {products.precio * products.cantidad}</p>  
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
                    </Dropdown.Item>
                  );
                })}
              </ul>
            </div>
            {/* </Item> */}

            <Dropdown.Divider />
            <Dropdown.Item className="flex justify-between">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">{`$ ${subtotal}`}</p>
            </Dropdown.Item>
            <Dropdown.Item
              className="flex justify-center hover:bg-transparent"
              required={true}
            >
              <Button
                onClick={buyCart}
                color="dark"
                className="hover:bg-slate-600 bg-black"
              >
                Ir al carrito
              </Button>
            </Dropdown.Item>
          </>
        ) : (
          <>
            <p className="text-lg m-6 paddingLeft">
              No haz agregado ningún pedido al carrito de compras
            </p>
          </>
        )}
      </Dropdown>
    </>
  );
};

export default Cart;
