<template>
  <div class="pa-5">
    <div class="py-3">
      <h3>Nova categoria</h3>
      <v-divider class="my-3"></v-divider>
    </div>
    <v-row dense justify="start">
      <v-col cols="6">
        <v-text-field solo label="Titulo" dense flat></v-text-field>
      </v-col>
      <v-col cols="3"> <v-btn color="primary">Adicionar</v-btn></v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div>
          <h3>Categorias</h3>
          <v-divider class="my-3"></v-divider>
        </div>
      </v-col>
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
