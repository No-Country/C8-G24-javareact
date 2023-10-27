import React from "react";
import ProfileTable from "../ProfileTable/ProfileTable";
import countriesData from "../../views/Records/CountriesData/CountriesData.json";
import { countriesSelected } from "../helpers/helpers";

const UserProfile = ({ data, auth }) => {
  // const [userFlag, setUserFlag] = useState(null);
  const country = countriesSelected(countriesData, data.pais);

  function reaplaceNumbers(numbers) {
    return numbers.replace(/\d/g, ".");
  }

  const textoConPuntos = reaplaceNumbers(data.password);
  const imgagessss = country[0].img;

  return (
    <div className="flex gap-12 mt-4">
      <div className="w-1/2">
        <ProfileTable
          title={"Nombre"}
          subtitle={"Apellidos"}
          firstData={data.name}
          secondData={data.surname}
          thirdCol={true}
          flag={imgagessss}
        />
      </div>
      <div className="w-1/2">
        <ProfileTable
          title={"Correo electrónico"}
          subtitle={"Contraseña"}
          firstData={auth.auth.currentUser.email}
          secondData={textoConPuntos}
          thirdCol={false}
        />
      </div>
    </div>
  );
};

export default UserProfile;
