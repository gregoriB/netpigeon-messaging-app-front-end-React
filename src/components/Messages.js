import React from "react";
import { ListGroup } from "react-bootstrap";
import Message from "./Message";

const Messages = props => {
  const mappedEmails = () => {
    return [...new Array(40)].map((_, index) => {
      return <Message key={index} index={index} />;
    });
  };
  return <ListGroup>{mappedEmails()}</ListGroup>;
};

export default Messages;
