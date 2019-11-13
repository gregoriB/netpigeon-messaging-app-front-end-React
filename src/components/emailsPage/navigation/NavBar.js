import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../misc/Logo";

const NavBar = () => {
    return (
        <Navbar className="justify-content-between" bg="dark" variant="dark">
            <Logo />
            <div className="d-flex">
                <span id="greeting">Welcome back!</span>
                <Link className="log-out" to="/">
                    log out
                </Link>
            </div>
        </Navbar>
    );
};

export default NavBar;
