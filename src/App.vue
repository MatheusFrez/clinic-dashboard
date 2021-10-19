<template>
  <v-app>
    <Header />

    <v-main>
      <SubHeader />
      <ChartsGrid />
      <MedicalRecords />
    </v-main>

    <AlertDialog ref="alertDialog" />
  </v-app>
</template>

<script>
import Vue from "vue";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import ChartsGrid from "@/components/charts/ChartsGrid";
import MedicalRecords from "@/components/MedicalRecords";
import AlertDialog from "@/components/AlertDialog";

export default {
  name: "App",
  components: {
    SubHeader,
    Header,
    ChartsGrid,
    MedicalRecords,
    AlertDialog,
  },
  mounted() {
    Vue.prototype.$AlertDialog = this.$refs.alertDialog;
  },
};
</script>
<style lang="scss">
@import "./scss/main.scss";
</style>
