import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Snapshots from "../components/Snapshots/Snapshots.vue"
import Pages from "../components/Pages/Pages"
import Privacy from "../components/Pages/Privacy"

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
  },
  {
    path:"/pages",
    component:Pages,
    children: [
      {
        path:"/pages/privacy",
        name:"privacy",
        component:Privacy,
      }

    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
