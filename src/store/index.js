import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    campaigns: null,
    typeFilter: null,
    campaignSelected: null,
    carousel: null,
  },
  mutations: {
    insertCampaigns(state, data) {
      state.campaigns = data;
    },
    setTypeFilter(state, data) {
      state.typeFilter = data;
    },
    setCampaignSelect(state, data) {
      state.campaignSelected = data;
    },
    setCarousel(state, data) {
      state.carousel = data;
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
  actions: {},
  modules: {},
});
