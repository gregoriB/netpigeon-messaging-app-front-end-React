import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { fetchFromServer, getCookieToken } from "../../../helpers/functions";

const initialState = { receiver: "", title: "", body: "" };

const NewMailForm = ({ onHide, history }) => {
    const [inputFields, setInputFields] = useState(initialState);

    const handleChange = e => {
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const token = getCookieToken();
        const route = "messages/";
        const options = {
            method: "POST",
            body: JSON.stringify({ ...inputFields }),
            headers: { "Content-Type": "application/json", Authorization: `Token ${token}` }
        };
        const result = await fetchFromServer(route, options);
        if (result.data === "success") {
            onHide();
        }
        history.push("/mail");
        // window.location.reload();
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

export default withRouter(NewMailForm);
