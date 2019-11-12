import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = ({ history }) => {
  const handleSubmit = e => {
    e.preventDefault();
    history.push("/mail#inbox");
  };
  return (
    <Form
      style={{ maxWidth: "500px", margin: "0 auto" }}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginPage;
