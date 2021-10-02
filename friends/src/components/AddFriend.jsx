import React, { useState } from "react";

const AddFriend = (props) => {
  const initialFormValues = {
    name: "",
    age: 0,
    email: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form action="submit">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="name"
        />
      </label>
      <label htmlFor="age">
        <input
          type="number"
          name="age"
          value={formValues.age}
          onChange={handleChange}
          placeholder="age"
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="email"
        />
      </label>
    </form>
  );
};

export default AddFriend;
