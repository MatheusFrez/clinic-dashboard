<script>
import { Bar } from "vue-chartjs";
import API from "@/API";

export default {
  extends: Bar,
  data: () => ({
    chartData: {
      labels: [],
      datasets: [],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
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
        this.initializeChartData(data);
      } catch (e) {
        console.log("DEU RUIM NO GRÁFICO AQUI PAI", e); //TO DO COLOCAR MENSAGEM ERRO BONITA
      }
    },
    initializeChartData(data) {
      //TO DO REFATORAR PRA FICAR COM OS DIAS DA SEMANA
      data.map((appointment) => {
        const datasetAppointmentIndex = this.chartData.datasets.findIndex(
          (dataset) => dataset.label === appointment.type
        );
        if (datasetAppointmentIndex !== -1) {
          const actualDataValue =
            this.chartData.datasets[datasetAppointmentIndex].data[
              datasetAppointmentIndex
            ];

          this.chartData.datasets[datasetAppointmentIndex].data[
            datasetAppointmentIndex
          ] = actualDataValue + 1;
        } else {
          const actualIndex = this.chartData.labels.length;
          this.chartData.labels.push(appointment.type);
          this.chartData.datasets.push({
            label: appointment.type,
            borderWidth: 1,
            backgroundColor: this.getColorByIndex(actualIndex),
            data: Array(this.chartData.labels.length),
          });
          const datasetAppointmentIndex = this.chartData.datasets.findIndex(
            (dataset) => dataset.label === appointment.type
          );
          this.chartData.datasets[datasetAppointmentIndex].data[
            datasetAppointmentIndex
          ] = 1;
        }
      });
    },
    getColorByIndex(actualIndex) {
      const colors = ["#FBE58D", "#4BC0C0", "#FF6384", "#059BFF"];
      return colors[actualIndex];
    },
  },
};
</script>
