import React, { useContext } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { SignUpPage } from "pages/SignUp";
import { Context } from "context/Context";
export const InformationModal = () => {
  const { modal, setModal } = useContext(Context);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar Información</ModalHeader>
        <ModalBody>
         <SignUpPage edit={true} />
        </ModalBody>
      </Modal>
    </div>
  );
};
