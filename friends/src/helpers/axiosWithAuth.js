// consider refactoring to a custom hook

import axios from "axios";
import { BASE_URL } from "../data";

const AUTH_TOKEN = window.localStorage.getItem("token") || null;

const instance = axios.create({
  baseURL: BASE_URL,
  // timeout: 2000, // un-comment this line to change default timeout of 0 (no timeout)
  onUploadProgress: (event) => { // can be used for custom loading components or with styling libraries
    console.log("upload: ", event);
  },
  onDownloadProgress: (event) => {
    console.log("download: ", event);
  },
});

instance.interceptors.request.use((config) => {
  const configWithToken = {...config, headers: {authorization: AUTH_TOKEN} }
  return configWithToken;
})

const axiosWithAuth = ({ method, endpoint, body = null }) => {
  switch (method) {
    case "get":
      return new Promise((resolve, reject) => {
        instance[method](endpoint)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    default:
      return new Promise((resolve, reject) => {
        instance[method](endpoint, body)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
  }
};

export default axiosWithAuth;
