<template>
  <v-app>
    <Header />

    <v-main>
      <SubHeader />
      <ChartsGrid />
      <MedicalRecords />
    </v-main>
  </v-app>
</template>

<script>
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import ChartsGrid from "@/components/charts/ChartsGrid";
import MedicalRecords from "@/components/MedicalRecords";
//import API from "@/API";

export default {
  name: "App",
  components: {
    SubHeader,
    Header,
    ChartsGrid,
    MedicalRecords,
  },
  // async mounted() {
  //   const teste = await API.listAnimal();
  //   console.log("TESTE", teste);
  // }, //TO DO REMOVER ESSE TESTE DE REQUISIÇÃO
};
</script>
<style lang="scss">
@import "./scss/main.scss";
</style>
