import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import { useHistory, useLocation } from "react-router-dom";

const Header = (props) => {
  const { logout } = props;
  const { push, goBack } = useHistory();
  const location = useLocation();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure you wish to end your session?")) {
      logout();
    }
  };

  const handleAddUserClick = () => {
    push("/addfriend");
  };

  const handleBackClick = () => {
    goBack();
  };

  return (
    <header>
      <h1>Web Module Project: Client Auth</h1>
      {/* don't show buttons on login screen */}
      {location.pathname !== "/login" && (
        <span>
          {location.pathname === "/addfriend" ? (
            // if in the Add Friend form, show navigation button
            <button onClick={handleBackClick}>Go Back</button>
          ) : (
            // otherwise, show Add Friend button
            <button onClick={handleAddUserClick}>Add Friend</button>
          )}
          <button onClick={handleLogoutClick}>Logout</button>
        </span>
      )}
    </header>
  );
};

export default connect(null, { logout })(Header);
