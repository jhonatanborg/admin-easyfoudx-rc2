import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const user = {
  namespaced: true,
  state: () => ({
    user: "cuzin",
  }),
  getters: {},

  mutations: {
    ...mutationsGlobal,
  },
  actions: { ...actionsGlobal },
};

export default user;
