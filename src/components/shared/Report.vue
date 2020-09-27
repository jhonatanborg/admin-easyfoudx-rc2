<template>
  <v-layout class="d-flex justify-space-between ">
    <v-flex class="mr-3" v-for="n in 4" :key="n">
      <v-alert dense icon="mdi-firework" border="left" color="white" light>
        <h2>
          152
        </h2>
        <v-divider></v-divider>
        <div>
          <span>Campanha pendentes</span>
        </div>
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style></style>
