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
    <div>
      <h2>FriendsList Component</h2>
      {loading && <Loading />}
      {friends &&
        friends.map((friend) => (
          <Friend
            name={friend.name}
            age={friend.age}
            email={friend.email}
            key={friend.id}
          />
        ))}
      {error && <div>{error}</div>}
    </div>
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
