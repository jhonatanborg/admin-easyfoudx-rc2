<template>
  <div class="pa-5">
    <v-row justify="space-between">
      <v-col cols="auto">
        <div>
          <h3>Categorias</h3>
        </div>
      </v-col>
      <v-col cols="auto">
        <v-btn rounded color="primary">Adicionar</v-btn>
      </v-col>
    </v-row>

    <v-divider class="my-3"></v-divider>
    <v-row>
      <v-col v-for="n in 16" :key="n" cols="3">
        <v-card flat>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon class="grey lighten-1" dark>
                mdi-calendar-check-outline
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Animais</v-list-item-title>

              <v-list-item-subtitle>20 campanhas</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
