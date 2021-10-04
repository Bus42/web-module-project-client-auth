import axios from "axios";
import { BASE_URL } from "../data";


const AUTH_TOKEN = window.localStorage.getItem("token");

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    authorization: AUTH_TOKEN
  }
});


const axiosWithAuth = ({ method, endpoint, body = null}) => {

  return method === "get"
    ? new Promise((resolve, reject) => {
        instance[method](endpoint)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      })
    : new Promise((resolve, reject) => {
        instance[method](endpoint, body)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
};

export default axiosWithAuth;
