import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import LoginForm from "./LoginForm";
import { getCookieToken } from "../../helpers/functions";

const LoginPage = ({ history }) => {
    // if no valid auth cookie, redirect
    if (getCookieToken()) {
        history.push("/mail");
    }
    return <LoginForm history={history} />;
};

LoginPage.propTypes = {
    history: ReactRouterPropTypes.history.isRequired
};

export default LoginPage;
