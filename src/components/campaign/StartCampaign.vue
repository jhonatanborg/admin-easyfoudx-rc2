<template>
  <div class="home pa-5">
    <v-container>
      <div>
        <h3>Resumo</h3>
      </div>
      <v-divider class="my-3"></v-divider>
      <Report />
      <div>
        <v-row dense justify="space-between" align="center">
          <v-col cols="2">
            <h3>Campanhas</h3>
          </v-col>
          <v-col>
            <v-row dense>
              <v-col cols="auto"
                ><v-chip
                  @click="$store.commit('setTypeFilter', null)"
                  link
                  color="grey lighten-5"
                  >Todas</v-chip
                ></v-col
              >
              <v-col cols="auto"
                ><v-chip
                  @click="$store.commit('setTypeFilter', 0)"
                  link
                  color="grey lighten-5"
                  >Cadastradas</v-chip
                ></v-col
              >
              <v-col cols="auto"
                ><v-chip
                  @click="$store.commit('setTypeFilter', 1)"
                  link
                  color="grey lighten-5"
                  >Em análise</v-chip
                ></v-col
              ><v-col cols="auto"
                ><v-chip
                  @click="$store.commit('setTypeFilter', 2)"
                  link
                  color="grey lighten-5"
                  >Publicadas</v-chip
                ></v-col
              >
              <v-col cols="auto"
                ><v-chip
                  @click="$store.commit('setTypeFilter', 3)"
                  link
                  color="grey lighten-5"
                  >Finalizadas</v-chip
                ></v-col
              >
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <div v-for="(item, index) in campaigns" :key="index">
        <CardCampaign :campaign="item" />
      </div>
    </v-container>
  </div>
</template>

<script>
import CampaignService from "@/services/campaign/CampaignService";

import Report from "@/components/shared/Report.vue";
import CardCampaign from "@/components/campaign/CardCampaign.vue";
export default {
  name: "Home",
  components: {
    Report,
    CardCampaign,
  },
  mounted() {
    this.initialize();
  },
  data() {
    return {
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Ajude a Cata-Tudo Recicla (Carlão Catador)",
          subtitle:
            "<span class='text--primary'>Carlão Catador</span> &mdash; Catadores precisam de um veículo para garantir trabalho e renda de 19 famílias afetadas na pandemia.",
        },
      ],
    };
  },
  computed: {
    campaigns() {
      if (this.$store.state.typeFilter != null) {
        let result;
        result = this.$store.state.campaigns.filter((campaigns) => {
          return campaigns.estado == this.$store.state.typeFilter;
        });
        return result || {};
      }
      return this.$store.state.campaigns || {};
    },
  },
  methods: {
    initialize() {
      CampaignService.listCampaigns()
        .then((response) => {
          response.data.map((item) => {
            if (item.estado == 0) {
              item.status = "Cadastrado";
              item.color = "primary";
            } else if (item.estado == 1) {
              item.status = "Em Análise";
              item.color = "primary";
            } else if (item.estado == 2) {
              item.status = "Publicado";
              item.color = "success";
            } else if (item.estado == 3) {
              item.status = "Finalizado";
              item.color = "purple";
            }
          });
          this.$store.commit("insertCampaigns", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
