import React from "react";
import LoginForm from "./LoginForm";
import { getCookieToken } from "../../helpers/functions";

export default ({ history }) => {
    if (getCookieToken()) {
        history.push("/mail");
    }
    return <LoginForm history={history} />;
};
