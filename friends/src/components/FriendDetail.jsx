import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriendDetail } from "../actions/friendsActions";
import { useHistory, useParams } from "react-router-dom";
import Loading from "./Loading";

const FriendDetail = (props) => {
  const { name, age, email } = props.activeFriend;
  const { loading, getFriendDetail } = props;

  const { id } = useParams();
  useEffect(() => {
    getFriendDetail(id);
  }, [getFriendDetail, id]);

  const { goBack } = useHistory();

  const handleClick = () => {
    goBack();
  };

  return (
    <div>
      {loading && <Loading />}
      <h3>{name}</h3>
      <p>age: {age}</p>
      <p>email: {email}</p>
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeFriend: state.friendsReducer.activeFriend,
    loading: state.authReducer.loading,
  };
};

export default connect(mapStateToProps, { getFriendDetail })(FriendDetail);
