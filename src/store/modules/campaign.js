import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const campaign = {
  namespaced: true,
  state: () => ({
    campaign: "cuzin",
  }),
  getters: {},

  mutations: {
    ...mutationsGlobal,
  },
  actions: { ...actionsGlobal },
};

export default campaign;
