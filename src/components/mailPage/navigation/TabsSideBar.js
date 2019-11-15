import React from "react";
import PropTypes from "prop-types";
import { Col, ListGroup, Button } from "react-bootstrap";
import Modal from "../mailBox/Modal";
import NewMailForm from "../mailBox/NewMailForm";
import MailSelector from "../mailBox/MailSelector";

const TabsSideBar = ({ retrieveMessages, isModalOpen, setIsModalOpen }) => {
    return (
        <Col className="d-flex flex-column email-tabs" sm={2}>
            <ListGroup variant="flush">
                <MailSelector name="" retrieveMessages={retrieveMessages} />
                <MailSelector name="sent" retrieveMessages={retrieveMessages} />
            </ListGroup>
            <Button
                className="btn-custom btn-compose-msg"
                variant="secondary"
                onClick={() => setIsModalOpen(true)}
                aria-label="New message"
            >
                NEW MESSAGE
            </Button>
            <Modal header="Compose new message" show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                <NewMailForm onHide={() => setIsModalOpen(false)} retrieveMessages={retrieveMessages} />
            </Modal>
        </Col>
    );
};

TabsSideBar.propTypes = {
    retrieveMessages: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired
};

export default TabsSideBar;
