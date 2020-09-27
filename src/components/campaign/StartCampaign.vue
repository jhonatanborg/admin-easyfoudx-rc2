<template>
  <div class="home pa-5">
    <v-container>
      <div>
        <h3>Resumo</h3>
      </div>
      <v-divider class="my-3"></v-divider>
      <Report />
      <div>
        <v-row dense justify="space-between">
          <v-col cols="3">
            <h3>Campanhas</h3>
          </v-col>
          <v-col>
            <v-row dense>
              <v-col cols="auto"
                ><v-chip link color="grey lighten-5">Cadastradas</v-chip></v-col
              >
              <v-col cols="auto"
                ><v-chip link color="grey lighten-5">Em análise</v-chip></v-col
              ><v-col cols="auto"
                ><v-chip link color="grey lighten-5">Publicadas</v-chip></v-col
              >
              <v-col cols="auto"
                ><v-chip link color="grey lighten-5">Finalizadas</v-chip></v-col
              >
              <v-col cols="4">
                <v-btn rounded small color="primary" dark
                  >Filtrar <v-icon size="15">mdi-filter</v-icon></v-btn
                >
              </v-col></v-row
            >
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <CardCampaign />
    </v-container>
  </div>
</template>

<script>
import Report from "@/components/shared/Report.vue";
import CardCampaign from "@/components/campaign/CardCampaign.vue";
export default {
  name: "Home",
  components: {
    Report,
    CardCampaign,
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
};
</script>
