import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../components/Login";
import Signup from "../components/Signup";
// import UserStat from "../components/UserStat";
// import Summary from "../components/Summary";
import Exercise from "@/components/Exercise";
import Home from "../components/Home";
import Create from "../components/Create";
import VueClock from '@dangvanthanh/vue-clock';

Vue.use(VueClock);

Vue.use(VueRouter);

const routes = [

  // {
  //   // path: "/",
  //   // name: "Home",
  //   // component: Home,
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  // {
  //   path: "/stat",
  //   name: "Stat",
  //   component: UserStat
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/exercise",
    name: "Exercise",
    component: Exercise
  }
];

const router = new VueRouter({
  routes,
});

export default router;
