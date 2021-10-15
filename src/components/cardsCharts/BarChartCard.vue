<template>
  <v-card>
    <v-card-title class="justify-center title-card">
      Tipos de atendimento
    </v-card-title>
    <v-card-text>
      <BarChart />
    </v-card-text>
  </v-card>
</template>

<script>
import BarChart from "@/components/charts/BarChart";
// TO DO CRIAR UM CARD GENÉRICO QUE TEM UM SLOT E UM TITLE DE PROPS

export default {
  name: "BarChartCard",
  components: {
    BarChart,
  },
};
</script>
<style lang="scss" scoped>
.title-card {
  font-family: "Titillium Web";
}
</style>
