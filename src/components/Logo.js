import React from "react";

import logo from "../assets/icons8-peas-96.png";

const Logo = () => {
  return (
    <div className="logo" data-testid="logo">
      <img className="logo-img" src={logo} alt="peas in a pod" />
      <h1 className="logo-title">planEatdo</h1>
    </div>
  );
};

export default Logo;
