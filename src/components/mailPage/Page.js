import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import Tabs from "./navigation/Tabs";
import NavBar from "./navigation/NavBar";
import { getCookieToken } from "../../helpers/functions";

const MailPage = ({ history }) => {
    // if no valid auth cookie, redirect
    if (!getCookieToken()) {
        history.push("/");
    }
    return (
        <>
            <NavBar history={history} />
            <Tabs />
        </>
    );
};

MailPage.propTypes = {
    history: ReactRouterPropTypes.history.isRequired
};

export default MailPage;
