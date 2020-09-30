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
      <v-img
        height="300px"
        :src="imageUrl"
        gradient="to top right, rgba(120,115,101,.33), rgba(28,32,72,.7)"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-center">
            <h2 class="title-easy" v-text="title"></h2>
            <h3 class="my-3 pa-5" v-text="details"></h3>
            <v-btn
              v-if="button"
              color="white"
              depressed
              class="black--text"
              v-text="button"
            ></v-btn>
          </div>
        </v-row>
      </v-img>

      <v-row class="pa-5" dense>
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
        <v-col cols="6">
          <v-file-input
            label="Escolha uma imagem"
            filled
            solo
            @change="onChange"
            dense
            v-model="image"
            flat
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-col>
        <v-col cols="4">
          <v-btn
            :loading="loading"
            @click="validate"
            block
            rounded
            color="primary"
            >Adicionar</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CarouselService from "@/services/carousel/CarouselService";

export default {
  data() {
    return {
      loading: false,
      title: null,
      details: null,
      button: null,
      link: null,
      image: null,
      imageUrl:
        "https://s28943.pcdn.co/wp-content/uploads/2019/09/placeholder.jpg",
    };
  },
  methods: {
    validate() {
      this.$store.commit("setloader", true);
      const formData = new FormData();
      formData.append("titulo", this.title);
      formData.append("mensagem", " ");
      formData.append("botao_texto", this.button);
      formData.append("botao_link", this.link);
      formData.append("imagem", this.image);

      this.loading = true;
      CarouselService.postCarousel(formData)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 409) {
            console.log("Atencão!", "O carrossel já possui 4 items", "warning");
            this.loading = false;
            this.$store.commit("setloader", false);
          } else {
            console.log("Erro", "Não foi possível criar o carrosel", "error");
            this.loading = false;
            this.$store.commit("setloader", false);
          }
        })
        .finally(() => {
          this.loading = false;
          this.$store.commit("setloader", false);
        });
    },
    onChange(e) {
      console.log(e);
      this.imageUrl = URL.createObjectURL(e);
    },
  },
};
</script>

<style></style>
