import React, { useState, useEffect } from "react";
import { Tab, Col, ListGroup, Button } from "react-bootstrap";
import AllMail from "../mailBox/AllMail";
import NewMailForm from "../mailBox/NewMailForm";
import Modal from "../mailBox/Modal";
import { fetchFromServer, getCookieToken } from "../../../helpers/functions";

const MailTabs = () => {
    const [modalShow, setModalShow] = useState(false);
    const [currentMessages, setCurrentMessages] = useState([]);

    const getMessages = async type => {
        const route = `messages/${type}`;
        const token = getCookieToken();
        const options = { headers: { Authorization: `Token ${token}` } };
        const messages = await fetchFromServer(route, options);
        setCurrentMessages(messages);
    };

    useEffect(() => {
        getMessages("");
    }, []);

    return (
        <div className="d-flex">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#inbox">
                <Col className="d-flex flex-column email-tabs" sm={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item
                            action
                            href="#inbox"
                            name="inbox"
                            onClick={() => getMessages("")}
                        >
                            Inbox
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            href="#sent"
                            name="sent"
                            onClick={() => getMessages("sent/")}
                        >
                            Sent
                        </ListGroup.Item>
                    </ListGroup>
                    <Button
                        className="btn-custom btn-compose-msg"
                        variant="secondary"
                        onClick={() => setModalShow(true)}
                    >
                        NEW MESSAGE
                    </Button>
                    <Modal
                        header="Compose new message"
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    >
                        <NewMailForm onHide={() => setModalShow(false)} />
                    </Modal>
                </Col>
                <Col sm={8} className="emails">
                    <Tab.Content>
                        <Tab.Pane eventKey="#inbox">
                            <AllMail
                                getMessages={() => getMessages("")}
                                currentMessages={currentMessages}
                                type="inbox"
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#sent">
                            <AllMail
                                getMessages={() => getMessages("sent/")}
                                currentMessages={currentMessages}
                                type="sent"
                            />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Tab.Container>
        </div>
    );
};

export default MailTabs;
