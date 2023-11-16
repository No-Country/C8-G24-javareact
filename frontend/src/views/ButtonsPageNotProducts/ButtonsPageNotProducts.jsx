import React from "react";
import { Button } from "flowbite-react";
import Layout from "../Layout/Layout";

const ButtonsPageNotProducts = ({ title, btnText, click, color }) => {
  return (
    <Layout>
      <p className="text-3xl">{title}</p>
      <Button color={color} onClick={click}>
        {btnText}
      </Button>
    </Layout>
  );
};

export default ButtonsPageNotProducts;
