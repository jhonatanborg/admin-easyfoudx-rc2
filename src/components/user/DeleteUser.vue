<template>
  <v-dialog
    v-model="value"
    scrollable
    persistent
    max-width="500px"
    transition="dialog-transition"
  >
    <v-card class="pa-5">
      <v-row justify="space-between">
        <v-col cols="auto">
          <div>
            <h3>Deletar usuário</h3>
          </div>
        </v-col>
        <v-col cols="auto">
          <v-btn
            outlined
            icon
            @click="$emit('modal-value', false)"
            color="error"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div class="py-5">
        <span
          >Tem certeza que deseja excluir o usuário
          <b class="text-capitalize">{{ user.nome }}</b>
          ?</span
        >
      </div>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="6">
          <v-btn
            @click="$emit('modal-value', false)"
            block
            depressed
            color="grey lighten-2"
            >Cancelar</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn block @click="deleteUser()" color="error">Deletar</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import UserService from "@/services/user/UserService";

export default {
  props: {
    value: Boolean,
  },
  computed: {
    user() {
      return this.$store.state.userDelete || {};
    },
  },
  methods: {
    deleteUser() {
      this.$store.commit("setloader", true);

      if (this.user) {
        UserService.deleteUser(this.user.id)
          .then((resp) => {
            console.log(resp);
            this.$emit("modal-value", false);
          })
          .catch((error) => {
            this.$emit("modal-value", false);

            console.log(error);
          });
      }
    },
  },
};
</script>

<style></style>
