import React from "react";
import { Table, Avatar } from "flowbite-react";
// import { TabItem } from "flowbite-react/lib/esm/components/Tab/TabItem";

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
  fourData,
  displayResponsive,
  responsiveRowTable
}) => {
  return (
    <Table hoverable>
      <Table.Head className={displayResponsive} >
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
        <Table.Row className={`bg-white dark:border-gray-700 dark:bg-gray-800 ${responsiveRowTable}`}>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-2/6">
            {firstData}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white  w-2/6">
            {secondData}
          </Table.Cell>
          {thirdCol && (
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center justify-start" >
              {flag ? (
                  <Avatar
                    alt="User settings"
                    img={flag}
                    rounded={true}
                    className="my-1 h-3"
                  />
              ) : (
                <div className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-left p-0  w-2/6">
                  {textThirdCol}
                </div>
              )}
            </Table.Cell>
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
