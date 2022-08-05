import React from "react";

const LogoutButton = ({ logout }) => {
  return (
    <div className="nav-main-logout">
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
