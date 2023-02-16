import { Card } from "flowbite-react";
import Button from "./Button1";
import { useContext, useState } from "react";
import CartContext from "../CartContext";
import CardContext from "../Context/SearchContext/CardContext";

function Product() {
  
  const { chosenCard } = useContext(CardContext);  
  const [product, setProduct] = useState(chosenCard);
  const [cantidad, setCantidad] = useState(1);
  const { cart, setCart } = useContext(CartContext);
   
  const addToCart = () => {
    /*ESTO HAY QUE EMPAREJARLO*/
      

     if (product.cantidad === 1 ) {
      product.cantidad = cantidad;
      setCart([...cart, product]);
    }
 
    for (let i = 0; i < cart.length; i++) {
     
      if (cart[i].id === product.id && (cart[i].idItem === product.idItem)) {
        product.cantidad = cantidad + product.cantidad;
        setCart([...cart]);
      }        
    }
  };

  const handleChange = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  return (
    <div className="flex justify-around bg-[#F5F5F5] p-5">
      <img src={product.img} alt="" className="w-1/3" />
      <div className="text-center m-5 w-1/3 flex flex-col items-center">
        <header className="bg-[#F8CF32] p-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <h1>Tienda: {chosenCard.negocio}</h1>
        </header>
        <div className="flex flex-col items-center mt-5 w-3/4">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.product}
            </h5>
            <ul>
              <li>{`precio: $${product.precio}`}</li>
              <li>
                stock:{" "}
                <span className="text-[#0E9A2D] font-bold">
                  {`${product.stock} unidades`}
                </span>
              </li>
              <li>
                cantidad:{" "}
                <select className="bg-[#D9D9D9]" onChange={handleChange}>
                  {[...Array(product.stock).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </Card>
          <div className="mt-5">
            <button onClick={() => addToCart()}>
              <Button tittle={"Agregar al carrito"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
