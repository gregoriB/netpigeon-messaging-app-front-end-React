import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import { Navbar } from "react-bootstrap";
import { updateCookie } from "../../../helpers/functions";
import Logo from "../../misc/Logo";

const NavBar = ({ history }) => {
    //remove auth token from cookie and update it to an expired time so the browser removes it
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
                <button onClick={logOut} className="log-out" aria-label="Log out">
                    log out
                </button>
            </div>
        </Navbar>
    );
};

NavBar.propTypes = {
    history: ReactRouterPropTypes.history.isRequired
};

export default NavBar;
