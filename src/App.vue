<template>
  <div v-if="showMain">
    <Mobile-tab v-if="!isPC" :tabInfo="tabInfo"></Mobile-tab>
    <Tab v-else-if="isPC" :tabInfo="tabInfo"></Tab>
    <router-view :isPC="isPC" :urls="urls"></router-view>
    <Footer :urls="urls"></Footer>
  </div>
</template>

<script>
import Tab from "@/layout/tab";
import MobileTab from "./layout/mobileTab";
import store from "@/store/warehouse";
import methods from "@/utils/basic";
import Footer from "@/layout/footer";

methods.fontSizeChange();

function format(arr, key) {
  const sortArr = arr.map(item => {
    var regStr = new RegExp(`${key}-.+(?=\\.)`);
    const matchItem = item.name.match(regStr);

    return matchItem ? Number(matchItem[0].replace(`${key}-`, "")) : 999;
  });

  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (sortArr[i] > sortArr[i + 1]) {
        let temp = arr[i];
        let tempSort = sortArr[i];

        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        sortArr[i] = sortArr[i + 1];
        sortArr[i + 1] = tempSort;
      }
    }
  }

  arr = arr.map(item => {
    // item.url = window.location.origin + item.url;
    item.url = "http://8.210.247.224:1337" + item.url;

    return item.url;
  });

  return arr;
}

export default {
  name: "App",
  created() {
    this.showMain = false;
    this.$axios.get("/api/images").then(res => {
      if (res && res.data && res.data.length > 0) {
        const item = res.data[0];

        if (typeof item === "object") {
          for (const [key, value] of Object.entries(item)) {
            if (value && typeof value === "object" && value.length > 0) {
              this.urls = this.urls || {};
              this.urls[key] = format(value, key);
              this.showMain = true;
              setTimeout(() => {
                console.log(this.urls);
              }, 1000);
            }
          }
        }
      }
    });
  },
  data() {
    return {
      tabInfo: {
        tabs: store.tabs
      },
      isPC: methods.isPC(),
      showMain: false,
      urls: {}
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
