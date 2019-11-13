import React from "react";
import SideBar from "./navigation/SideBar";
import NavBar from "./navigation/NavBar";
import { getCookieToken } from "../../helpers/functions";

export default ({ history }) => {
    if (!getCookieToken()) {
        history.push("/");
    }
    return (
        <>
            <NavBar />
            <SideBar />
        </>
    );
};
