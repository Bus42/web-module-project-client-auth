import axios from "axios";
import { BASE_URL } from "../data";
axios.defaults.url = BASE_URL;

const axiosWithAuth = ({ method, endpoint, body = null, headers = null }) => {
  const token = window.localStorage.getItem("token");

  axios[method](endpoint, body, {
    headers: { ...headers, authorization: token },
  })
  .then(res => res)
  .catch(err => err)
};

export default axiosWithAuth;
