//Vector or image
import locationVector from "../../assets/vectors/locationVector.svg";

//Components Flowbite
import { Dropdown, Avatar } from "flowbite-react";

//Context
import { useContext, useState, useEffect } from "react";
import LocationContext from "../Context/LocationContext";

const Location = () => {
  const { countryChoose, countryState, countriesData } = useContext(LocationContext);
  const countryFlag = countriesData.filter((item) => item.country === countryState);
  const [imgFlag, setImgFlag] = useState();

  useEffect(() => {
    if (countryFlag.length < 1) {
      setImgFlag("/001-argentina.png");
    } else {
      setImgFlag(countryFlag[0].img);
    }
  }, [imgFlag, countryFlag]);

  return localStorage.getItem("usersLog") === null ? (
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
            <Avatar alt="User settings" img={imgFlag} className="sm:hidden max-[380px]:w-10 max-sm:py-2" />
          )}
          <div>
            <p className="text-xs sm:text-sm max-sm:hidden">{countryState}</p>
          </div>
        </>
      }
      class="hover:bg-yellow-200 rounded z-40"
    >
      <Dropdown.Header>
        <span className="block text-sm font-medium truncate">
          Selecciona tu país
        </span>
      </Dropdown.Header>

      <div id="countries" class="w-52">
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
            <Avatar alt="User settings" img={imgFlag} className="sm:hidden max-[380px]:w-10 max-sm:py-2" />
          )}
          <div>
            <p className="text-xs sm:text-sm max-sm:hidden">{countryState}</p>
          </div>
        </>
      }
      class="hover:bg-yellow-200 rounded z-40"
      disabled
    ></Dropdown>
  );
};

export default Location;
