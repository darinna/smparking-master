import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Config from '../views/Config.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:'/config',
    name:'config',
    component:Config
  },
  {
    path: '/dashboard',
    name:'dashboard',
    component:Dashboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
