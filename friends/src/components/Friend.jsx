import React from "react";
import { connect } from "react-redux";
import { getFriendDetail } from "../actions/friendsActions";
import { useHistory } from "react-router-dom";

const Friend = (props) => {
  const { age, email, id, name } = props.friend;
  const { push } = useHistory();

  const handleClick = () => {
    push(`/frienddetail/${id}`);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>age: {age}</p>
      <p>email: {email}</p>
      <button onClick={handleClick}>Details</button>
    </div>
  );
};

export default connect(null, { getFriendDetail })(Friend);
