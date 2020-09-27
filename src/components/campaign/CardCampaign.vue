<template>
  <div>
    <v-card
      flat
      link
      class="my-2 "
      active-class="purple"
      v-for="(item, index) in 10"
      :key="index"
      :to="{ name: 'campaign-details', params: { id: 15 } }"
    >
      <v-list-item>
        <v-list-item-avatar size="120" tile>
          <v-img
            src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Ajude a Cata-Tudo Recicla </v-list-item-title>
          <v-list-item-subtitle
            ><span class="text--primary "></span> &mdash; Catadores precisam de
            um veículo para garantir trabalho e renda de 19 famílias afetadas na
            pandemia."</v-list-item-subtitle
          >
          <v-list-item-action-text>15/04/2020</v-list-item-action-text>
        </v-list-item-content>

        <v-list-item-action>
          <v-chip
            small
            link
            color="green accent-3
"
            >Publicada</v-chip
          >
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
