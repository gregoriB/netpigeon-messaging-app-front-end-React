import React from "react";
import PropTypes from "prop-types";
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

AllCurrentMail.propTypes = {
    currentMessages: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    retrieveMessages: PropTypes.func.isRequired
};

export default AllCurrentMail;
