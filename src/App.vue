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

export default {
  name: "App",
  components: {
    SubHeader,
    Header,
    ChartsGrid,
    MedicalRecords,
  },
};
</script>
<style lang="scss">
@import "./scss/main.scss";
</style>
