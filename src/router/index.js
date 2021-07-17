import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../components/Login";
import Signup from "../components/Signup";
import UserStat from "../components/UserStat";

Vue.use(VueRouter);

const routes = [
  {
    // path: "/",
    // name: "Home",
    // component: Home,
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/stat",
    name: "Stat",
    component: UserStat
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
