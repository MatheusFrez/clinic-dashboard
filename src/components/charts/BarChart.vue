<script>
import { Bar } from "vue-chartjs";
import API from "@/API";
import { DateTime } from "luxon";
import { mapAppointmentType } from "@/utils";

export default {
  extends: Bar,
  data: () => ({
    colors: ["#059BFF", "#FF6384", "#4BC0C0", "#FBE58D"],
    chartData: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
      datasets: [],
    },
    options: {
      scales: {
        yAxes: [
          {
            stacked: true,
          },
        ],
        xAxes: [
          {
            stacked: true,
            categoryPercentage: 0.5,
            barPercentage: 1,
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
        await this.initializeChartData(data);
      } catch (e) {
        console.log("DEU RUIM NO GRÁFICO AQUI PAI", e); //TO DO COLOCAR MENSAGEM ERRO BONITA
      }
    },
    addChartDataDataset(appointment) {
      this.chartData.datasets.push({
        type: "bar",
        label: mapAppointmentType(appointment.type),
        backgroundColor: this.colors[this.chartData.datasets.length],
        data: Array(7).fill(0),
      });
    },
    initializeChartData(data) {
      data.map((appointment) => {
        const dataAppointment = new Date(appointment.created_at);
        const dayOfWeekIndex = DateTime.fromJSDate(dataAppointment).weekday - 1;

        const indexTypeOfAppointmentOnDatasets =
          this.chartData.datasets.findIndex(
            (appoint) => appoint.label === mapAppointmentType(appointment.type)
          );

        if (indexTypeOfAppointmentOnDatasets === -1) {
          this.addChartDataDataset(appointment);
          const lastDataseIndex = this.chartData.datasets.length - 1;
          this.chartData.datasets[lastDataseIndex].data[dayOfWeekIndex] = 1;
        } else {
          const actualValueDayOfWeek =
            this.chartData.datasets[indexTypeOfAppointmentOnDatasets].data[
              dayOfWeekIndex
            ];

          this.chartData.datasets[indexTypeOfAppointmentOnDatasets].data[
            dayOfWeekIndex
          ] = actualValueDayOfWeek + 1;
        }
      });
    },
  },
};
</script>
