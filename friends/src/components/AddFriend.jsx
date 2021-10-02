import React, { useState } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions/friendsActions";
import { useHistory } from "react-router-dom";

const AddFriend = (props) => {
  const { push } = useHistory();
  const { addFriend } = props;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addFriend(formValues);
    push("/friendslist");
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
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
      <button type="submit">Submit Friend</button>
    </form>
  );
};

export default connect(null, { addFriend })(AddFriend);
