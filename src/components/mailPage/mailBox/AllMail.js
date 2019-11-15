import React from "react";
import { ListGroup } from "react-bootstrap";
import OneMail from "./OneMail";

const AllMail = ({ currentMessages, type, getMessages }) => {
    const mapMessages = () => {
        return currentMessages.map(({ id, title, sent }) => (
            <OneMail key={sent} id={id} title={title} getMessages={getMessages} type={type} />
        ));
    };

    return <ListGroup>{mapMessages()}</ListGroup>;
};

export default AllMail;
