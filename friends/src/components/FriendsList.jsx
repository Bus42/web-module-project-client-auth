import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions/friendsActions";
import Loading from "../components/Loading";
import Friend from "./Friend";

const FriendsList = (props) => {
  const { loading, friends, error, getFriends } = props;

  useEffect(() => {
    getFriends();
  }, [getFriends]);

  return (
    <>
      {error && <div className="error">{error}</div>}
      {loading && <Loading />}
      {friends.length !== 0 &&
        friends.map((friend) => <Friend friend={friend} key={friend.id} />)}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.friendsReducer.loading,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
