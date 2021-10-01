import React, { useState } from "react";

const Login = () => {
  const initialFormValues = {
    username: "",
    password: "",
  };

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
    console.table(formValues)
    // post to API
  };

  return (
    <form action="submit" onSubmit={handleSubmit} >
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
