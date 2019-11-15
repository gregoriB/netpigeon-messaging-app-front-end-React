import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
                aria-label="Recipient"
                required
            />
            <Form.Control
                type="text"
                placeholder="title"
                name="title"
                value={inputFields.title}
                onChange={handleChange}
                aria-label="Title"
                required
            />

            <Form.Control
                as="textarea"
                rows="10"
                name="body"
                placeholder="Add your message here"
                value={inputFields.body}
                onChange={handleChange}
                aria-label="Body"
                required
            />
            <Button
                className="btn-send-email"
                variant="outline-primary"
                type="submit"
                aria-label="Submit"
            >
                SEND
            </Button>
        </Form>
    );
};

NewMailForm.propTypes = {
    onHide: PropTypes.func.isRequired
};

export default NewMailForm;
