import React from "react";
import LoginForm from "./LoginForm";
import { getCookieToken } from "../../helpers/functions";

export default ({ history }) => {
    // if no valid auth cookie, redirect
    if (getCookieToken()) {
        history.push("/mail");
    }
    return <LoginForm history={history} />;
};
