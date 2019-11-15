import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const MailBody = ({ title, body, sent, sender, receiver, type }) => {
    return (
        <>
            <div>
                <p>
                    <label className="message-field">Sent on:</label>
                    {new Date(sent).toLocaleString()}
                </p>
                <p>
                    <label className="message-field">{type === "sent" ? "To:" : "From:"}</label>
                    {type === "sent" ? receiver : sender}
                </p>
                <p>
                    <label className="message-field">Title:</label>
                    {title}
                </p>
                <p aria-label="Body">{body}</p>
            </div>
            <Modal.Footer />
        </>
    );
};

MailBody.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    sent: PropTypes.string,
    sender: PropTypes.string,
    receiver: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default MailBody;
