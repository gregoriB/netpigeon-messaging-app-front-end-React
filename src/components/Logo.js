import React from "react";
import { Navbar } from "react-bootstrap";
import birdIcon from "../birdIcon.svg";

const Logo = () => {
  return (
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
  );
};

export default Logo;
