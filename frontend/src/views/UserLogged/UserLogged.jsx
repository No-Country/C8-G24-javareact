import { Dropdown } from "flowbite-react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import LocationContext from "../Context/LocationContext";

const UserLogged = ({ registerUser, setRegisterUser }) => {
  const { setDisabled, setProductosFavoritos , countryChoose } = useContext(LocationContext);

  function handleDisabled() {
    setDisabled(false);
  }

  function handleUpabled() {
    setDisabled(true);
  }

  const [log, setLog] = useState(true);

  const [userMail, setUserMail] = useState();
  const [userName, setUserName] = useState();
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

  const UserLogged = localStorage.getItem("users");

  const userLoad = JSON.parse(UserLogged);

  useEffect(() => {
    if (userLoad !== null) {
      for (let i = 0; i < userLoad.length; i++) {
        if (localStorage.getItem("usersLog")) {
          setUserMail(userLoad[i].mail);
          setUserName(userLoad[i].name);
          countryChoose(userLoad[i].pais)
          setLog(false);
        }
      }
    }
  }, []);

  function onHandleLogSubmit(e) {
    e.preventDefault();
    handleUpabled();
    
    for (let i = 0; i < userLoad.length; i++) {
      if (
        userLoad[i].mail === logValue.mail &&
        userLoad[i].password === logValue.password
      ) {
        console.log("usuario logueado");
        setUserMail(userLoad[i].mail);
        setUserName(userLoad[i].name);
        countryChoose(userLoad[i].pais)
        let userLogged = [];
        userLogged = [...userLogged, userLoad[i]];

        let usersJSON = JSON.stringify(userLogged);
        localStorage.setItem("usersLog", usersJSON);

        setLog(false);
      }
    }
  }

  const handleChange = (e) => {
    setLogValue({ ...logValue, [e.target.name]: e.target.value });
    // console.log(logValue)
  };

  const handleClose = () => {
    localStorage.removeItem("usersLog");
    setProductosFavoritos([]);
    setLog(true);
    handleDisabled();
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
              <div>
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

          {/* <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div> */}
          <Button type="submit" color="dark">
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
          {/* <span className="block text-sm font-medium truncate">
            ¿Olvidaste tu contraseña? <span>Recuperar contraseña</span>
          </span> */}
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
          <Dropdown.Item>Ir al carrito</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleClose}>Cerrar sesión</Dropdown.Item>
        </div>
      </>
    );
  }
};

export default UserLogged;
