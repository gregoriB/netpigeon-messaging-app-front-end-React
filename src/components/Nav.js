import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo.js";

const Nav = () => {
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

export default Nav;
