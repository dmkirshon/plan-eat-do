import React from "react";

import logo from "../assets/icons8-peas-96.png";

const Logo = () => {
  return (
    <div className="logo" data-testid="logo">
      <h1 className="logo-title">planEatdo</h1>
      <img className="logo-img" src={logo} alt="peas in a pod" />
    </div>
  );
};

export default Logo;
