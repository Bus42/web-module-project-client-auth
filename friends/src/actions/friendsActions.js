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
  axiosWithAuth({
    method: "get",
    endpoint: "/friends",
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
  axiosWithAuth({
    method: "post",
    endpoint: "/friends",
    body: friend,
  })
    .then(({ data }) => {
      dispatch(friendsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(friendsError(message));
    });
};

export const getFriendDetail = (id) => (dispatch) => {
  dispatch(friendsLoading());
  axiosWithAuth({
    method: "get",
    endpoint: `/friends/${id}`,
  })
    .then(({ data }) => {
      dispatch(friendDetailSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(friendsError(message));
    });
};
