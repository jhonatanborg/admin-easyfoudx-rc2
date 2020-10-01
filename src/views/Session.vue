<template>
  <v-app class="fill-height" dark>
    <div
      class="fill-height 
"
    >
      <v-row no-gutters class="fill-height" fill-height>
        <v-col cols="6">
          <v-img
            height="100%"
            src="https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          >
          </v-img>
        </v-col>
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.color-session {
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
}
</style>
