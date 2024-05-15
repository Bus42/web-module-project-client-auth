/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import Loading from "./Loading";

const Login = (props) => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  const { loading, login, errors } = props;

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formValues);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {errors && (
            <div className="errors">
              {errors.map((error) => (
                <div className="error">{error}</div>
              ))}
            </div>
          )}
          <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="username">
              <input
                name="username"
                type="text"
                value={formValues.username}
                onChange={handleChange}
                placeholder="username"
              />
            </label>
            <label htmlFor="password">
              <input
                name="password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="password"
              />
            </label>
            <button type="submit">log in</button>
          </form>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    errors: state.authReducer.errors,
  };
};

// map loading prop to display component before navigation to prevent FOUC
export default connect(mapStateToProps, { login })(Login);
