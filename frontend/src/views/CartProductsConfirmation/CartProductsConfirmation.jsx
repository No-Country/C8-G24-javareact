import { Table , Avatar  } from "flowbite-react";
import deleteIcon from "../../assets/vectors/delete.png";
const CartProductsConfirmation = ({ cart ,  setCart , handleDelete  }) => {
 
  return (
    <Table>
    <Table.Head>
      <Table.HeadCell className="max-sm:text-center">
        Producto
      </Table.HeadCell>
      <Table.HeadCell className="text-center max-sm:hidden">
        Cantidad
      </Table.HeadCell>
      <Table.HeadCell className="text-center max-sm:hidden">
        Precio
      </Table.HeadCell>
      <Table.HeadCell className="max-sm:hidden">
        <span className="sr-only">Delete</span>
      </Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      {cart.map((item) => {
        return (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 max-sm:flex max-sm:flex-col max-sm:items-center">
            <Table.Cell className="font-medium  text-gray-900 dark:text-white flex flex-row items-center xl:py-6 max-sm:flex-col max-sm:text-center max-2xl:pr-0 max-2xl:pl-3">
              <Avatar img={item.img} className="max-sm:mb-4 w-20"></Avatar>
              {item.product}
            </Table.Cell>
            <Table.Cell className="text-center max-lg:p-0 max-2xl:p-0">
              <p className="sm:hidden">Cantidad</p> {item.cantidad}
            </Table.Cell>
            <Table.Cell className="text-center max-lg:p-0 max-2xl:p-0">
              <p className="sm:hidden">Precio</p> $ {item.precio} + envio
            </Table.Cell>
            <Table.Cell>
              <Avatar
                className="max-lg:w-10 w-10 rounded-md hover:bg-slate-100 cursor-pointer"
                img={deleteIcon}
                rounded={true}
                onClick={() => handleDelete(item)}
              />
            </Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
  );
};

export default CartProductsConfirmation;
