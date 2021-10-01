import axios from "axios";
import { BASE_URL } from "../data";

export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

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

export const login = (credentials) => (dispatch) => {
  axios.defaults.url = BASE_URL;
  console.log("login called");
  dispatch(authLoading());
  axios
    .post(`${BASE_URL}/login`, credentials)
    .then(({ data }) => {
      dispatch(authSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(authError(message));
    });
};
