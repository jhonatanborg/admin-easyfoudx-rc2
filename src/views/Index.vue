<template>
  <v-app id="App" class="app grey lighten-2 ">
    <MenuNavigation />
    <Alert />
    <v-main class="bar grey darken-4 ">
      <v-card
        :loading="$store.state.loadingPage"
        loader-height="10px"
        class=" grey lighten-5 ma-5"
      >
        <router-view />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import MenuNavigation from "@/components/shared/MenuNavigation.vue";
import Alert from "@/components/alert/Alert.vue";

export default {
  components: {
    MenuNavigation,
    Alert,
  },
  methods: {
    verifyRouter() {},
  },
};
</script>

<style></style>
