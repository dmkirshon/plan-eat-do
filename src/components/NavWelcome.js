import React from "react";
import { NavLink } from "react-router-dom";

const NavWelcome = () => {
  return (
    <nav>
      <NavLink to="signup">Sign Up</NavLink>
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};

export default NavWelcome;
