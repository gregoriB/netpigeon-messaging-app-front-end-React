import React from "react";
import Tabs from "./navigation/Tabs";
import NavBar from "./navigation/NavBar";
import { getCookieToken } from "../../helpers/functions";

export default ({ history }) => {
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
