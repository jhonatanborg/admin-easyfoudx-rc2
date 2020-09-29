import http from "../config";

export default {
  listCampaigns: () => {
    return http.get("campanhas");
  },
  listCampaign: (id) => {
    return http.get(`campanhas/${id}`);
  },
  listColaborations: (id) => {
    return http.get(`campanhas/${id}/colaboracoes`);
  },
  changeState: (state) => {
    return http.put("campanhas/estado", state, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
