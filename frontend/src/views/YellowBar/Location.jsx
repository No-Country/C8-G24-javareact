//Vector or image
import { locationVector } from "../../assets/helpers/Images";

//Components Flowbite
import { Dropdown, Avatar } from "flowbite-react";

//Context
import { useContext, useState, useEffect } from "react";
import LocationContext from "../Context/LocationContext";
import { countriesSelected } from "../helpers/helpers.mjs";

const Location = () => {
  const { countryChoose, countryState, countriesData, authUser, setAuthUser } =
    useContext(LocationContext);
    
    const countryFlag = countriesSelected(countriesData, countryState);

  // function CountriesSelected(itemFilter) {
  //   const resultadoFiltrado = countriesData.filter(
  //     (item) => item.country === itemFilter
  //   );
  //   return resultadoFiltrado;
  // }

  const [imgFlag, setImgFlag] = useState();

  useEffect(() => {
    if (countryFlag.length < 1) {
      setImgFlag(countriesData[0].img);
    } else {
      setImgFlag(countryFlag[0].img);
    }
  }, [imgFlag, countryFlag]);

  return authUser === null ? (
    <Dropdown
      label={
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
        </>
      }
      className="rounded z-40"
      id="bgColorNavBar"
    >
      <Dropdown.Header>
        <span className="block text-sm font-medium truncate">
          Selecciona tu país
        </span>
      </Dropdown.Header>
      <div id="countries" className="w-52">
        {countriesData.map((item) => {
          return (
            <Dropdown.Item key={item.id}>
              <button
                className="w-full text-left"
                onClick={() => countryChoose(item.country)}
              >
                {item.placeholder}
              </button>
            </Dropdown.Item>
          );
        })}
      </div>
    </Dropdown>
  ) : (
    <Dropdown
      label={
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
        </>
      }
      className="hover:bg-yellow-200 rounded z-40 bg-yellow-200 "
      id="bgColorNavBar"
      disabled
    ></Dropdown>
  );
};

export default Location;
