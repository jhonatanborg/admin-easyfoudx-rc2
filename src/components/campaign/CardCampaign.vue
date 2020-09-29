<template>
  <div>
    <v-card
      flat
      link
      class="my-2 "
      active-class="purple"
      :to="{ name: 'campaign-details', query: { id: campaign.id } }"
    >
      <v-list-item>
        <v-list-item-avatar size="120" tile>
          <v-img
            :src="'https://api.easyfundx.com/images/' + campaign.imagem_capa"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ campaign.titulo }}</v-list-item-title>
          <v-list-item-subtitle
            class="details-campaign"
            v-html="campaign.descricao"
          ></v-list-item-subtitle>
          <v-list-item-action-text>{{
            campaign.data_registro_h
          }}</v-list-item-action-text>
        </v-list-item-content>

        <v-list-item-action>
          <v-chip
            small
            link
            dense
            :color="campaign.color"
            text-color="white"
            dark
          >
            <span v-text="campaign.status"></span>
          </v-chip>
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    campaign: Object,
  },
  data() {
    return {
      colorState: null,
    };
  },
  methods: {},
};
</script>

<style>
.details-campaign {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
