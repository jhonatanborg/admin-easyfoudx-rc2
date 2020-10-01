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
        <v-col v-for="(item, key) in carousel" :key="key" cols="3">
          <v-card
            @click="setCarousel(item)"
            link
            flat
            rounded="15"
            class="pa-5"
          >
            <v-img
              height="200px"
              :aspect-ratio="16 / 9"
              :src="'https://api.easyfundx.com/images/carrossel/' + item.imagem"
            ></v-img>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="item.titulo"> </v-list-item-title>

                <v-list-item-subtitle v-text="item.mensagem">
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
import CarouselService from "@/services/carousel/CarouselService";

export default {
  mounted() {
    CarouselService.listCarousel().then((response) => {
      this.$store.commit("setCarouselList", response.data);
    });
  },
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
  computed: {
    carousel() {
      return this.$store.state.carouselList || [];
    },
  },
  methods: {
    setCarousel(item) {
      this.$store.commit("setCarousel", item);
      this.$router.push({ name: "edit-carousel", query: { id: item.id } });
    },
  },
};
</script>

<style></style>
