import React from "react";
import MailTabs from "./navigation/MailTabs";
import NavBar from "./navigation/NavBar";
import { getCookieToken } from "../../helpers/functions";

export default ({ history }) => {
    if (!getCookieToken()) {
        history.push("/");
    }
    return (
        <>
            <NavBar />
            <MailTabs />
        </>
    );
};
