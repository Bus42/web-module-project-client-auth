import axios from "axios";
import { BASE_URL } from "../data";

export const FRIENDS_LOADING = "LOADING";
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS";
export const FRIENDS_ERROR = "FRIENDS_ERROR";

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
