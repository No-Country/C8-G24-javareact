import React from "react";
import { Button } from "flowbite-react";

const ButtonsPageNotProducts = ({title , btnText, click , color}) => {
  return (
    <div className="my-72 flex flex-col items-center gap-8">
      <p className="text-3xl">{title}</p>
      <Button color={color} onClick={click}>
       {btnText}
      </Button>
    </div>
  );
};

export default ButtonsPageNotProducts;
