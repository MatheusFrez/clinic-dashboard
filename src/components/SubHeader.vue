<template>
  <div class="header">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          :src="require('../assets/imagem-dog.png')"
          height="280"
          contain
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        :class="$vuetify.breakpoint.mdAndUp ? 'mt-6' : 'text-center'"
      >
        <h1 class="white--text titulo-text">
          Mês Do <br />
          Cachorro Louco
        </h1>
        <div class="mt-2">
          <span class="amarelo-customizado help-text">Ajude na prevenção!</span>
          <br />
          <br />
          <span class="white--text end-info-text">
            Ofereça sempre as
            <a class="amarelo-customizado"><u>vacinações</u></a> para os tutores
            dos Pet
          </span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
};
</script>

<style lang="css" scoped>
.header {
  background: #2e81d4 0% 0% no-repeat padding-box;
  margin-top: 8vh;
}
.amarelo-customizado {
  color: #fbe58d;
}
.titulo-text {
  font-family: "Naughty Monster";
  text-transform: uppercase;
  font-size: 4.5rem;
  line-height: 1;
}
.help-text {
  font-family: "Titillium Web";
  font-size: 1.5rem;
}
.end-info-text {
  font-family: "Titillium Web";
  font-size: 1.2rem;
}
</style>
