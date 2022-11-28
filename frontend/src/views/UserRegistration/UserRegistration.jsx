import { Dropdown } from "flowbite-react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useState } from "react";

const UserRegistration = ({registerUser , setRegisterUser}) => {

     //Hook state of objects to fill through inputs and send them to back
    const [formValue, setFormValue] = useState({
        name: '',
        surname: '',
        mail: '',
        password: '',
    })

    //Inputs
    const formsContact = [
        {"placeholder":"Nombre", "type":"text", "id":"name" , name : "name", value: formValue.name },
        {"placeholder" : "Apellido" , "type" : "text", "id":"surname" , name: "surname", value: formValue.surname },
        {"placeholder":"Mail", "type":"email", "id":"email1", name: "mail", value: formValue.mail },
        {"placeholder" : "Contraseña", "type": "password", "id":"password1", name: "password", value: formValue.password },
    ]
    

    return(
        <>
        <Dropdown.Header>
            <span className="block text-sm">Crear mi cuenta</span>
            <span className="block text-sm font-medium truncate">
              Por favor complete la información a continuación:
            </span>
          </Dropdown.Header>
          <form className="flex flex-col gap-4 mx-4">
            {
                formsContact.map((userForm) =>{
                    return(
                        <div key={userForm.id}>
                        <TextInput
                            placeholder= {userForm.placeholder}
                            type={userForm.type}
                            name={userForm.name}
                            value={userForm.value}
                            id={userForm.id}
                            required={true}
                        />
                      </div>
                       
                    )
                })

            }
           
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" color="dark" className="mb-2">
              CREAR MI CUENTA
            </Button>
            <span className="block text-sm">¿Ya eres cliente? <button onClick={()=>{setRegisterUser(true)}}>Inicia tu cuenta</button></span>
          </form>
        </>
    )
}


export default UserRegistration