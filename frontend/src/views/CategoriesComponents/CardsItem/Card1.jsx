import { Card, Dropdown, Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CardContext from "../../Context/CardContext";
import LocationContext from "../../Context/LocationContext";

import hearth from "../../../assets/vectors/hearth.svg";
import hearthEmpty from "../../../assets/vectors/hearth-nofill.svg";

const Card1 = ({
  description,
  image,
  comercios,
  shopping,
  shipments,
  price,
  id,
  productosFavoritos,
  setProductosFavoritos,
  match
}) => {
  // const navigate = useNavigate();

  const [like, setLike] = useState(false);

  //context --cardcontext
  const { handleCardFunctionX } = useContext(CardContext);
  const { disabled, setDisabled, move , holas } = useContext(LocationContext);

  useEffect(() => {
    holas()
    // Actualiza el título del documento usando la API del navegador
    const userSaved = JSON.parse(localStorage.getItem("usersLog"));

    if (userSaved !== null) {
      setDisabled(true);
      setLike(false);
      const everyNumber = userSaved[0].productsLike;

      if (everyNumber !== undefined) {
        for (let i = 0; i < everyNumber.length; i++) {
          const element = everyNumber[i].id;

          if (id === element) {
            setLike(true);
          }
        }
      }
    } else {
      setDisabled(false);
    }
    if (!disabled) {
      setLike(false);
    }
  }, [disabled, move, like, id, match]);


  const handleLike = () => {
    
    setLike(!like);

    if (!disabled) {
      return alert("Regístrate o inicia tu sesión para poder agregar favoritos");
  }
  
    const nuevoFavorito = { id, description, image, price };

    const likeSetUser = localStorage.getItem("usersLog");
    const userLogLike = JSON.parse(likeSetUser);

    //**ESTO ES PARA CUANDO ES LA PRIMERA VEZ QUE SE USA LA CUENTA */

    if (userLogLike[0].productsLike === undefined) {
      
      const nuevosProductosFavoritos = [...productosFavoritos];

      if (!like) {
        // Agrega el producto a la lista de productos favoritos
        nuevosProductosFavoritos.push(nuevoFavorito);
      } else {
        // Elimina el producto de la lista de productos favoritos
        const index = nuevosProductosFavoritos.findIndex(
          (producto) => producto.id === id
        );
        if (index !== -1) {
          nuevosProductosFavoritos.splice(index, 1);
        }
      }

      setProductosFavoritos(nuevosProductosFavoritos);

      const likeUser = [
        { ...userLogLike[0], productsLike: nuevosProductosFavoritos }
      ];

      localStorage.setItem("usersLog", JSON.stringify(likeUser));
    } else if (userLogLike[0].productsLike !== undefined) {
      // setLike(!like);
      const nameData = userLogLike[0].productsLike;

      if (!like) {
        nameData.push(nuevoFavorito);
      } else {
        // Elimina el producto de la lista de productos favoritos
        const index = nameData.findIndex((producto) => producto.id === id);
        if (index !== -1) {
          nameData.splice(index, 1);
        }
      }

      setProductosFavoritos(nameData);

      const likeUser = [{ ...userLogLike[0], productsLike: nameData }];

      localStorage.setItem("usersLog", JSON.stringify(likeUser));
    }
    const loadDataLS = JSON.parse(localStorage.getItem("users"));
    const loadLogDataLS = JSON.parse(localStorage.getItem("usersLog"));

    for (let i = 0; i < loadDataLS.length; i++) {
      const element = loadDataLS[i].mail;

      if (element === loadLogDataLS[0].mail) {
        const actualizeUser = loadDataLS[i];

        const productsLike = loadLogDataLS[0].productsLike;

        const userSet = { ...actualizeUser, productsLike };

        loadDataLS[i] = userSet;

        localStorage.setItem("users", JSON.stringify(loadDataLS));
      }
    }

    
    

      
  };

  return (
    <div className="flex flex-col items-center" key={id}>
      <div className="max-w-sm relative overflow-hidden">
        <Card imgSrc={image}>
          <button
            onClick={handleLike}
            className="absolute top-4 right-4 bg-gray-50 rounded-full p-3 shadow-md"
          >
            {disabled ? (
              <Avatar
                alt="User settings"
                img={!like ? hearthEmpty : hearth}
                rounded={true}
              />
            ) : (
              <Avatar alt="User settings" img={hearthEmpty} rounded={true} />
            )}
          </button>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {description}
          </h5>
          <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            $ {price}
          </h4>
          <p>
            Envio ${shipments} en {shopping}{" "}
          </p>
        </Card>
      </div>
      <div className="m-4">
        <Dropdown
          label={`Compáralo en ${comercios.length} tiendas`}
          className="padding-list"
          placement="bottom"
          style={{ backgroundColor: "#37cbfa" }}
        >
          {comercios.map((items) => {
            return (
              <Dropdown.Item
                className="border-y w-96 flex justify-between"
                onClick={() => {
                  handleCardFunctionX(
                    items,
                    description,
                    image,
                    comercios,
                    shopping,
                    shipments,
                    price,
                    id
                  );
                }}
              >
                <div>
                  <p>{items.negocio}</p>
                </div>
                <div>
                  <p>$ {items.precio}</p>
                  <p>$ {items.envio}</p>
                </div>
              </Dropdown.Item>
            );
          })}
        </Dropdown>
      </div>
    </div>
  );
};

export default Card1;
