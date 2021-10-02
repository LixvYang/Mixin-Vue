import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Snapshots from "../pages/Snapshots/Snapshots.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
      path:"/home",
      name: "Home",
      component: Home,
  },
  {
      path:"/snapshots",
      name: "Snapshots",
      component: Snapshots,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
