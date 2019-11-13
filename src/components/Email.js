import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import EmailModal from "./EmailModal";
import EmailBody from "./EmailBody";

const Email = ({ index }) => {
  const [modalShow, setModalShow] = useState(false);
  const handleDeleteEmail = () => {
    console.log(index + " deleted");
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div onClick={() => setModalShow(true)}>Email {index}</div>
      <EmailModal header="" show={modalShow} onHide={() => setModalShow(false)}>
        <EmailBody index={index} />
      </EmailModal>
      <Button
        onClick={handleDeleteEmail}
        title="Click to delete this email"
        variant="outline-danger"
      >
        X
      </Button>
    </ListGroup.Item>
  );
};

export default Email;
