import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactRouterPropTypes from "react-router-prop-types";
import Logo from "../misc/Logo";
import { fetchFromServer, updateCookie, buildFetchOptions } from "../../helpers/functions";

const initialState = { username: "", password: "" };

const LoginForm = ({ history }) => {
    const [inputFields, setInputFields] = useState(initialState);

    const handleChange = e => {
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value
        });
    };

    //update auth token cookie after login
    const logIn = token => {
        const cookie = `netPigeonToken=${token};`;
        const oneHour = 60 * 60;
        updateCookie(cookie, oneHour);
        history.push("/mail");
    };

    // exchange credentials with server and utilize auth token if successful
    const handleSubmit = async e => {
        e.preventDefault();
        const route = "api-token-auth/";
        const options = buildFetchOptions("POST", { ...inputFields });
        const result = await fetchFromServer(route, options);
        if (result.token) {
            logIn(result.token);
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
                        required
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
                        required
                    />
                </Form.Group>
                <Button className="btn-custom" variant="primary" type="submit" aria-label="Submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
};

LoginForm.propTypes = {
    history: ReactRouterPropTypes.history.isRequired
};

export default LoginForm;
