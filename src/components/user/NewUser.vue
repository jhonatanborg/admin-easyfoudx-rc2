<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto">
        <div>
          <h3>Novo usuário</h3>
        </div>
      </v-col>
    </v-row>
    <v-container class="col-sm-6">
      <v-row dense justify="center">
        <v-col cols="12">
          <v-text-field
            dense
            filled
            solo
            v-model="user.nome"
            :rules="rules.name"
            label="Nome"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            label="E-mail"
            solo
            v-model="user.email"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            solo
            v-model="user.senha"
            :append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="rules.password"
            :type="showEye ? 'text' : 'password'"
            label="Senha"
            hint="Insira uma senha com pelo menos 12 caracteres"
            counter
            @click:append="showEye = !showEye"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-alert
            type="error"
            icon="mdi-alert-box-outline"
            dismissible
            :value="error"
          >
            {{ msg }}
          </v-alert>
        </v-col>

        <v-col cols="12">
          <v-btn
            :loading="loading"
            @click="validate()"
            block
            color="#E7AE71"
            class="font-weight-bold"
            >Cadastrar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    resp: {},
    loading: false,
    error: false,
    valid: true,
    lazy: false,
    msg: "",
    user: {},
    terms: false,
    statusSaveRegister: false,
    rules: {
      name: [
        (v) => !!v || "Campo obrigatório",
        (v) => v.length <= 60 || "Limite máximo atingido",
      ],
      email: [
        (v) => !!v || "Campo obrigatório",
        (v) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(v) || "E-mail inválido";
        },
      ],
      password: [
        (v) => !!v || "Campo obrigatório",
        (v) => v.length >= 6 || "Limite mínimo: 6 caracteres",
      ],
    },
    showEye: false,
  }),
};
</script>

<style></style>
