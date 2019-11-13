import React from "react";
import { Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { updateCookie } from "../../../helpers/functions";
import Logo from "../../misc/Logo";

const NavBar = ({ history }) => {
    const logOut = () => {
        const cookie = "netPigeonToken=null";
        const expiredTime = 60 * -60;
        updateCookie(cookie, expiredTime);
        history.push("/");
    };
    return (
        <Navbar className="justify-content-between" bg="dark" variant="dark">
            <Logo />
            <div className="d-flex">
                <span id="greeting">Welcome back!</span>
                <button onClick={logOut} className="log-out">
                    log out
                </button>
            </div>
        </Navbar>
    );
};

export default withRouter(NavBar);
