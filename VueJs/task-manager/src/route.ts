import { createRouter, createWebHistory } from "vue-router";
import OnGoing from "./page/OnGoing.vue";
import All from "./page/All.vue";
import Finished from "./page/Finished.vue";
import Corbeille from "./page/Corbeille.vue";
import Add from "./page/Add.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: All,
    },
    {
      path: "/onGoing",
      component: OnGoing,
    },
    {
      path: "/finished",
      component: Finished,
    },
    {
      path: "/corbeille",
      component: Corbeille,
    },
    {
      path: "/add",
      component: Add,
    },
  ],
});
