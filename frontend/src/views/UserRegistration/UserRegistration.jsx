import { Dropdown } from "flowbite-react";
import { TextInput, Button } from "flowbite-react";
import { useState, useEffect, useContext } from "react";
import LocationContext from "../Context/LocationContext";

//PARA AUTH
import { getAuth, createUserWithEmailAndPassword , signOut , sendEmailVerification } from "firebase/auth";
// PARA GUARDAR
import { addDoc, collection , getDocs, setDoc ,  doc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";


const UserRegistration = ({ registerUser, setRegisterUser , log , setLog }) => {
  const { countryState } = useContext(LocationContext);
  // useEffect(() => {
  //   if (localStorage.getItem("users") !== null) {
  //     setOrder(JSON.parse(localStorage.getItem("users")));
  //   }
  // }, []);

  //Hook state of objects to fill through inputs and send them to back
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    mail: "",
    password: "",
    pais: countryState
  });

  //Inputs
  const formsContact = [
    {
      placeholder: "Nombre",
      type: "text",
      id: "name",
      name: "name",
      value: formValue.name
    },
    {
      placeholder: "Apellido",
      type: "text",
      id: "surname",
      name: "surname",
      value: formValue.surname
    },
    {
      placeholder: "Mail",
      type: "email",
      id: "email1",
      name: "mail",
      value: formValue.mail
    },
    {
      placeholder: "Contraseña",
      type: "password",
      id: "password1",
      name: "password",
      value: formValue.password
    }
  ];

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };


/// GUARDADO DE USUARIO CON FIREBASE --- HABRIA QUE VER COMPROBACION 
  const saveData = async(newOrder) =>{
  //  console.log(newOrder.id) 
    // const orderFirebase = collection(db, 'users')
    //  const orderDoc = await setDoc(orderFirebase, newOrder , {id:22})

     await setDoc(doc(db, "users", newOrder.id), newOrder);
     
   }  


  const [order, setOrder] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrder((order) => [...order, formValue]);
    const orderProduct = [...order, formValue];

    
    /// AUTH CON FIREBASE  
   const auth = getAuth();
    createUserWithEmailAndPassword(auth, formValue.mail,formValue.password)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    const uid = auth.currentUser.uid;


      /// GUARDADO DE USUARIO CON FIREBASE --- HABRIA QUE VER COMPROBACION 
      saveData({...formValue , id : uid})

      //envia mail de verificacion firebase
      sendEmailVerification(auth.currentUser)

      setRegisterUser(true);

      console.log("creando cuenta")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage)

    console.log(errorCode)
  
  }); };


  return (
    <>
      <Dropdown.Header>
        <span className="block text-sm">Crear mi cuenta</span>
        <span className="block text-sm font-medium truncate">
          Por favor complete la información a continuación:
        </span>
      </Dropdown.Header>
      <form className="flex flex-col gap-4 mx-4" onSubmit={handleSubmit}>
        {formsContact.map((userForm) => {
          return (
            <div key={userForm.id}>
              <TextInput
                placeholder={userForm.placeholder}
                type={userForm.type}
                name={userForm.name}
                value={userForm.value}
                id={userForm.id}
                required={true}
                autoComplete="current"
                onChange={handleChange}
              />
            </div>
          );
        })}
        <Button type="submit" color="dark" className="mb-2 bg-black">
          CREAR MI CUENTA
        </Button>
        <span className="block text-sm">
          ¿Ya eres cliente?{" "}
          <button
            type="button"
            onClick={() => {
              setRegisterUser(true);
            }}
          >
            Inicia tu cuenta
          </button>
        </span>
      </form>
    </>
  );
};

export default UserRegistration;
