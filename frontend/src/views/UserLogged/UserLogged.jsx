import { Dropdown } from "flowbite-react";
import {  TextInput, Button } from "flowbite-react";
import { useContext, useState } from "react";
import LocationContext from "../Context/LocationContext";
import { Link } from "react-router-dom";

//logueo de usuario firebase
import { getAuth, signInWithEmailAndPassword , signOut } from "firebase/auth";


const UserLogged = ({ registerUser, setRegisterUser , log , setLog , userMail , userName , cart }) => {
  const auth = getAuth();
  
 const { setDisabled, setProductosFavoritos , holas } = useContext(LocationContext);
  
  function handleDisabled() {
    setDisabled(false);
  }

  function handleUpabled() {
    setDisabled(true);
  }

  const [logValue, setLogValue] = useState({
    mail: "",
    password: ""
  });

  const logUsers = [
    {
      placeholder: "Mail",
      type: "email",
      id: "email1",
      name: "mail",
      value: logValue.mail
    },
    {
      placeholder: "Contraseña",
      type: "password",
      id: "password1",
      name: "password",
      value: logValue.password
    }
  ];


  function onHandleLogSubmit(e) {
    e.preventDefault();
    handleUpabled();
    
  signInWithEmailAndPassword(auth, logValue.mail, logValue.password)
      .then((userCredential) => {
               // Signed in 
        const user = userCredential.user;
   
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error , errorMessage)
      });

  }

  const handleChange = (e) => {
    setLogValue({ ...logValue, [e.target.name]: e.target.value });
    // console.log(logValue)
  };

  const handleClose = () => {
    setProductosFavoritos([]);
    handleDisabled();
    signOut(auth)
  };

  if (log) {
    return (
      <>
        <Dropdown.Header>
          <span className="block text-sm">Conectarme a mi cuenta</span>
          <span className="block text-sm font-medium truncate">
            Ingresa tu e-mail y tu contraseña
          </span>
        </Dropdown.Header>
        <form className="flex flex-col gap-4 mx-4" onSubmit={onHandleLogSubmit}>
          {logUsers.map((item) => {
            return (
              <div key={item.id}>
                <TextInput
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  value={item.value}
                  name={item.name}
                  required={true}
                  autoComplete="current"
                  onChange={handleChange}
                />
              </div>
            );
          })}
          <Button type="submit" color="dark" className="bg-black">
            ENTRAR
          </Button>
          <span className="block text-sm">
            ¿Nuevo cliente?{" "}
            <button
              type="button"
              onClick={() => {
                setRegisterUser(false);
              }}
            >
              Crear cuenta
            </button>
          </span>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Dropdown.Header>
            <span className="block text-sm">{userName}</span>
            <span className="block text-sm font-medium truncate">
              {userMail}
            </span>
          </Dropdown.Header>
          <Dropdown.Item><Link to={"/user"}>Datos del usuario</Link></Dropdown.Item>
          <Dropdown.Item><Link to={"/favourites"}>Favoritos</Link></Dropdown.Item>
          <Dropdown.Item><Link to={"/orders"}>Pedidos</Link></Dropdown.Item>
          <Dropdown.Item> <Link to={"/cart"}>Carrito</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleClose}>Cerrar sesión</Dropdown.Item>
        </div>
      </>
    );
  }
};

export default UserLogged;
