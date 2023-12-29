import Home from "@/pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  // {
  //   path: "/cart",
  //   component: Cart,
  // },
  // {
  //   path: "/products",
  //   component: Products,
  // },
  // {
  //   path: "/account",
  //   component: Account,
  // },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
