import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Standings from "../views/Standings.vue";
import League from "../views/League.vue";
import Bookmark from "../views/Bookmark.vue"
import Highlight from "../components/Highlight.vue"

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
    path: "/standings",
    name: "Standings",
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
  {
    path: "/highlight",
    name: "Highlight",
    component: Highlight,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
  (to.name == 'Login' || to.name == 'Register') &&
  localStorage.access_token
  ) {
  next({ name: 'Home' });
  } else {
  next();
  }
  
  if (to.name == 'Bookmark' && !localStorage.getItem("token")) {
  next({ name: 'Login' });
  } else {
  next();
  }
})
export default router;
