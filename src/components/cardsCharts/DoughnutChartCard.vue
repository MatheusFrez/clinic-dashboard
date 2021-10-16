<template>
  <v-card>
    <v-card-title class="justify-center title-card">
      Tipos de animais mais atendidos
    </v-card-title>
    <v-card-text>
      <DoughnutChart />
    </v-card-text>
  </v-card>
</template>

<script>
import DoughnutChart from "@/components/charts/DoughnutChart";
// TO DO CRIAR UM CARD GENÉRICO QUE TEM UM SLOT E UM TITLE DE PROPS

export default {
  name: "DoughnutChartCard",
  components: {
    DoughnutChart,
  },
};
</script>
<style lang="scss" scoped>
.title-card {
  font-family: "Titillium Web";
}
</style>
