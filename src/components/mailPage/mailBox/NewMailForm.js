import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { fetchFromServer, buildFetchOptions } from "../../../helpers/functions";

const initialState = { receiver: "", title: "", body: "" };

const NewMailForm = ({ onHide }) => {
    const [inputFields, setInputFields] = useState(initialState);

    const handleChange = e => {
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const route = "messages/";
        const options = buildFetchOptions("POST", { ...inputFields });
        const result = await fetchFromServer(route, options);
        if (result && result.data === "success") {
            onHide();
        }
        window.location.reload();
    };

    useEffect(() => {});
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                placeholder="Recipient"
                name="receiver"
                value={inputFields.receiver}
                onChange={handleChange}
                required
            />
            <Form.Control
                type="text"
                placeholder="Subject"
                name="title"
                value={inputFields.title}
                onChange={handleChange}
                required
            />

            <Form.Control
                as="textarea"
                rows="10"
                name="body"
                placeholder="Add your message here"
                value={inputFields.body}
                onChange={handleChange}
                required
            />
            <Button className="btn-send-email" type="submit" variant="outline-primary">
                SEND
            </Button>
        </Form>
    );
};

export default NewMailForm;
