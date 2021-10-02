import axios from "axios";
import { BASE_URL } from "../data";

export const FRIENDS_LOADING = "LOADING";
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS";
export const FRIENDS_ERROR = "FRIENDS_ERROR";
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';

export const friendsLoading = () => {
  return { type: FRIENDS_LOADING };
};

export const friendsSuccess = (friends) => {
  return {
    type: FRIENDS_SUCCESS,
    payload: friends,
  };
};

export const friendsError = (message) => {
  return {
    type: FRIENDS_ERROR,
    payload: message,
  };
};

export const addFriendSuccess = (friend) => {

    return {
        type: ADD_FRIEND_SUCCESS,
        payload: friend
    }
}

export const getFriends = () => (dispatch) => {
  dispatch(friendsLoading());
  const token = window.localStorage.getItem("token");
  axios
    .get(`${BASE_URL}/friends`, { headers: { authorization: token } })
    .then(({ data }) => {
      dispatch(friendsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(friendsError(message));
    })
    .finally();
};

export const addFriend = (friend) => dispatch => {
  dispatch(friendsLoading());
  const token = window.localStorage.getItem('token');
  axios
    .post(`${BASE_URL}/friends`, friend, { headers: { authorization: token } })
    .then(({ data }) => {
      dispatch(friendsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(friendsError(message));
    })
    .finally();
};

