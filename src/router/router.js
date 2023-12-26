import MainPage from "@/pages/MainPage.vue";
import Cart from "@/pages/Cart.vue";
import Products from "@/pages/Products.vue";
import Account from "@/pages/Account.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/account",
    component: Account,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
