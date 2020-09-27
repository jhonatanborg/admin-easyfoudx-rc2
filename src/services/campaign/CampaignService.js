import http from "../config";

export default {
  listCampaigns: () => {
    return http.get("campanhas");
  },
  changeState: (state) => {
    return http.put("campanhas/estado", state, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
