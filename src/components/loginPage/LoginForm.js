import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Logo from "../misc/Logo";
import { fetchFromServer, updateCookie } from "../../helpers/functions";

const initialState = { username: "test", password: "test123!" };

const LoginForm = ({ history }) => {
    const [input, setInput] = useState(initialState);
    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const logIn = token => {
        const cookie = `netPigeonToken=${token};`;
        const oneHour = 60 * 60;
        updateCookie(cookie, oneHour);
        history.push("/mail");
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const route = "api-token-auth/";
        const options = {
            method: "POST",
            body: JSON.stringify({ ...input }),
            headers: {
                "Content-Type": "application/json"
            }
        };
        const json = await fetchFromServer(route, options);
        if (json.token) {
            logIn(json.token);
        } else {
            console.log("login failed");
        }
    };

    return (
        <div className="login-form-container">
            <Form onSubmit={handleSubmit}>
                <Logo />
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        name="username"
                        value={input.username}
                        type="username"
                        placeholder="Enter Username"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={input.password}
                        type="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="btn-custom" variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;
