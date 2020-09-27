import Vue from "vue";
import Vuex from "vuex";
import campaign from "./modules/campaign";
import user from "./modules/user";

import actionsGlobal from "./actions";
import mutationsGlobal from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    campaign,
    user,
  },
  state: {
    error: null,
    message: null,
  },
  mutations: {
    ...mutationsGlobal,
  },
  actions: { ...actionsGlobal },
});
