import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import birdIcon from "../birdIcon.svg";

const NavComponent = () => {
  return (
    <Navbar className="justify-content-between" bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt=""
          src={birdIcon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        NetPigeon
      </Navbar.Brand>
      <div style={{ display: "flex", wrap: "wrap" }}>
        <span style={{ color: "white" }}>Welcome, User!</span>
        <Link to="/" style={{ margin: "0 2rem" }}>
          log out
        </Link>
      </div>
    </Navbar>
  );
};

export default NavComponent;
