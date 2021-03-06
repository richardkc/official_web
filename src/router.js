import Router from "vue-router";
import Vue from "vue";
import Home from "@/modules/home";
import Introduction from "@/modules/home/introduction";
import Aviation from "@/modules/solution/aviation";
import Logistics from "@/modules/solution/logistics";
import RailTransit from "@/modules/solution/railTransit";
import Building from "@/modules/solution/building";
import SteamShip from "@/modules/solution/steamShip";
import Supermarket from "@/modules/solution/supermarket";
import SuccessfulCase from "@/modules/successfulCase/successfulCase";
import SuccessfulFleet from "@/modules/successfulCase/successfulFleet";
import SuccessfulPlane from "@/modules/successfulCase/successfulPlane";
import SuccessfulRailTransit from "@/modules/successfulCase/successfulRailTransit";
import SuccessfulSteamShip from "@/modules/successfulCase/successfulSteamShip";
import SuccessfulSupermarket from "@/modules/successfulCase/successfulSupermarket";
import RDCenter from "@/modules/RDCenter/RDCenter";
import PlaneMedia from "@/modules/mediaDesign/planeMedia";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "first",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/introduction",
    name: "Introduction",
    component: Introduction
  },
  {
    path: "/aviation",
    name: "Aviation",
    component: Aviation
  },
  {
    path: "/logistics",
    name: "Logistics",
    component: Logistics
  },
  {
    path: "/railTransit",
    name: "RailTransit",
    component: RailTransit
  },
  {
    path: "/building",
    name: "Building",
    component: Building
  },
  {
    path: "/steamShip",
    name: "SteamShip",
    component: SteamShip
  },
  {
    path: "/supermarket",
    name: "Supermarket",
    component: Supermarket
  },
  {
    path: "/successfulCase",
    name: "SuccessfulCase",
    component: SuccessfulCase
  },
  {
    path: "/successfulFleet",
    name: "SuccessfulFleet",
    component: SuccessfulFleet
  },
  {
    path: "/successfulPlane",
    name: "SuccessfulPlane",
    component: SuccessfulPlane
  },
  {
    path: "/successfulRailTransit",
    name: "SuccessfulRailTransit",
    component: SuccessfulRailTransit
  },
  {
    path: "/successfulSteamShip",
    name: "SuccessfulSteamShip",
    component: SuccessfulSteamShip
  },
  {
    path: "/successfulSupermarket",
    name: "SuccessfulSupermarket",
    component: SuccessfulSupermarket
  },
  {
    path: "/RDCenter",
    name: "RDCenter",
    component: RDCenter
  },
  {
    path: "/planeMedia",
    name: "PlaneMedia",
    component: PlaneMedia
  }
];

const router = new Router({
  routes, //???routes??????router?????????
  mode: "history", //???????????????????????????#?????????????????????window.history??????
  linkActiveClass: "active" //??????????????????class???
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
