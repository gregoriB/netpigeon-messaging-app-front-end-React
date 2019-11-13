import React from "react";
import { ListGroup } from "react-bootstrap";
import Email from "./Email";

const Emails = ({ numEmails }) => {
  const mappedEmails = () => {
    return [...new Array(numEmails)].map((_, index) => (
      <Email key={index} index={index} />
    ));
  };

  return <ListGroup>{mappedEmails()}</ListGroup>;
};

export default Emails;
