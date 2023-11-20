import React from "react";
import { Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
const DropdownContainer = ({ children , boxStyles }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className= {`absolute mt-2 origin-top-right  divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${boxStyles}` }>
        {children}
      </Menu.Items>
    </Transition>
  );
};

export default DropdownContainer;