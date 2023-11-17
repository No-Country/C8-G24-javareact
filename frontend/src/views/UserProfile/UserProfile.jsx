import React from "react";
import ProfileTable from "../ProfileTable/ProfileTable";
import countriesData from "../../views/Records/CountriesData/CountriesData.json";
import { countriesSelected } from "../helpers/helpers.mjs";

const UserProfile = ({ data, auth }) => {

  const country = countriesSelected(countriesData, data.pais);

  function reaplaceNumbers(numbers) {
    return numbers.replace(/\d/g, ".");
  }

  const textPointsContainer = reaplaceNumbers(data.password);
  const imgFlagCountry = country[0].img;

  return (
    <div className="flex gap-6 xl:gap-8 mt-4 mb-4 max-2xl:flex-col">
      <div className="2xl:w-1/2">
        <ProfileTable
          title={"Nombre"}
          subtitle={"Apellidos"}
          firstData={data.name}
          secondData={data.surname}
          thirdCol={true}
          thirdColTitle= {"País"}
          flag={imgFlagCountry}
        />
      </div>
      <div className="2xl:w-1/2">
        <ProfileTable
          title={"Correo electrónico"}
          subtitle={"Contraseña"}
          firstData={auth.auth.currentUser.email}
          secondData={textPointsContainer}
          thirdCol={false}
        />
      </div>
    </div>
  );
};

export default UserProfile;
