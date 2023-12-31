import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router.js";
import store from "@/store/index.js";
import CanvasJSChart from "@canvasjs/vue-charts";

const app = createApp(App);

app.use(store).use(router).use(CanvasJSChart).mount("#app");
