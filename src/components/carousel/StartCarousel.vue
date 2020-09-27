<template>
  <div class="pa-5">
    <v-row justify="space-between">
      <v-col cols="auto">
        <div>
          <h3>Carrousel</h3>
        </div>
      </v-col>
      <v-col cols="auto">
        <v-btn :to="{ name: 'new-carousel' }" rounded color="primary"
          >Novo carrrousel</v-btn
        ></v-col
      >
    </v-row>
    <div>
      <v-row>
        <v-col v-for="n in 6" :key="n" cols="4">
          <v-card
            :to="{ name: 'edit-carousel', params: { id: '15' } }"
            link
            flat
            rounded="15"
            class="pa-5"
          >
            <v-img
              src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            ></v-img>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Easy Fundx </v-list-item-title>

                <v-list-item-subtitle
                  >Crie seu projeto com facilidade, agilidade e segurança
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      details: null,
      button: null,
      link: null,
      image:
        "https://s28943.pcdn.co/wp-content/uploads/2019/09/placeholder.jpg",
    };
  },
};
</script>

<style></style>
