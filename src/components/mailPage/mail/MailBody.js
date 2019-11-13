import React from "react";
import { Modal } from "react-bootstrap";

const MailBody = ({ title, body, sent, sender }) => {
    return (
        <>
            <div>
                <p>Date: {new Date(sent).toISOString().substring(0, 10)}</p>
                <p>From: {sender}</p>
                <p>{title}</p>
                <p>{body}</p>
            </div>
            <Modal.Footer />
        </>
    );
};

export default MailBody;
