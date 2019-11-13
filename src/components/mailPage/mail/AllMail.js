import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleMail from "./SingleMail";

const AllMail = ({ currentMessages, type, getMessages }) => {
    const mapMessages = () => {
        return currentMessages.map(message => (
            <SingleMail key={message.sent} {...message} getMessages={getMessages} type={type} />
        ));
    };

    return <ListGroup>{mapMessages()}</ListGroup>;
};

export default AllMail;
