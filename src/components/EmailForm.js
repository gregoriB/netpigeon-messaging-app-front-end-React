import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const initialState = { email: "", subject: "", body: "" };

const EmailForm = () => {
  const [input, setInput] = useState(initialState);

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {});
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
          type="email"
          placeholder="Recipient's Email Address"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          placeholder="Subject"
          name="subject"
          value={input.subject}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows="10"
          name="body"
          value={input.body}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        className="btn-send-email"
        type="submit"
        variant="outline-primary"
      >
        SEND
      </Button>
    </Form>
  );
};

export default EmailForm;
