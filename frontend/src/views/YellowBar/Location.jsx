//Vector or image
import locationVector from "../../assets/vectors/locationVector.svg";

//Components Flowbite
import { Dropdown, Avatar, Label, Select } from "flowbite-react";

import records from "../Records/ProductsLists/ProductLists.json";

function countryChoose(){
  console.log(records)
}

const Location = () => {
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

        <Dropdown.Item>
          <div id="select" class="w-52">
            <Select id="countries" required={true} onChange={countryChoose}>
              <option value="argentina" >Argentina</option>
              <option value="brasil">Brasil</option>
              <option value="chile">Chile</option>
              <option value="uruguay">Uruguay</option>
            </Select>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default Location;
