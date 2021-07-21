import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

import Login from "../components/Login";
import Signup from "../components/Signup";
import UserStat from "../components/UserStat";
import Summary from "../components/Summary";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/stat",
    name: "Stat",
    component: UserStat,
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
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

// Setup beforeEach hook to check the logged in sync the logging states with backend
router.beforeEach(async (to, from, next) => {
  // get login state using whoami and axios
  let response = await Vue.axios.get("/api/whoami");
  // response.data is our payload
  store.dispatch("setLoggedInUser", response.data);
  let isLoggedIn = store.state.isLoggedIn;
  // if the name of the router is not Login, it needs authorization to access the page
  if (to.name !== "Login" && !isLoggedIn) {
    // redirect to login page
    next({ name: "Login" });
  } else {
    // otherwise, let go
    next();
  }
});

export default router;
