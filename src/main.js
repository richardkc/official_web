import Vue from "vue";
import router from "./router";
import ElementUI from "element-ui";
import VueLazyLoad from "vue-lazyload";
import _ from "lodash";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;
Vue.prototype._ = _;
Vue.use(ElementUI);

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
