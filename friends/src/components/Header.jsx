import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import { useHistory, useLocation } from "react-router-dom";

const Header = (props) => {
  const { isAuthenticated, logout } = props;
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
      {isAuthenticated && (
        <span>
          {location.pathname === "/addfriend" ? (
            <button onClick={handleBackClick}>Back to Friends</button>
          ) : (
            <button onClick={handleAddUserClick}>Add Friend</button>
          )}
          <button onClick={handleLogoutClick}>Logout</button>
        </span>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(Header);
