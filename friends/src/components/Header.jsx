import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  const { isAuthenticated } = props;
  const handleClick = () => {
    console.log("logout clicked");
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

export default connect(mapStateToProps)(Header);
