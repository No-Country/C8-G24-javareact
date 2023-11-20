//Vector or image
import { locationVector } from "../../assets/helpers/Images";

//Components Flowbite
import { Dropdown, Avatar } from "flowbite-react";

//Context
import { useContext, useState, useEffect } from "react";
import LocationContext from "../Context/LocationContext";
import { countriesSelected } from "../helpers/helpers.js";
import LocationDropdown from "../LocationDropdown/LocationDropdown";

import { Menu } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Location = () => {
  const { countryChoose, countryState, countriesData, authUser, setAuthUser } =
    useContext(LocationContext);

  const countryFlag = countriesSelected(countriesData, countryState);

  const [imgFlag, setImgFlag] = useState();

  useEffect(() => {
    if (countryFlag.length < 1) {
      setImgFlag(countriesData[0].img);
    } else {
      setImgFlag(countryFlag[0].img);
    }
  }, [imgFlag, countryFlag]);

  return authUser === null ? (
    <LocationDropdown
      countriesData={countriesData}
      countryState={countryState}
      countryChoose={countryChoose}
      imgFlag={imgFlag}
      title={"Selecciona tu país"}
    />
  ) : (
    <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="bg-red inline-flex w-full justify-center hover:bg-[#fce96a] cursor-pointer rounded-md  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 items-center gap-1">
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
     
    </Menu>
  );
};

export default Location;
