//Vector or image
import locationVector from "../../assets/vectors/locationVector.svg";

//Components Flowbite
import { Dropdown, Avatar } from "flowbite-react";

//Context
import { useContext } from "react";
import LocationContext from "../Context/LocationContext";

const countriesData = [
  { country: "argentina", placeholder: "Argentina", id: 1 },
  { country: "brasil", placeholder: "Brasil", id: 2 },
  { country: "chile", placeholder: "Chile", id: 3 },
  { country: "uruguay", placeholder: "Uruguay", id: 4 }
];

const Location = () => {
  const { countryChoose } = useContext(LocationContext);
  return (
    <>
      <Dropdown
        label={
          <>
            <Avatar alt="User settings" img={locationVector} rounded={true} />
            <div>
              <p>EN QUE REGION TE ENCUENTRAS</p>
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
    </>
  );
};

export default Location;
