import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Modal from "./Modal";
import MailBody from "./MailBody";
import { fetchFromServer, getCookieToken } from "../../../helpers/functions";

const Mail = props => {
    const [modalShow, setModalShow] = useState(false);
    const handleDeleteMail = async () => {
        const route = `messages/${props.id}/`;
        const token = getCookieToken();
        const options = { method: "DELETE", headers: { Authorization: `Token ${token}` } };
        const fetched = await fetchFromServer(route, options);
        props.getMessages();
    };

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <div onClick={() => setModalShow(true)}>{props.title}</div>
            <Modal header="" show={modalShow} onHide={() => setModalShow(false)}>
                <MailBody {...props} />
            </Modal>
            <Button
                onClick={handleDeleteMail}
                title="Click to delete this email"
                variant="outline-danger"
            >
                X
            </Button>
        </ListGroup.Item>
    );
};

export default Mail;
