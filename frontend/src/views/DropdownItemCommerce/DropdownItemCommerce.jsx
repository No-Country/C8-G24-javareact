import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropdownItemCommerce = ({
  comercios,
  handleCardFunctionX,
  description,
  image,
  shopping,
  shipments,
  price,
  id
}) => {
  return (
    <div className="z-50">
      <Menu as="div" className="relative inline-block text-center w-full">
        <div>
          <Menu.Button className="inline-flex w-11/12 justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {`Compáralo en ${comercios.length} tiendas`}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 divide-y-2">
              {comercios.map((items) => {
                return (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "text-white flex justify-between bg-blue-500"
                            : "text-gray-900 flex justify-between"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                        onClick={() => {
                          handleCardFunctionX(
                            items,
                            description,
                            image,
                            comercios,
                            shopping,
                            shipments,
                            price,
                            id
                          );
                        }}
                      >
                        <div>
                          <p>{items.negocio}</p>
                        </div>
                        <div>
                          <p>$ {items.precio}</p>
                          <p>$ {items.envio}</p>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownItemCommerce;
