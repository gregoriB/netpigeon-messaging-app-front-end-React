import React from "react";
import { ListGroup } from "react-bootstrap";
import EmailModal from "./EmailModal";

const Message = ({ index }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div onClick={() => setModalShow(true)}>Email {index}</div>
      <EmailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        index={index}
      />
      <div style={{ color: "red" }}>x</div>
    </ListGroup.Item>
  );
};

export default Message;
