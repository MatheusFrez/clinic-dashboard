<template>
  <div class="mx-4 my-4 mx-md-16 my-md-8">
    <span class="d-flex mb-4">
      <img
        ref="clipboard-data"
        :src="require('../../assets/clipboard-data.svg')"
        height="25"
      />
      <span ref="grid-title" class="grid-title ml-4">Dashboard</span>
    </span>
    <span ref="grid-description" class="grid-description">
      Estatísticas semanais
    </span>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <GenericChartCard title="Tipos de atendimento">
          <BarChart />
        </GenericChartCard>
      </v-col>
      <v-col cols="12" md="6">
        <GenericChartCard title="Tipos de animais mais atendidos">
          <DoughnutChart />
        </GenericChartCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DoughnutChart from "@/components/charts/DoughnutChart";
import GenericChartCard from "@/components/GenericChartCard";
import BarChart from "@/components/charts/BarChart";

export default {
  name: "Header",
  components: {
    DoughnutChart,
    BarChart,
    GenericChartCard,
  },
};
</script>
<style lang="scss" scoped>
.grid-title {
  font-family: "Titillium Web";
  color: #2e81d4;
  font-size: 1.5rem;
  align-self: center;
}
.grid-description {
  font-family: "Titillium Web";
  font-size: 1.4rem;
}
</style>
