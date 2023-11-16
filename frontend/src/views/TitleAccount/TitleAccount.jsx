import React from "react";

const TitleAccount = ({ title }) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        {title}
      </h5>
    </div>
  );
};

export default TitleAccount;
