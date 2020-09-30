<template>
  <div class="pa-5">
    <v-row justify="space-between">
      <v-col cols="auto">
        <div>
          <h3>Carrousel</h3>
        </div>
      </v-col>
      <v-col cols="auto">
        <v-btn
          :to="{ name: 'start-carousel' }"
          outlined
          small
          color="primary"
          right
        >
          Fechar
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <div>
      <v-carousel
        hide-delimiters
        :next-icon="false"
        :prev-icon="false"
        height="300px"
      >
        <v-carousel-item
          :src="
            imageUrl
              ? imageUrl
              : 'https://api.easyfundx.com/images/carrossel/' + carousel.imagem
          "
          width="100%"
          reverse-transition="fade-transition"
          transition="fade-transition"
          gradient="to top right, rgba(120,115,101,.33), rgba(28,32,72,.7)"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-center">
              <h2 class="title-easy" v-text="carousel.titulo"></h2>
              <h3 class="my-3 pa-5" v-text="carousel.mensagem"></h3>
              <v-btn
                color="white"
                depressed
                class="black--text"
                :href="carousel.botao_link"
                v-text="carousel.botao_texto"
              ></v-btn>
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <v-row dense>
        <v-col cols="6">
          <small>Titulo</small>
          <v-text-field
            solo
            dense
            flat
            label="Digite o titulo"
            v-model="carousel.titulo"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <small>Link redirecionamento</small>

          <v-text-field
            solo
            flat
            dense
            label="Adicione o link da campanha"
            v-model="carousel.botao_link"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <small>Botão</small>
          <v-text-field
            solo
            dense
            flat
            label="Titulo do botão"
            v-model="carousel.botao_texto"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <small>Imagem de fundo</small>
          <v-file-input
            label="Escolha uma imagem"
            solo
            dense
            @change="onChange"
            flat
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-col>

        <v-col cols="4">
          <v-btn block rounded color="primary">Confirmar</v-btn>
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
      image: null,
      imageUrl: null,
    };
  },
  computed: {
    carousel() {
      return this.$store.state.carouselSelected || {};
    },
  },
  methods: {
    onChange(e) {
      this.imageUrl = URL.createObjectURL(e);
    },
  },
};
</script>

<style></style>
