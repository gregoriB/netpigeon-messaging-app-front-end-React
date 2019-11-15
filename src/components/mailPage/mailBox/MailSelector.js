import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const MailSelector = ({ retrieveMessages, name }) => {
    return (
        <ListGroup.Item
            action
            href={`#${name || "inbox"}`}
            onClick={() => retrieveMessages(name)}
            aria-label="mailbox selector tab"
        >
            {name || "inbox"}
        </ListGroup.Item>
    );
};

MailSelector.propTypes = {
    retrieveMessages: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default MailSelector;
