import { TextInput, Button } from "flowbite-react";
import { useContext, useState } from "react";
import LocationContext from "../Context/LocationContext";
import { Link } from "react-router-dom";

//logueo de usuario firebase
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import TitleItemDropdown from "../TitleItemDropdown/TitleItemDropdown";
import { Menu } from "@headlessui/react";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import TitlesDropdownsSectionContainer from "../TitlesDropdownsSectionContainer/TitlesDropdownsSectionContainer";

const UserLogged = ({
  registerUser,
  setRegisterUser,
  log,
  setLog,
  userMail,
  userName,
  cart
}) => {
  const auth = getAuth();

  const { setDisabled, setProductosFavoritos, holas } =
    useContext(LocationContext);

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
        console.log(error, errorMessage);
      });
  }

  const handleChange = (e) => {
    setLogValue({ ...logValue, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setProductosFavoritos([]);
    handleDisabled();
    signOut(auth);
  };

  const titleDropdown = [
    { id: 1, name: userName, style: "py-0" },
    { id: 2, name: userMail, style: "py-0 font-medium" }
  ];

  const linksPages = [
    { id: 1, page: "Datos del usuario", link: "/user" },
    { id: 2, page: "Favoritos", link: "/Favourites" },
    { id: 3, page: "Pedidos", link: "/orders" },
    { id: 4, page: "Carrito", link: "/cart" }
  ];

  if (log) {
    return (
      <>
        <DropdownContainer boxStyles={"right-0 divide-y-0"}>
          <TitlesDropdownsSectionContainer title={"Conectarme a mi cuenta"} subtitle={"Ingresa tu e-mail y tu contraseña"}/>
          
          <form
            className="flex flex-col gap-4 mx-4 pb-2"
            onSubmit={onHandleLogSubmit}
          >
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
        </DropdownContainer>
      </>
    );
  } else {
    return (
      <DropdownContainer boxStyles={"right-0 divide-y"}>
        <div className="py-3">
          {titleDropdown.map((item) => {
            return (
              <TitleItemDropdown
                key={item.id}
                padd={item.style}
                paddContainer={"py-0"}
                title={item.name}
              />
            );
          })}
        </div>
        <div className="px-1 py-1">
          {linksPages.map((item) => {
            return (
              <Menu.Item as={"div"} key={item.id}>
                <Link
                  to={item.link}
                  className="hover:bg-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                >
                  {item.page}
                </Link>
              </Menu.Item>
            );
          })}
        </div>
        <div className="px-1 py-1">
          <Menu.Item
            as={"div"}
            onClick={handleClose}
            className="hover:bg-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer"
          >
            Cerrar sesión
          </Menu.Item>
        </div>
      </DropdownContainer>
    );
  }
};

export default UserLogged;
