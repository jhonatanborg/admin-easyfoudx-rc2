<template>
  <div class="container ">
    <div class="wrapper">
      <v-card flat class="pa-5 ma-5">
        <div class="pt-5 text-center">
          <v-img width="50%" src="@/assets/easy-logo-black.png"></v-img>
        </div>
        <v-form
          aria-autocomplete="off"
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
        >
          <v-card-text>
            <v-container>
              <v-row no-gutters dense>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    outlined
                    dense
                    autocomplete="new-password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    outlined
                    dense
                    v-model="user.senha"
                    :type="passwordType"
                    label="Senha"
                    append-icon="mdi-eye"
                    @click:append="hidePassword = !hidePassword"
                    browser-autocomplete="new-password"
                  ></v-text-field>
                  <v-alert v-if="messageError" type="error">{{
                    messageError
                  }}</v-alert>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    block
                    dark
                    :disabled="!valid"
                    @click="validate"
                    :loading="statusSaveRegister"
                    color="grey darken-4"
                    >Entrar</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <div class="container wrap-button"></div>
        </v-form>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    valid: true,
    lazy: false,
    statusSaveRegister: false,
    user: {
      email: "",
      senha: "",
    },
    rules: {
      email: [
        (v) => !!v || "Campo obrigatório",
        (v) => v.length <= 60 || "Limite máximo atingido",
        (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
      ],
      password: [(v) => !!v || "Campo obrigatório"],
    },
    hidePassword: true,
    messageError: "",
  }),
  computed: {
    passwordType() {
      return this.hidePassword ? "password" : "text";
    },
  },
  methods: {
    validate() {
      this.statusSaveRegister = true;
      this.$store
        .dispatch("login", this.user)
        .then(() => {
          this.$store
            .dispatch("verifyAdmin")
            .then(() => {
              this.$router.push({ name: "index" });
              this.messageError = "";
            })
            .catch((error) => {
              if (error.response.status === 403) {
                this.messageError =
                  "Você não tem permissão pra acessar o sistema";
              } else {
                this.messageError = "Ocorreu um erro, tente novamente";
              }
            });
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) {
            this.messageError = "Senha inválida";
          } else if (error.response.status === 400) {
            this.messageError = "E-mail e/ou senha inválidos";
          } else {
            this.messageError = "Erro desconhecido";
          }
        })
        .finally(() => {
          this.statusSaveRegister = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 10rem 0;
  width: 500px;
  // background-color: blue;
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
