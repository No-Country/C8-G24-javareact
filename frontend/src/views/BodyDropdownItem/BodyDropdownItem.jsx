import { Menu } from "@headlessui/react";

const BodyDropdownItem = ({countriesData , countryChoose}) => {
  return (
    <div className="px-1 py-1">
    {countriesData.map((item) => {
      return (
        <Menu.Item key={item.id}>
          <button
            className={
              "hover:bg-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"
            }
            onClick={() => countryChoose(item.country)}
          >
            {item.placeholder}
          </button>
        </Menu.Item>
      );
    })}
  </div>
  )
}

export default BodyDropdownItem