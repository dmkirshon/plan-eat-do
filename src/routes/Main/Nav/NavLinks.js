import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="nav-main-links">
      <Link to="/plan">Plan</Link>
      <Link to="/eat">Eat</Link>
      <Link to="/do">Do</Link>
    </div>
  );
};

export default NavLinks;
