/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFriendData } from "../actions/friendActions";

const Login = (props) => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  const fetchFriendData = props.fetchFriendData;

  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();
  // const [token, setToken] = useLocalStorage("token");
  // const [name, setName] = useLocalStorage("username");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    fetchFriendData({
      method: "post",
      endpoint: "/login",
      body: formValues,
    });
    setFormValues(initialFormValues);
    push("/friendslist");
  };

  return (
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
      <button disabled>sign up</button>
    </form>
  );
};

export default connect(null, { fetchFriendData })(Login);
