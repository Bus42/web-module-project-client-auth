import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions/friendsActions";
import Loading from '../components/Loading';

const FriendsList = (props) => {
    const [gotFriends, setGotFriends] = useState(false)
    const {loading, friends, error, getFriends} = props;

    useEffect(() => {
        if(!gotFriends){
            getFriends();
            setGotFriends(true);
        }
    }, [gotFriends, getFriends])
    
  return (
    <div>
      <h2>FriendsList Component</h2>
      {loading && <Loading />}
      {friends && <div>You've got Friends!</div> }
      {error && <div>{error}</div> }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    friends: state.friends,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
