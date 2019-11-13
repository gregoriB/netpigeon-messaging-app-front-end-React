import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Modal from "./Modal";
import FullEmail from "./FullEmail";

const Email = ({ index }) => {
    const [modalShow, setModalShow] = useState(false);
    const handleDeleteEmail = () => {
        console.log(index + " deleted");
    };
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <div onClick={() => setModalShow(true)}>Email {index}</div>
            <Modal header="" show={modalShow} onHide={() => setModalShow(false)}>
                <FullEmail index={index} />
            </Modal>
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
