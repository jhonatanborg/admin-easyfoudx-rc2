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
          flat
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
          :src="image"
          reverse-transition="fade-transition"
          transition="fade-transition"
          gradient="to top right, rgba(120,115,101,.33), rgba(28,32,72,.7)"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-center">
              <h2 class="title-easy" v-text="title"></h2>
              <h3 class="my-3 pa-5" v-text="details"></h3>
              <v-btn
                color="white"
                depressed
                class="black--text"
                :href="link"
                v-text="button"
              ></v-btn>
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <v-row dense>
        <v-col cols="6">
          <v-text-field
            solo
            dense
            flat
            label="Digite o titulo"
            v-model="title"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            solo
            dense
            flat
            label="Digite a descrição"
            v-model="details"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            solo
            flat
            dense
            label="Adicione o link da campanha"
            v-model="link"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            solo
            dense
            flat
            label="Titulo do botão"
            v-model="button"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-file-input
            label="Escolha uma imagem"
            filled
            solo
            dense
            v-model="image"
            flat
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-col>
        <v-col cols="4">
          <v-btn block rounded color="primary">Adicionar</v-btn>
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
