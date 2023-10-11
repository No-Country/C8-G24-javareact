import { Label, TextInput, Checkbox, Button, Select } from "flowbite-react";
import iconBack from "../../assets/vectors/icon-back.svg";
import { Link, useNavigate } from "react-router-dom";
import Provinces from "../Records/Provinces/Provinces.json";
import { useState } from "react";
import { BreadcrumbSetting } from "../Breadcrumb/Breadcrumb";

const UserInformation = () => {
    const navigate = useNavigate();

    const [formsValues, setFormsValues] = useState({
      region : "",
      nombre: "",
      apellido: "",
      direccion : "",
      zona: "",
      codigoPostal: "",
      localidad: "",
      provincia:"",
      telefono: ""
})

    const handleChangeInformation = (e) => {
      setFormsValues({ ...formsValues, [e.target.name]: e.target.value });
    };
    
    function handleConfirmationUserOrder(e){
        e.preventDefault()
        
       const userRegistered = localStorage.getItem("usersLog")
       if(userRegistered !== null){
            
            sessionStorage.setItem("orderClient", JSON.stringify(formsValues))
            navigate("/checkform/confirmation")
       }else{
            alert("Registrate apretando el boton mi cuenta")
        }
    }

  return (
    <>
      <form className="flex flex-col gap-4 xl:ml-12" onSubmit={handleConfirmationUserOrder}>
      <BreadcrumbSetting/>
        <div className="mt-2">
          <TextInput
            id="region"
            type="text"
            name="region"
            placeholder="Región"
            required={true}
            shadow={true}
            value = {formsValues.region}
            onChange={handleChangeInformation}
          />
        </div>

        <div className="container grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-6 gap-4 mt-2">
          <TextInput
            placeholder="Nombre"
            name="nombre"
            id="name"
            type="text"
            required={true}
            shadow={true}
            value = {formsValues.nombre}
            onChange={handleChangeInformation}
            
          />

          <TextInput
            placeholder="Apellido"
            name="apellido"
            id="surname"
            type="text"
            required={true}
            shadow={true}
            value = {formsValues.apellido}
            onChange={handleChangeInformation}
          />
        </div>
        <div className="mt-2">
          <TextInput
            id="adress"
            placeholder="Direccion (calle y numeración)"
            type="text"
            required={true}
            shadow={true}
            name="direccion"
            value={formsValues.direccion}
            onChange={handleChangeInformation}
          />
        </div>
        <div className="mt-2">
          <TextInput
          name="zona"
            id="zone"
            type="text"
            placeholder="Barrio, departamento, local, etc (Opcional)"
            shadow={true}
            value={formsValues.zona}
            onChange={handleChangeInformation}
          />
        </div>
        <div className="mt-2 grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:gap-6 ">
          <TextInput
            id="codezip"
            type="text"
            placeholder="Codigo postal"
            required={true}
            shadow={true}
            value={formsValues.codigoPostal}
            name="codigoPostal"
            onChange={handleChangeInformation}
          />
          <TextInput
            id="location"
            type="text"
            placeholder="Localidad"
            required={true}
            shadow={true}
            value={formsValues.localidad}
            name="localidad"
            onChange={handleChangeInformation}
          />
          <div id="selectProvince">
            <Select id="province" required={true}  onChange={handleChangeInformation} value={formsValues.provincia} name="provincia">
              <option disabled selected>
                Provincia
              </option>
              {Provinces.map((item) => {
                return (
                  <>
                    <option>{item.provicia}</option>
                  </>
                );
              })}
            </Select>
          </div>
        </div>
        <div className="mt-2">
          <TextInput
            id="phone"
            type="number"
            placeholder="Teléfono"
            required={true}
            shadow={true}
            value={formsValues.telefono}
            name="telefono"
            onChange={handleChangeInformation}
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            Guardar mi información y consultar más rápidamente la proxima vez
          </Label>
        </div>
        <div className="flex justify-center mt-6">
          <Button type="submit"  className="pr-4 pl-4 bg-[#37cbfa] hover:bg-[#269cc0]" >
            Continuar
          </Button>
        </div>
      </form>
      <div className="mt-8">
        <Link to="/cart" className="text-sm flex items-center">
          {" "}
          <img src={iconBack} className="w-8"></img> Volver al carrito de
          compras
        </Link>
      </div>
    </>
  );
};

export default UserInformation;
