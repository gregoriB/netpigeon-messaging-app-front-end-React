import React, { useState } from "react";
import { Tab, Col, ListGroup, Button } from "react-bootstrap";
import Emails from "./Emails";
import EmailForm from "./EmailForm";
import EmailModal from "./EmailModal";

const EmailTabs = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="d-flex">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#inbox">
        <Col className="d-flex flex-column email-tabs" sm={4}>
          <ListGroup variant="flush">
            <ListGroup.Item action href="#inbox">
              Inbox
            </ListGroup.Item>
            <ListGroup.Item action href="#sent">
              Sent
            </ListGroup.Item>
          </ListGroup>
          <Button
            className="btn-custom btn-compose-email"
            variant="secondary"
            onClick={() => setModalShow(true)}
          >
            COMPOSE EMAIL
          </Button>
          <EmailModal
            header="Compose new email"
            show={modalShow}
            onHide={() => setModalShow(false)}
          >
            <EmailForm />
          </EmailModal>
        </Col>
        <Col sm={8} className="emails">
          <Tab.Content>
            <Tab.Pane eventKey="#inbox">
              <Emails numEmails={25} />
            </Tab.Pane>
            <Tab.Pane eventKey="#sent">
              <Emails numEmails={10} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </div>
  );
};

export default EmailTabs;
