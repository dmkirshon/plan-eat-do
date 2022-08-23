import React from "react";
import Logo from "../../../components/Logo";
import LogoutButton from "./LogoutButton";
import NavLinks from "./NavLinks";
import UserAvatar from "./UserAvatar";

const NavMain = () => {
  return (
    <div className="nav-main">
      <Logo />
      <NavLinks />
      <UserAvatar currentUser={{ email: "test@test" }} />
      <LogoutButton />
    </div>
  );
};

export default NavMain;
