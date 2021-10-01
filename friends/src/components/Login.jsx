/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

const BASE_URL = "http://localhost:5000/api";


localStorage.setItem('test', 'test')
const Login = () => {
    const initialFormValues = {
        username: "",
        password: "",
    };
    
    const [formValues, setFormValues] = useState(initialFormValues);
    const [token, setToken] = useLocalStorage('token');
    const [name, setName] = useLocalStorage('username');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.groupCollapsed("%clogging in", 'color: #007aaf')
    console.log("%ccredentials:", "color: yellow")
    console.table(formValues)
    // post to API
    axios
      .post(`${BASE_URL}/login`, formValues)
      .then((res) => {
          console.log('%ctoken recieved: ', 'color: green', res.data.payload)
          setToken(res.data.payload)
          setName(formValues.username)
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
    console.groupEnd("logging in")
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

export default Login;
