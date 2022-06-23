import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/icons8-peas-96.png";

const NavWelcome = () => {
  return (
    <nav className="nav-welcome">
      <div className="nav-welcome-heading">
        <h1 className="nav-welcome-heading-title">planEatdo</h1>
        <img
          className="nav-welcome-heading-img"
          src={logo}
          alt="peas in a pod"
        />
      </div>

      <div className="nav-welcome-links">
        <NavLink to="signup">Sign Up</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
    </nav>
  );
};

export default NavWelcome;
