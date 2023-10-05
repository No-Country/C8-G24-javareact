import React from "react";
import { Card, Avatar, Table } from "flowbite-react";
import deleteIcon from "../../assets/vectors/delete.png";

export const CartList = ({ products, handleDelete, setCart }) => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Carrito de compras
        </h5>
      </div>

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
          {products.map((item) => {
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 max-sm:flex max-sm:flex-col max-sm:items-center">
                <Table.Cell className="font-medium text-gray-900 dark:text-white flex flex-row items-center  py-10  max-sm:flex-col max-sm:text-center">
                  <Avatar img={item.img} className="max-sm:mb-4 w-20"></Avatar>
                  {item.product}
                </Table.Cell>
                <Table.Cell className="text-center">
                  <p className="sm:hidden">Cantidad</p> {item.cantidad}
                </Table.Cell>
                <Table.Cell className="text-center">
                  <p className="sm:hidden">Precio</p> $ {item.precio} + envio
                </Table.Cell>
                <Table.Cell>
                  <Avatar
                    className="h-16 max-sm:w-32 max-lg:w-10 rounded-md hover:bg-slate-100 cursor-pointer"
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
    </div>
  );
};
