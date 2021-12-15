import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Fixture from "../views/Fixture.vue";
import Standings from "../views/Standings.vue";
import League from "../views/League.vue";
import Bookmark from "../views/Bookmark.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/fixture",
    name: "Fixture",
    component: Fixture,
  },
  {
    path: "/standings",
    name: "Standng",
    component: Standings,
  },
  {
    path: "/league",
    name: "League",
    component: League,
  },
  {
    path: "/bookmark",
    name: "Bookmark",
    component: Bookmark,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
