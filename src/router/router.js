import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Snapshots from "../components/Snapshots/Snapshots.vue"
import Pages from "../components/Pages/Pages"
import Privacy from "../components/Pages/Privacy"
import Terms from "../components/Pages/Terms"
import Jobs from "../components/Jobs/Jobs"

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
      },
      {
        path:"/pages/terms",
        name:"terms",
        component:Terms,
      },
      {
        path:"/jobs",
        name:"jobs",
        component:Jobs,
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
