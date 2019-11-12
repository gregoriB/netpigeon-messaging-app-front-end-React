import React from "react";
import { Modal } from "react-bootstrap";

const EmailModal = ({ show, index, onHide }) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onClick={onHide}
      show={show}
    >
      <Modal.Body style={{ textAlign: "center", padding: "2rem" }}>
        {index}
      </Modal.Body>
    </Modal>
  );
};

export default EmailModal;
