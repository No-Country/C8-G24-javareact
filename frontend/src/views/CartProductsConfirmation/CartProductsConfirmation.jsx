const CartProductsConfirmation = ({ cart }) => {
 
  return (
  <div>
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {cart.map((products) => {
        return (
          <li className="py-3 sm:py-4" key={products.idItem}>
            <div className="shrink-0 flex justify-between">
              <img
                className="w-1/6 h-1/6 rounded"
                src={products.img}
                alt="Neil image"
              />
              <div className="w-28 sm:w-64 md:w-6/12 2xl:w-64">
                <p className="text-2xs sm:text-sm font-medium text-gray-900 dark:text-white">
                  {products.product}
                </p>
                <p className="text-2xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {`${products.precio} + 500 de envío en ${products.negocio}`}
                </p>
              </div>
              <div className="flex flex-col text-2xs sm:text-sm items-end">
                <p className="mb-4">
                Cantidad: <strong>{products.cantidad}</strong>{" "}
                </p>
                <p className="font-bold">
                  $ {products.precio * products.cantidad}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
    <div className="mt-8 mb-3 flex justify-between font-bold">
      <p>Total:</p>
      <p>$ {cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}</p>
    </div>
    </div>
    
  );
};

export default CartProductsConfirmation;
