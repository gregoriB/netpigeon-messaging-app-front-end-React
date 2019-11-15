import React from "react";
import PropTypes from "prop-types";
import { Col, Tab } from "react-bootstrap";
import AllCurrentMail from "../mailBox/AllCurentMail";

const TabsMail = ({ retrieveMessages, currentMessages }) => {
    return (
        <Col sm={10} className="emails">
            <Tab.Content>
                <Tab.Pane eventKey="#inbox">
                    <AllCurrentMail
                        retrieveMessages={() => retrieveMessages("")}
                        currentMessages={currentMessages}
                        type="inbox"
                    />
                </Tab.Pane>
                <Tab.Pane eventKey="#sent">
                    <AllCurrentMail
                        retrieveMessages={() => retrieveMessages("sent/")}
                        currentMessages={currentMessages}
                        type="sent"
                    />
                </Tab.Pane>
            </Tab.Content>
        </Col>
    );
};

TabsMail.propTypes = {
    retrieveMessages: PropTypes.func.isRequired,
    currentMessages: PropTypes.array.isRequired
};

export default TabsMail;
