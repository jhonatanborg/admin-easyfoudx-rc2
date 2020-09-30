<template>
  <div class="col-sm-6">
    <v-card :loading="loading" outlined>
      <div class="pa-5">
        <div class="py-1">
          <h2 class="px-2">
            Olá! Para continuar, faça o login ou cadastre-se
          </h2>
        </div>
        <div class="pa-1">
          <div class="pt-4">
            <v-text-field
              outlined
              autocomplete="new-password"
              label="E-mail ou telefone"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              outlined
              autocomplete="new-password"
              label="Senha"
            ></v-text-field>
          </div>

          <div></div>
          <div id="buttons-login">
            <div>
              <v-btn block color="#765eda">Entrar</v-btn>
            </div>
            <div class="mt-3">
              <span>Ainda não possui uma conta </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
