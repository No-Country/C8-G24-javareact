import { Card, Dropdown, Avatar } from "flowbite-react";
import ModalAuth from "../../Modal/Modal";
import { useContext, useEffect, useState } from "react";
import CardContext from "../../Context/CardContext";
import LocationContext from "../../Context/LocationContext";
import { hearth, hearthEmpty } from "../../../assets/helpers/Images";
import { doc, getFirestore, updateDoc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import DropdownItemCommerce from "../../DropdownItemCommerce/DropdownItemCommerce";

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

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  //context --cardcontext
  const { handleCardFunctionX } = useContext(CardContext);
  const { disabled, setDisabled, move, holas, authUser } =
    useContext(LocationContext);

  //Obbtiene datos de un doc de la colleccion
  const getUsersData = async () => {
    const db = getFirestore();
    const docRef = doc(db, "users", authUser.uid);
    const docSnap = await getDoc(docRef);

    const docDataFav = docSnap.data().productsLike;
    setLike(false);
    if (docDataFav) {
      for (let i = 0; i < docDataFav.length; i++) {
        if (id === docDataFav[i].id) {
          //resetea el like en match
          setLike(true);
        }
      }
    }
  };

  const updateData = (data) => {
    const db = getFirestore();
    const orderDoc = doc(db, "users", authUser.uid);
    updateDoc(orderDoc, { productsLike: data });
  };

  useEffect(() => {
    if (authUser !== null) {
      setDisabled(true);
      getUsersData();
    } else {
      setDisabled(false);
    }
    if (!disabled) {
      setLike(false);
    }
  }, [authUser, match]);

  const handleLike = async () => {
    setLike(!like);

    if (!disabled) {
      return props.setOpenModal("pop-up");
    }

    const nuevoFavorito = { id, description, image, price };

    const db = getFirestore();
    const docRef = doc(db, "users", authUser.uid);
    const docSnap = await getDoc(docRef);

    const productLikeUser = docSnap.data();

    if (productLikeUser.productsLike === undefined) {
      const nuevosProductosFavoritos = [...productosFavoritos];

      if (!like) {
        //     // Agrega el producto a la lista de productos favoritos
        nuevosProductosFavoritos.push(nuevoFavorito);
        toast.success("Producto agregado a favoritos", { icon: <FaHeart /> });
      } else {
        //     // Elimina el producto de la lista de productos favoritos
        const index = nuevosProductosFavoritos.findIndex(
          (producto) => producto.id === id
        );
        if (index !== -1) {
          nuevosProductosFavoritos.splice(index, 1);
          toast.error("Producto eliminado de favoritos", {
            icon: <FaRegHeart />
          });
        }
      }

      setProductosFavoritos(nuevosProductosFavoritos);

      updateData(nuevosProductosFavoritos);
    } else if (productLikeUser.productsLike !== undefined) {
      setLike(!like);
      const nameData = productLikeUser.productsLike;

      if (!like) {
        toast.success("Producto agregado a favoritos", { icon: <FaHeart /> });
        nameData.push(nuevoFavorito);
      } else {
        // Elimina el producto de la lista de productos favoritos
        toast.error("Producto eliminado de favoritos", {
          icon: <FaRegHeart />
        });
        const index = nameData.findIndex((producto) => producto.id === id);
        if (index !== -1) {
          nameData.splice(index, 1);
        }
      }

      setProductosFavoritos(nameData);

      updateData(nameData);
    }
    holas(authUser.uid);
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
          <h5 className="text-xl max-sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {description}
          </h5>
          <h4 className="text-xl max-sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            $ {price}
          </h4>
          <p className="max-sm:text-sm">
            Envio ${shipments} en {shopping}{" "}
          </p>
        </Card>
      </div>
      <div className="m-4 w-full">
        <DropdownItemCommerce
          comercios={comercios}
          handleCardFunctionX={handleCardFunctionX}
          description={description}
          image={image}
          shopping={shopping}
          shipments={shipments}
          price={price}
          id={id}
        />
      </div>
      <ModalAuth
        props={props}
        setOpenModal={setOpenModal}
        openModal={openModal}
        title={"Por registrate o ingresa como usuario"}
        buttonText={"Entendido"}
        modaCloseFunction={() => props.setOpenModal(undefined)}
        icon={"register"}
      />
    </div>
  );
};

export default Card1;
