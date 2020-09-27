import http from "../config";

export default {
  getUsers: () => {
    return http.get("pessoas");
  },
  postUser: (user) => {
    return http.post("pessoas", user);
  },
  putUser: (id) => {
    return http.put("pessoas", id);
  },
  deleteUser: (id) => {
    return http.delete(`pessoas/${id}`);
  },
  setAdmin: (data) => {
    return http.put("pessoas/set_admin", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
