import axios from "axios";
import { BASE_URL } from "../data";
import axiosWithAuth from "../helpers/axiosWithAuth";

export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const authLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    payload: token,
  };
};

export const authError = (message) => {
  return {
    type: AUTH_ERROR,
    payload: message,
  };
};

export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

export const login = (credentials) => (dispatch) => {
  dispatch(authLoading());
  axios
    .post(`${BASE_URL}/login`, credentials)
    .then(({ data }) => {
      window.localStorage.setItem("token", data.payload);
      dispatch(authSuccess(data.payload));
      window.location = "/friendslist";
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        dispatch(authError(error.response.data));
        dispatch(authError(error.response.status));
        dispatch(authError(error.response.headers));
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        dispatch(authError(error.request));
      } else {
        // Something happened in setting up the request that triggered an Error
        dispatch(authError("Error", error.message));
      }
      dispatch(authError(error.config));
    });
};

export const logout = () => (dispatch) => {
  axiosWithAuth({
    method: "post",
    endpoint: "/logout",
  })
    .then(() => {
      window.localStorage.removeItem("token");
      dispatch(logoutSuccess());
      window.location = "/login";
    })
    .catch(({ message }) => {
      dispatch(authError(message));
    });
};
