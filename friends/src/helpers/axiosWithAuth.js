import axios from "axios";

const axiosWithAuth = ({ method, url, body = null, headers = {} }) => {
  const token = window.localStorage.getItem("token");

  return method === "get"
    ? new Promise((resolve, reject) => {
        axios[method](url, {
          headers: { ...headers, authorization: token },
        })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      })
    : new Promise((resolve, reject) => {
        axios[method](url, body, {
          headers: { ...headers, authorization: token },
        })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
};

export default axiosWithAuth;
