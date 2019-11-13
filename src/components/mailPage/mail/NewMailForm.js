import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const initialState = { receiver: "", title: "", body: "" };

const NewMailForm = () => {
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
                    type="text"
                    placeholder="Recipient"
                    name="receiver"
                    value={input.receiver}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="title"
                    value={input.title}
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
            <Button className="btn-send-email" type="submit" variant="outline-primary">
                SEND
            </Button>
        </Form>
    );
};

export default NewMailForm;
