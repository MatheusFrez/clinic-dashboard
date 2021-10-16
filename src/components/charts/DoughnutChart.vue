<script>
import { Doughnut } from "vue-chartjs";
import API from "@/API";
import { mapAnimalType } from "@/utils";

export default {
  extends: Doughnut,
  data: () => ({
    chartData: {
      labels: [],
      datasets: [
        {
          borderWidth: 1,
          borderColor: [
            "059BFF",
            "#FF6384",
            "#4BC0C0",
            "#475660",
            "#FBE58D",
            "#0B2239",
          ],
          backgroundColor: [
            "059BFF",
            "#FF6384",
            "#4BC0C0",
            "#475660",
            "#FBE58D",
            "#0B2239",
          ],
          data: [],
        },
      ],
    },
    options: {
      legend: {
        display: true,
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  async mounted() {
    await this.init();
    this.renderChart(this.chartData, this.options);
  },
  methods: {
    async init() {
      try {
        const preData = await API.getAppointments({ skip: 0, limit: 50 });
        const data = preData.data;
        await this.initializeChartData(data);
      } catch (e) {
        console.log("DEU RUIM NO GRÁFICO AQUI PAI", e); //TO DO COLOCAR MENSAGEM ERRO BONITA
      }
    },
    prepareChartData(typesOfAnimals) {
      let typesOfAnimalsReady = [];
      typesOfAnimals.map((animal) => {
        const indexTypeOfAnimal = typesOfAnimalsReady.findIndex(
          (type) => type.key === animal.animal_type
        );
        if (indexTypeOfAnimal === -1) {
          typesOfAnimalsReady.push({
            key: animal.animal_type,
            count: 1,
          });
        } else {
          typesOfAnimalsReady[indexTypeOfAnimal].count += 1;
        }
      });

      const labelsChart = typesOfAnimalsReady.map((animal) =>
        mapAnimalType(animal.key)
      );
      const datasetsChart = typesOfAnimalsReady.map((animal) => animal.count);
      this.chartData.labels = labelsChart;
      this.chartData.datasets[0].data = datasetsChart;
    },
    async initializeChartData(data) {
      try {
        const typesOfAnimals = await Promise.all(
          data.map(async (appointment) => {
            const animal = await API.getAnimal(appointment.animal_id);
            return animal.data;
          })
        );
        this.prepareChartData(typesOfAnimals);
      } catch (e) {
        console.log("DEU RUIM NO PIE CHART", e); //TO DO COLOCAR MENSAGEM ERRO BONITA
      }
    },
  },
};
</script>
