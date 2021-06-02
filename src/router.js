import Router from "vue-router";
import Home from "@/modules/home";
import Profile from "./modules/solution/profile";
import Vue from "vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new Router({
  routes, //将routes传入router里使用
  mode: "history", //链接地址中不再显示#号，显示方式为window.history模式
  linkActiveClass: "active" //选中的路由的class名
});

export default router;
