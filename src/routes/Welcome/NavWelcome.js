import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";

const NavWelcome = () => {
  return (
    <nav className="nav-welcome">
      <Logo />
      <div className="nav-welcome-links">
        <NavLink to="signup">Sign Up</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
    </nav>
  );
};

export default NavWelcome;
