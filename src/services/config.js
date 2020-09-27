import axios from "axios";
import { Promise } from "es6-promise";
import router from "@/router/router.js";

var http = axios.create({
  baseURL: "https://api.easyfundx.com/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      if (error.config.url === "auth/refresh") {
        router.push({ name: "Login" });
      } else {
        http
          .get("auth/refresh")
          .then((resp) => {
            const config = error.config;
            config.headers[
              "Authorization"
            ] = `Bearer ${resp.data.access_token}`;
            localStorage.setItem("token", resp.data.access_token);

            const retryOriginal = new Promise((resolve) => {
              resolve(http.request(error.config));
            });
            return retryOriginal;
          })
          .catch((err) => {
            console.log("ERROR NO INTERCEPTOR", err);
          });
      }
    }
    return Promise.reject(error);
  }
);

export default http;
