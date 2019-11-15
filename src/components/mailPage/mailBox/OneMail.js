import React, { useState, useRef } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Modal from "./Modal";
import MailBody from "./MailBody";
import { fetchFromServer, getCookieToken } from "../../../helpers/functions";

const Mail = ({ id, title, getMessages, type }) => {
    const [modalShow, setModalShow] = useState(false);
    const mailDetails = useRef();

    const handleResult = result => {
        mailDetails.current = { ...result };
        setModalShow(true);
    };

    const handleServerRequest = async e => {
        const { method } = e.target.dataset;
        const route = `messages/${id}/`;
        const token = getCookieToken();
        const options = {
            method,
            headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" }
        };
        const result = await fetchFromServer(route, options);
        getMessages();
        return result;
    };

    return (
        <ListGroup.Item className="d-flex  align-items-center">
            <button
                data-method="GET"
                className="message"
                onClick={async e => {
                    const result = await handleServerRequest(e);
                    if (result.id) {
                        handleResult(result);
                    }
                }}
            >
                {title}
            </button>
            <Modal header="" show={modalShow} onHide={() => setModalShow(false)}>
                <MailBody {...mailDetails.current} type={type} />
            </Modal>
            <Button
                data-method="DELETE"
                onClick={e => handleServerRequest(e)}
                title="Click to delete this email"
                variant="outline-danger"
            >
                X
            </Button>
        </ListGroup.Item>
    );
};

export default Mail;
