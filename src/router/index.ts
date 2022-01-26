import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AcRate from "../views/AcRate.vue";
import Flow from "../views/Flow.vue";
import MoveConcept from "../views/MoveConcept.vue";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/ac_rate",
    name: "AcRate",
    component: AcRate,
  },
  {
    path: "/flow",
    name: "Flow",
    component: Flow,
  },
  {
    path: "/move_concept",
    name: "MoveConcept",
    component: MoveConcept,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
