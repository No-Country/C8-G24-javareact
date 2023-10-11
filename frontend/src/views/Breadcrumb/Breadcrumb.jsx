import React from "react";
import { Breadcrumb } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const BreadcrumbSetting = () => {
  const [path, setPath] = useState();
  let location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, []);

  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item>
        {" "}
        <Link to={"/cart"}>
          <p className={path === "/cart" ? "text-lg" : ""}>Carrito</p>
        </Link>{" "}
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={"/checkform"}>
          <p className={path === "/checkform" ? "text-lg" : ""}>Información</p>{" "}
        </Link>{" "}
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={"/checkform/confirmation"}>
          <p className={path === "/checkform/confirmation" ? "text-lg" : ""}>
            Envios
          </p>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={"/checkform/payments"}>
          <p className={path === "/checkform/payments" ? "text-lg" : ""}>
            Caja
          </p>
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
