import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Avatar } from "flowbite-react";
import { locationVector } from "../../assets/helpers/Images";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import TitleItemDropdown from "../TitleItemDropdown/TitleItemDropdown";
import BodyDropdownItem from "../BodyDropdownItem/BodyDropdownItem";

export default function LocationDropdown({
  countriesData,
  countryState,
  countryChoose,
  imgFlag,
  title
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center hover:bg-[#fce96a] cursor-pointer rounded-md  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 items-center gap-1">
          <>
            <Avatar
              alt="User settings"
              img={locationVector}
              rounded={true}
              className="max-sm:hidden"
            />
            {countryState && (
              <Avatar
                alt="User settings"
                img={imgFlag}
                className="sm:hidden max-[380px]:w-10 max-sm:py-2"
              />
            )}
            <div>
              <p className="text-xs sm:text-sm max-sm:hidden">{countryState}</p>
            </div>
            <ChevronDownIcon className="max-sm:hidden w-6" />
          </>
        </Menu.Button>
      </div>
      <DropdownContainer boxStyles={"w-56"}>
        <TitleItemDropdown title={title} padd={"py-2"} paddContainer={"py-1"} />
        <BodyDropdownItem
          countriesData={countriesData}
          countryChoose={countryChoose}
        />
      </DropdownContainer>
    </Menu>
  );
}
