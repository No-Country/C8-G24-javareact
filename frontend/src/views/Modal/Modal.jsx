import React from 'react'
import { Modal , Button } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const ModalAuth = ({props}) => {
  return (
    <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Por registrate o ingresa como usuario
        </h3>
        <div className="flex justify-center gap-4">
          <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
            Entendido
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
  )
}

export default ModalAuth