import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Logo from "../misc/Logo";

const initialState = { username: "", password: "" };

const LoginPage = ({ history }) => {
    const [input, setInput] = useState(initialState);
    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        history.push("/mail#inbox");
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

export default LoginPage;
