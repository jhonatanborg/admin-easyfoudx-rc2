<template>
  <div>
    <div>
      <!-- <v-row justify="end">
        <v-col cols="auto">
          <v-btn
            :to="{ name: 'campaigns' }"
            outlined
            small
            color="primary"
            right
          >
            Fechar
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row> -->
      <v-container fluid>
        <v-row dense>
          <v-col cols="8" class="pa-5">
            <v-row align="center" dense justify="space-between">
              <v-col cols="auto">
                <div>
                  <div></div>
                  <h4 v-text="campaign.titulo"></h4>
                  <div>
                    <span v-text="campaign.pessoa_nome">Carlão Catador</span>
                  </div>
                </div>
              </v-col>
              <v-col cols="auto">
                <v-chip
                  small
                  link
                  :color="state.color"
                  v-text="state.status"
                ></v-chip>
              </v-col>
            </v-row>
            <v-row dense no-gutters>
              <v-col v-for="(item, n) in reportCampaign" :key="n" cols="3">
                <v-list-item class=" px-0">
                  <v-list-item-avatar tile size="50">
                    <v-icon class="grey lighten-1" dark>
                      {{ item.icon }}
                    </v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>

                    <v-list-item-subtitle
                      >{{ item.value }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div><span>Sobre a campanha</span></div>
                <div class="text-justify">
                  <span v-html="campaign.descricao"></span>
                </div>
              </v-col>
              <v-divider vertical></v-divider>
            </v-row>
          </v-col>
          <v-col cols="4">
            <div class="py-5">
              <span>Imagem</span>
              <v-divider class="mt-2"></v-divider>
            </div>
            <v-card class="pa-2" height="200px" flat>
              <v-img
                height="100%"
                :src="
                  'https://api.easyfundx.com/images/' + campaign.imagem_capa
                "
              ></v-img>
            </v-card>
            <div class="py-5">
              <span>Video</span>
              <v-divider class="mt-2"></v-divider>
            </div>
            <v-card class="pa-2" flat height="200px">
              <iframe
                class="video"
                :src="'https://www.youtube.com/embed/' + campaign.youtube_id"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import CampaignService from "@/services/campaign/CampaignService";

export default {
  mounted() {
    CampaignService.listCampaign(this.$route.query.id).then((response) => {
      console.log(response);
      this.$store.commit("setCampaignSelect", response.data[0]);
      this.campaign = response.data[0];
      this.setStatus(this.campaign.estado);
    });
    CampaignService.listColaborations(this.id).then((response) => {
      this.collaborations = response.data;
    });
  },
  data: () => ({
    id: "",
    campaign: [],
    collaborations: [],
    state: {},
  }),
  computed: {
    reportCampaign() {
      return this.$store.getters.getCampaignReport || [];
    },
  },
  methods: {
    setStatus(state) {
      let obj = {};
      if (state == 0) {
        obj.status = "Cadastrado";
        obj.color = "primary";
      } else if (state == 1) {
        obj.status = "Em Análise";
        obj.color = "primary";
      } else if (state == 2) {
        obj.status = "Publicado";
        obj.color = "success";
      } else if (state == 3) {
        obj.status = "Finalizado";
        obj.color = "purple";
      }
      return (this.state = obj);
    },
    convertMoney(money) {
      if (money > 0) {
        const toCurrency = (n, curr, LanguageFormat = undefined) =>
          Intl.NumberFormat(LanguageFormat, {
            style: "currency",
            currency: curr,
          }).format(n);
        return toCurrency(money, "BRL");
      } else {
        return "R$ 0,00";
      }
    },
  },
};
</script>

<style>
.video {
  width: 100%;
  height: 100%;
}
</style>
