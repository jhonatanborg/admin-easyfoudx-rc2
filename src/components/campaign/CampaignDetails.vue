<template>
  <div>
    <div class="col-sm-12 ">
      <v-row justify="end">
        <v-col cols="auto">
          <v-btn
            :to="{ name: 'campaigns' }"
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
      <v-card rounded="15" height="300px" flat>
        <v-img
          height="100%"
          src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        ></v-img>
      </v-card>
      <v-row dense align="center" justify="space-between">
        <v-col cols="auto">
          <div class="py-5">
            <h4>Ajude a Cata-Tudo Recicla (Carlão Catador)</h4>
            <div>
              <span>Carlão Catador</span>
            </div>
          </div>
        </v-col>
        <v-col cols="auto">
          <v-chip
            small
            link
            color="green accent-3
"
            >Publicada</v-chip
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col v-for="n in 4" :key="n" cols="3">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon class="grey lighten-1" dark>
                mdi-calendar-check-outline
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Duração</v-list-item-title>

              <v-list-item-subtitle>20 dias</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <div>
        <div><span>Descrição</span></div>
        <div class="">
          <small
            >isso explica mais esta prova de amor dada pela torcida, que
            contribuiu ao longo da terceira etapa até alcançarmos mais de R$1,6
            milhão em doações, inclusive por meio de diversas empresas que se
            engajaram na campanha com a demonstração de força de todos os
            vascaínos e vascaínas. Seguimos Rumo ao Nosso CT neste quarto e
            último objetivo da primeira fase, e contamos com você para
            construirmos as edificações do futebol profissional.</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
