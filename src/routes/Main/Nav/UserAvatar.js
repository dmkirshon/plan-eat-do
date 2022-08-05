import React from "react";

const UserAvatar = ({ currentUser }) => {
  return (
    <div className="user-avatar" data-testid="user-avatar">
      <p className="user-avatar-email">{currentUser.email}</p>
    </div>
  );
};

export default UserAvatar;
