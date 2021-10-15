<template>
  <v-card>
    <v-card-title class="justify-center title-card">
      Tipos de animais mais atendidos
    </v-card-title>
    <v-card-text>
      <PieChart />
    </v-card-text>
  </v-card>
</template>

<script>
import PieChart from "@/components/charts/PieChart";
// TO DO CRIAR UM CARD GENÉRICO QUE TEM UM SLOT E UM TITLE DE PROPS

export default {
  name: "PieChartCard",
  components: {
    PieChart,
  },
};
</script>
<style lang="scss" scoped>
.title-card {
  font-family: "Titillium Web";
}
</style>
