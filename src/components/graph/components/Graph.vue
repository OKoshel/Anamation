<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "27",
          "53",
          "61",
          "58",
          "30",
          "63",
          "55",
          "63",
          "71",
          "76",
          "67",
          "88",
          "78",
          "90",
        ],
        datasets: [
          {
            data: [27, 53, 61, 58, 30, 63, 55, 63, 71, 76, 67, 88, 78, 90],
            backgroundColor: "#E63E3A",
            borderWidth: 1,
            borderColor: "#fff",
            barPercentage: 1.3,
            datalabels: {
              color: "#E63E3A",
              anchor: "end",
              align: "bottom",
              clamp: true,
              offset: -40,
            },
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
            ticks: {
              max: 33,
              display: false,
              beginAtZero: true,
            },
          },
          y: {
            beginAtZero: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>
