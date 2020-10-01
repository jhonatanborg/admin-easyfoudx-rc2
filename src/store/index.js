import Vue from "vue";
import Vuex from "vuex";
import http from "@/services/config.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    id: null,
    campaigns: null,
    typeFilter: null,
    campaignSelected: null,
    carouselSelected: null,
    carouselList: null,
    loadingPage: false,
    users: null,
    typeFilterUser: null,
    userDelete: null,
  },
  mutations: {
    SET_LOGGED_USER(state, { token, id }) {
      state.token = token;
      state.id = id;
    },
    LOGOUT_USER(state) {
      state.token = null;
    },
    insertCampaigns(state, data) {
      state.campaigns = data;
    },

    setTypeFilter(state, data) {
      state.typeFilter = data;
    },
    setCampaignSelect(state, data) {
      state.campaignSelected = data;
    },
    setCarouselList(state, data) {
      state.carouselList = data;
    },
    setCarousel(state, data) {
      state.carouselSelected = data;
    },
    setloader(state, data) {
      state.loadingPage = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    setTypeUser(state, data) {
      state.typeFilterUser = data;
    },
    setUserDelete(state, data) {
      state.userDelete = data;
    },
  },
  getters: {
    getResume(state) {
      if (state.campaigns) {
        const registered = state.campaigns.filter(
          (campaign) => campaign.estado === 0
        );
        const pending = state.campaigns.filter(
          (campaign) => campaign.estado === 1
        );
        const published = state.campaigns.filter(
          (campaign) => campaign.estado === 2
        );
        const completed = state.campaigns.filter(
          (campaign) => campaign.estado === 3
        );
        return [
          {
            state: "Cadastradas",
            quantity: registered.length,
          },
          {
            state: "Em análise",
            quantity: pending.length,
          },
          {
            state: "Publicadas",
            quantity: published.length,
          },
          {
            state: "Finalizadas",
            quantity: completed.length,
          },
        ];
      }
    },
    getCampaignReport(state) {
      let report = [];
      if (state.campaignSelected) {
        report.push(
          {
            value: state.campaignSelected.dias_ativa,
            title: "Dias ativa",
            icon: "mdi-calendar-check",
          },
          {
            value: state.campaignSelected.dias_restantes,
            title: "Dias restantes",
            icon: "mdi-calendar-clock",
          },
          {
            value: state.campaignSelected.prazo + " dias",
            title: "Prazo",
            icon: "mdi-calendar-month",
          },
          {
            value: state.campaignSelected.data_final_h,
            title: "Data final",
            icon: "mdi-calendar-heart",
          }
        );
        return report;
      }
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        http
          .post("/auth/login", user)
          .then((response) => {
            localStorage.setItem("token", response.data.access_token);
            commit("SET_LOGGED_USER", {
              token: response.data.access_token,
              id: response.data.id,
            });
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        http
          .get("/auth/refresh?logout=true")
          .then((response) => {
            commit("LOGOUT_USER", {});
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    verifyAdmin() {
      return new Promise((resolve, reject) => {
        http
          .get("/auth/test_admin", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
