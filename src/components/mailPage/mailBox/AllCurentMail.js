import React from "react";
import { ListGroup } from "react-bootstrap";
import Mail from "./Mail";

const AllCurrentMail = ({ currentMessages, type, retrieveMessages }) => {
    const mapCurrentMessages = () => {
        return currentMessages.map(({ id, title, sent }) => (
            <Mail key={sent} id={id} title={title} retrieveMessages={retrieveMessages} type={type} />
        ));
    };

    return <ListGroup>{mapCurrentMessages()}</ListGroup>;
};

export default AllCurrentMail;
