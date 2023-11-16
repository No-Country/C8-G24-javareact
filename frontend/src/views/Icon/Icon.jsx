import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BsFillCartXFill } from "react-icons/bs";
import { TbLocationOff } from "react-icons/tb";

const Icon = ({ type }) => {
  switch (type) {
    case "cart":
      return <BsFillCartXFill className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />;
    case "register":
      return <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />;
    case "location":
      return <TbLocationOff className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />;
    default:
      return null;
  }
};

export default Icon