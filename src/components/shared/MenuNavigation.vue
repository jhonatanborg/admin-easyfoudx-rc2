<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      color="grey darken-3"
      dark
      absolute
      permanent
      app
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="{ name: item.router }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { icon: "mdi-home", text: "Home", router: "home" },
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
