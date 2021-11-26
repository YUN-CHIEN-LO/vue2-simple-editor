import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/ck-editor",
    name: "CkEditor",
    component: () => import("../views/CkEditor.vue"),
  },
  {
    path: "/tiny-mce",
    name: "TinyMce",
    component: () => import("../views/TinyMce.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
