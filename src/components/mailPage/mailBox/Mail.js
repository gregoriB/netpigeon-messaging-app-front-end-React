import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { ListGroup, Button } from "react-bootstrap";
import Modal from "./Modal";
import MailBody from "./MailBody";
import { fetchFromServer, buildFetchOptions } from "../../../helpers/functions";

const Mail = ({ id, title, retrieveMessages, type }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const mailDetails = useRef();

    // update props for message modal and open it
    const handleResult = result => {
        mailDetails.current = { ...result };
        setIsModalOpen(true);
    };

    //depending on which button is pressed, either fetch or delete message
    const handleServerRequest = async e => {
        const { method } = e.target.dataset;
        const route = `messages/${id}/`;
        const options = buildFetchOptions(method);
        const result = await fetchFromServer(route, options);
        retrieveMessages();
        return result;
    };

    return (
        <ListGroup.Item className="d-flex  align-items-center">
            <button
                data-method="GET"
                className="message"
                onClick={async e => {
                    const result = await handleServerRequest(e);
                    result.id && handleResult(result);
                }}
            >
                {title}
            </button>
            <Modal header="" show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                <MailBody {...mailDetails.current} type={type} />
            </Modal>
            <Button
                data-method="DELETE"
                onClick={e => handleServerRequest(e)}
                title="Click to delete this email"
                variant="outline-danger"
                aria-label="Delete"
            >
                X
            </Button>
        </ListGroup.Item>
    );
};

Mail.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    retrieveMessages: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

export default Mail;
