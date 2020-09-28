<template>
  <v-app id="App" class="app grey lighten-2 ">
    <MenuNavigation />
    <v-main class="bar grey darken-3 ">
      <v-card class=" grey lighten-5 ma-5">
        <router-view />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import MenuNavigation from "@/components/shared/MenuNavigation.vue";

export default {
  components: {
    MenuNavigation,
  },
};
</script>
