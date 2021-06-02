<template>
  <div>
    <Mobile-tab v-if="!isPC" :tabInfo="tabInfo"></Mobile-tab>
    <Tab v-else-if="isPC" :tabInfo="tabInfo"></Tab>
    <router-view :isPC="isPC"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Tab from "@/layout/tab";
import MobileTab from "./layout/mobileTab";
import store from "@/store/warehouse";
import methods from "@/utils/basic";
import Footer from "@/layout/footer";

methods.fontSizeChange();

export default {
  name: "App",
  data() {
    return {
      tabInfo: {
        tabs: store.tabs
      },
      isPC: methods.isPC()
    };
  },
  components: {
    Tab: Tab,
    MobileTab: MobileTab,
    Footer: Footer
  },
  methods: {
    documentScroll(isScroll) {
      console.log("isScroll?", isScroll);
    }
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));

    methods.fontSizeChange();
    window.addEventListener("resize", methods.fontSizeChange, false);
    window.addEventListener("orientationchange", methods.fontSizeChange, false);
  },
  unmounted() {
    window.removeEventListener("resize", methods.fontSizeChange);
    window.removeEventListener("orientationchange", methods.fontSizeChange);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}

@font-face {
  font-family: "PingFangMedium";
  src: url("./fonts/PingFangMedium.ttf");
  font-weight: normal;
  font-style: normal;
}

body {
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: subpixel-antialiased;
  min-height: 100vh;
  font-size: 0.5rem;
  cursor: default;
  font-family: "PingFangMedium";
}

ul,
li {
  list-style: none;
}

input {
  outline: none;
}

button {
  background-color: transparent;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.btn-primary {
  font-size: 0.6rem;
  color: white;
  width: 4.32rem;
  border-radius: 0.72rem;
  height: 1.44rem;
  background-color: rgb(203, 74, 64);
}
</style>
