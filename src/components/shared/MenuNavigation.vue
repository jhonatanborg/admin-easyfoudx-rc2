<template>
  <div>
    <v-app-bar flat color="grey darken-4" dark>
      <router-link to="/">
        <img
          aspect-ratio="1.1"
          src="@/assets/easylogo.png"
          alt="alt"
          tag="router-link"
          height="40"
      /></router-link>

      <v-spacer></v-spacer>
      <div v-for="item in items" :key="item.text" :to="{ name: item.router }">
        <v-btn class="mx-4" depressed rounded text :to="{ name: item.router }">
          <v-icon>{{ item.icon }}</v-icon> {{ item.text }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-chip class="ma-2" color="grey lighten-4" text-color="black">
        <v-avatar left>
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
        Jhonatan Borges
      </v-chip>
      <v-btn @click="logout" class="mx-4" depressed rounded text>
        Sair
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { logoutMixin } from "@/mixins/mixins.js";

export default {
  mixins: [logoutMixin],

  data: () => ({
    drawer: true,
    items: [
      { icon: "mdi-heart-box", text: "Campanhas", router: "campaigns" },
      { icon: "mdi-cards", text: "Categorias", router: "categories" },
      {
        icon: "mdi-camera-metering-partial",
        text: "Carrousel",
        router: "carousel",
      },
      { icon: "mdi-account-multiple", text: "Usuarios", router: "users" },
    ],
  }),
};
</script>
