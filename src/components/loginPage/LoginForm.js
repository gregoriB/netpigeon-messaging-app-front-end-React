import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Logo from "../misc/Logo";
import { fetchFromServer, updateCookie } from "../../helpers/functions";

const initialState = { username: "", password: "" };

const LoginForm = ({ history }) => {
    const [inputFields, setInputFields] = useState(initialState);
    const handleChange = e => {
        setInputFields({
            ...inputFields,
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
            body: JSON.stringify({ ...inputFields }),
            headers: {
                "Content-Type": "application/json"
            }
        };
        const json = await fetchFromServer(route, options);
        if (json.token) {
            logIn(json.token);
        } else {
            alert("Login failed.  Please double check your username and password.");
        }
    };

    return (
        <div className="login-form-container">
            <Form onSubmit={handleSubmit}>
                <Logo />
                <Form.Group controlId="loginFormUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        name="username"
                        value={inputFields.username}
                        type="username"
                        placeholder="Enter Username"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="loginFormPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={inputFields.password}
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
