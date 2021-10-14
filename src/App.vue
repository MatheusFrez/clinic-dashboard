<template>
  <v-app>
    <Header />

    <v-main>
      <SubHeader />
    </v-main>
  </v-app>
</template>

<script>
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
//import API from "@/API";

export default {
  name: "App",
  components: {
    SubHeader,
    Header,
  },
  // async mounted() {
  //   const teste = await API.listAnimal();
  //   console.log("TESTE", teste);
  // }, //TO DO REMOVER ESSE TESTE DE REQUISIÇÃO
};
</script>
