<template>
  <div class="header">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          :src="require('../assets/imagem-dog.png')"
          height="330"
          contain
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        :class="$vuetify.breakpoint.mdAndUp ? 'mt-6' : 'text-center'"
      >
        <h1 ref="title" class="white--text titulo-text">
          Mês Do <br />
          Cachorro Louco
        </h1>
        <div ref="description" class="mt-2 mb-4">
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

<style lang="scss" scoped>
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
  font-size: 5rem;
  line-height: 1.2;
  letter-spacing: 0.2rem;
}
.help-text {
  font: normal normal 600 "Titillium Web";
  font-size: 1.5rem;
}
.end-info-text {
  font: normal normal normal "Titillium Web";
  font-size: 1.2rem;
}
</style>
