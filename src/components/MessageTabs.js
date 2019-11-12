import React from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";
import Messages from "./Messages";

const MessageTabs = () => {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#inbox">
      <Row>
        <Col sm={4} style={{ maxWidth: "200px" }}>
          <ListGroup variant="flush">
            <ListGroup.Item action href="#inbox" variant="secondary">
              Inbox
            </ListGroup.Item>
            <ListGroup.Item action href="#sent" variant="secondary">
              Sent
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#inbox">
              <Messages />
            </Tab.Pane>
            <Tab.Pane eventKey="#sent">
              <Messages />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default MessageTabs;
