<template>
  <div>
    <div class="chartCard">
      <div class="chartBox">
        <canvas ref="myChart" class="w-100 chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartDeferred from "chartjs-plugin-deferred";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
Chart.register(ChartDeferred);

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { gsap } from "gsap";

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
  data() {
    return {
      chartVersion: Chart.version,
    };
  },
  mounted() {
    this.renderChart();
    this.scrollGraph();
  },
  methods: {
    scrollGraph() {
      const chartElement = this.$refs.myChart;
      gsap.to(chartElement, {
        scrollTrigger: {
          trigger: ".chartCard",
          start: 1600,
          end: 2000,
          scrub: true,
        },
      });
    },
    renderChart() {
      const data = {
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
            backgroundColor: ["#E63E3A"],
            borderWidth: 1,
            borderColor: "#fff",
            barPercentage: 1.3,
            datalabels: {
              color: "#E63E3A",
              anchor: "end",
              align: "bottom",
              clamp: true,
              offset: -40,
              overflow: "allow",
              plotOptions: "outside",
              crop: false,
            },
          },
        ],
      };

      const config = {
        type: "bar",
        data,
        options: {
          animation: {
            // onComplete: () => {
            //   delayed: true;
            // },
            delay: (context) => {
              let delay = 0;
              if (context.type === "data" && context.mode === "default") {
                delay = context.dataIndex * 100;
              }
              return delay;
            },
          },
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
          responsive: true,

          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };

      new Chart(this.$refs.myChart, config);
    },
  },
};
</script>

<style lang="sass" scoped>

.chartMenu p
  padding: 10px
  font-size: 20px

.chartBox
  width: 100%
  background: white

.chart
  height: 100%
</style>
