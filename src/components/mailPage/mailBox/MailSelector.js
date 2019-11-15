import React from "react";
import { ListGroup } from "react-bootstrap";

const MailSelector = ({ retrieveMessages, name }) => {
    const handleClick = () => {
        retrieveMessages(name);
    };

    return (
        <ListGroup.Item action href={`#${name || "inbox"}`} onClick={handleClick}>
            {name || "inbox"}
        </ListGroup.Item>
    );
};

export default MailSelector;
