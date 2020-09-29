<template>
  <v-layout class="d-flex justify-space-between ">
    <v-flex class="mr-3" v-for="(item, key) in resumeStates" :key="key">
      <v-alert dense icon="mdi-firework" border="left" color="white" light>
        <h2>
          {{ item.quantity }}
        </h2>
        <v-divider></v-divider>
        <div>
          <span>{{ item.state }}</span>
        </div>
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    resumeStates() {
      return this.$store.getters.getResume || [];
    },
  },
};
</script>

<style></style>
