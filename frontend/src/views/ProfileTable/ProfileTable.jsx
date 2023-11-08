import React from "react";
import { Table, Avatar } from "flowbite-react";

const ProfileTable = ({
  title,
  subtitle,
  firstData,
  secondData,
  thirdCol,
  flag,
  textThirdCol,
  thirdColTitle,
  fourCol,
  fourTitle,
  fourData
}) => {
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell className="w-2/6">{title}</Table.HeadCell>
        <Table.HeadCell className="w-2/6">{subtitle}</Table.HeadCell>
        {thirdCol && (
          <Table.HeadCell className="w-1/6">{thirdColTitle}</Table.HeadCell>
        )}
        {fourCol && (
          <Table.HeadCell className="w-1/6">{fourTitle}</Table.HeadCell>
        )}
      </Table.Head>

      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-2/6">
            {firstData}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white  w-2/6">
            {secondData}
          </Table.Cell>
          {thirdCol && (
            <div className="flex justify-left items-center">
              {flag ? (
                <Avatar
                  alt="User settings"
                  img={flag}
                  rounded={true}
                  className="mx-6 my-1"
                />
              ) : (
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-left p-0  w-2/6">
                  {textThirdCol}
                </Table.Cell>
              )}
            </div>
          )}
          {fourCol && (
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white  w-2/6">
              {fourData}
            </Table.Cell>
          )}
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ProfileTable;
