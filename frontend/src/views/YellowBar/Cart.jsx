//Img or vector file
import cartImg from "../../assets/vectors/cart.svg";
import deleteIcon from "../../assets/vectors/delete.png";

//Components from flowbite
import { Dropdown, Avatar, Button, Tooltip } from "flowbite-react";
import { useState, useEffect, useContext } from "react";
import CartContext from "../Context/CartContext";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart , handleDelete } = useContext(CartContext);

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
              class="w-max rounded p-4 hover:bg-yellow-200"
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
        placement="bottom"
        className=" mr-4"
      >
        {btnBuy === true ? (
          <>
            <Dropdown.Header>
              <span className="block text-lg font-semibold truncate">
                Carrito
              </span>
              <span className="flex max-sm:hidden">
                <div className="sm:w-96 ">
                  <p>Productos</p>
                </div>
                <div className="flex items-center sm:w-28 ">
                  <p>Cantidad</p>
                </div>
                <div className="inline-flex justify-end items-center text-base font-semibold text-gray-900 dark:text-white sm:w-28 max-sm:10">
                  <p>Precio</p>
                </div>
                <div className="inline-flex justify-end items-center text-base font-semibold text-gray-900 dark:text-white sm:w-28 max-sm:10">
                  <p></p>
                </div>
              </span>
            </Dropdown.Header>
           
            {/* <Item> */}
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cart.map((products) => {
                    return (
                      <Dropdown.Item>
                      <li className="py-3 sm:py-4" key={products.idItem}>
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <img
                              className="h-8 w-8 rounded"
                              src={products.img}
                              alt="Neil image"
                            />
                          </div>
                          <div className="sm:w-72 flex-1">
                            <p className="sm:truncate text-sm font-medium text-gray-900 dark:text-white">
                              {products.product}
                            </p>
                            <p className="sm:truncate text-sm text-gray-500 dark:text-gray-400">
                              {`${products.precio} + 500 de envío en ${products.negocio}`}
                            </p>
                          </div>
                          <div className="flex flex-col items-center sm:w-28 ">
                            <p className="ml-5 mr-5">{products.cantidad}</p>
                          </div>
                          <div className="inline-flex justify-end items-center text-base font-semibold text-gray-900 dark:text-white sm:w-32">
                            $ {products.precio * products.cantidad}
                          </div>
                          <div className="inline-flex justify-end items-center text-base font-semibold text-gray-900 dark:text-white sm:w-32">
                          <Tooltip content="Eliminar producto">
                          <Avatar
                    className="h-16 max-sm:w-32 max-lg:w-10 rounded-md hover:bg-slate-200 cursor-pointer"
                    img={deleteIcon}
                    rounded={true}
                    onClick={() => handleDelete(products)}
                  />
                  </Tooltip>
                          </div>
                        </div>
                      </li>
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
            <Dropdown.Item className="flex justify-center hover:bg-transparent" required={true}>
              <Button onClick={buyCart} color="dark" className="hover:bg-slate-600">
                Ir al carrito
              </Button>
              
            </Dropdown.Item>
          </>
        ) : (
          <>
            <p className="text-lg m-6">
              No haz agregado ningún pedido al carrito de compras
            </p>
          </>
        )}
      </Dropdown>
    </>
  );
};

export default Cart;
