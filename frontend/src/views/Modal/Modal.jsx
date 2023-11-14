import React from "react";
import { Modal, Button } from "flowbite-react";
import Icon from "../Icon/Icon";

const ModalAuth = ({ props, title, modaCloseFunction, buttonText, icon }) => {
  return (
    <Modal
      show={props.openModal === "pop-up"}
      size="md"
      popup
      onClose={modaCloseFunction}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <Icon type={icon}/>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {title}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={modaCloseFunction}>
              {buttonText}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAuth;
