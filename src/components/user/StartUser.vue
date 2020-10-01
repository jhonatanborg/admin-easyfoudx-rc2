<template>
  <v-container>
    <div class="py-3">
      <h3>Novo usuário</h3>
      <v-divider class="my-3"></v-divider>
    </div>
    <v-row dense>
      <v-col cols="3">
        <v-text-field
          v-model="user.nome"
          dense
          flat
          filled
          solo
          label="Nome"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="user.email"
          dense
          flat
          label="E-mail"
          solo
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="user.senha"
          label="Senha"
          flat
          dense
          solo
        ></v-text-field>
      </v-col>

      <v-col cols="3">
        <v-btn
          :loading="loading"
          block
          @click="validate"
          color="primary"
          class="font-weight-bold"
          >Cadastrar
        </v-btn>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="2">
        <div>
          <h3>Usuários</h3>
        </div>
      </v-col>
      <v-col cols="auto"
        ><v-chip
          @click="$store.commit('setTypeUser', null)"
          link
          color="grey lighten-5"
          >Todos</v-chip
        ></v-col
      >
      <v-col cols="auto"
        ><v-chip
          @click="$store.commit('setTypeUser', 1)"
          link
          color="grey lighten-5"
          >Administrador</v-chip
        ></v-col
      >
      <v-col cols="auto"
        ><v-chip
          @click="$store.commit('setTypeUser', 0)"
          link
          color="grey lighten-5"
          >Usuário padrão</v-chip
        ></v-col
      >
    </v-row>
    <v-divider class="my-3"></v-divider>

    <v-list subheader>
      <v-list-item v-for="(item, key) in users" :key="key">
        <v-list-item-content>
          <v-list-item-title
            v-text="item.nome"
            class="text-capitalize"
          ></v-list-item-title>
          <v-list-item-subtitle v-text="item.email"></v-list-item-subtitle>
        </v-list-item-content>
        <v-chip :color="item.color" text-color="white">
          {{ item.usuario }}
        </v-chip>
        <v-list-item-action @click="deleteDialog(item)">
          <v-btn icon>
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <DeleteUser @modal-value="closeDialog" :value="modal" />
  </v-container>
</template>

<script>
import UserService from "@/services/user/UserService";
import DeleteUser from "@/components/user/DeleteUser.vue";
export default {
  components: {
    DeleteUser,
  },
  mounted() {
    this.getUser();
  },
  data() {
    return {
      loading: false,
      user: {},
      userDelete: null,
      modal: false,
    };
  },
  computed: {
    users() {
      let result = [];
      if (this.$store.state.users) {
        result = this.$store.state.users;
      }
      if (this.$store.state.typeFilterUser != null) {
        result = this.$store.state.users.filter((user) => {
          return user.admin == this.$store.state.typeFilterUser;
        });
      }

      return result.sort((a, b) => b.id - a.id);
    },
  },
  methods: {
    closeDialog(value) {
      this.modal = value;
      this.getUser();
      this.$store.commit("setloader", false);
    },
    getUser() {
      UserService.getUsers()
        .then((resp) => {
          resp.data.map((item) => {
            if (item.admin == 0) {
              item.usuario = "Usuário padrão";
              item.color = "primary";
            } else if (item.admin == 1) {
              item.usuario = "Administrador";
              item.color = "black";
            }
          });
          this.$store.commit("setUsers", resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validate() {
      this.$store.commit("setloader", true);

      this.loading = true;
      UserService.postUser(this.user)
        .then((response) => {
          console.log(response);
          this.$store.commit("setloader", false);
          if (response.status === 200) {
            this.loading = false;
            this.$store.commit("setloader", false);
          }
          this.getUser();
          this.loading = false;
        })
        .catch((error) => {
          this.getUser();
          this.loading = false;
          this.$store.commit("setloader", false);
          console.log("Error", error);
        });
      // this.$refs.form.reset();
    },
    deleteDialog(item) {
      this.$store.commit("setUserDelete", item);
      this.userDelete = item;
      this.modal = true;
    },
  },
};
</script>

<style></style>
