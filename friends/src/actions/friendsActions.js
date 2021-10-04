import axios from "axios";
import { BASE_URL } from "../data";
import axiosWithAuth from "../helpers/axiosWithAuth";

export const FRIENDS_LOADING = "LOADING";
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS";
export const FRIENDS_ERROR = "FRIENDS_ERROR";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const FRIEND_DETAIL_SUCCESS = "FRIEND_DETAIL_SUCCESS";

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
    payload: friend,
  };
};

export const friendDetailSuccess = (friend) => {
  return {
    type: FRIEND_DETAIL_SUCCESS,
    payload: friend,
  };
};

export const getFriends = () => (dispatch) => {
  dispatch(friendsLoading());
  const token = window.localStorage.getItem("token");
  axiosWithAuth({
    method: "get",
    url: `${BASE_URL}/friends`,
    headers: { authorization: token },
  })
    .then(({ data }) => {
      dispatch(friendsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(friendsError(message));
    });
};

export const addFriend = (friend) => (dispatch) => {
  dispatch(friendsLoading());
  const token = window.localStorage.getItem("token");
  axios
    .post(`${BASE_URL}/friends`, friend, { headers: { authorization: token } })
    .then(({ data }) => {
      dispatch(friendsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(friendsError(message));
    });
};

export const getFriendDetail = (id) => (dispatch) => {
  dispatch(friendsLoading());
  const token = window.localStorage.getItem("token");
  axios
    .get(`${BASE_URL}/friends/${id}`, { headers: { authorization: token } })
    .then(({ data }) => {
      console.log(data);
      dispatch(friendDetailSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(friendsError(message));
    });
};
