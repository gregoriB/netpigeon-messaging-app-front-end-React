import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const MailModal = ({ header, show, onHide, children }) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};

MailModal.propTypes = {
    header: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default MailModal;
