import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

const Header = (props) => {
  const { isAuthenticated, logout } = props;
  const handleClick = () => {
    if (window.confirm("Are you sure you wish to end your session?")) {
      logout();
    }
  };
  return (
    <header>
      <h1>Web Module Project: Client Auth</h1>
      {isAuthenticated && <button onClick={handleClick}>logout</button>}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(Header);
