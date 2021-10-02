import React from "react";
const Friend = (props) => {
  const { age, email, id, name } = props;

  const handleClick = () => {
    // * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>age: {age}</p>
      <p>email: {email}</p>
      <button disabled onClick={handleClick}>
        Details
      </button>
    </div>
  );
};

export default Friend;
