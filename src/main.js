import Vue from "vue";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
// import { Carousel } from "element-ui";
import element from "./element/index";
import VueLazyLoad from "vue-lazyload";
import _ from "lodash";
import App from "./App.vue";
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;
Vue.prototype._ = _;
// Vue.component(Carousel.name, Carousel);
Vue.use(element);

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: "",
  loading: "",
  attempt: 2
});

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
});
