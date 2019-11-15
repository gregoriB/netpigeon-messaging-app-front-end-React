import React from "react";
import { Modal } from "react-bootstrap";

const MailBody = ({ title, body, sent, sender, receiver, id, type }) => {
    const handleToFromLine = () => {
        const preposition = type === "sent" ? "To:" : "From:";
        const subject = type === "sent" ? receiver : sender;
        return (
            <>
                <span className="message-field">{preposition}</span>
                {subject}
            </>
        );
    };
    return (
        <>
            <div>
                {id}
                <p>
                    <span className="message-field">Sent on:</span>
                    {new Date(sent).toISOString().substring(0, 10)}
                </p>
                <p>{handleToFromLine()}</p>
                <p>
                    <span className="message-field">Title:</span>
                    {title}
                </p>
                <p>{body}</p>
            </div>
            <Modal.Footer />
        </>
    );
};

export default MailBody;
