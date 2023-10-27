import React from "react";
import { Table, Avatar } from "flowbite-react";

const ProfileTable = ({
  title,
  subtitle,
  firstData,
  secondData,
  thirdCol,
  flag
}) => {
  return (
    <Table hoverable className="h-28">
      <Table.Head>
        <Table.HeadCell>{title}</Table.HeadCell>
        <Table.HeadCell>{subtitle}</Table.HeadCell>
        {thirdCol && <Table.HeadCell>Pais</Table.HeadCell>}
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
            {firstData}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
            {secondData}
          </Table.Cell>
          {thirdCol && (
            <Table.HeadCell className="flex justify-left">
              <Avatar alt="User settings" img={flag} rounded={true} />
            </Table.HeadCell>
          )}
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ProfileTable;
