<template>
  <div
    :key="renderKey"
    v-if="renderKey"
    :style="{ 'min-width': isPC ? '0' : '1080px' }"
    style="display：none"
    ref="vueApp"
    id="app"
    data-server-rendered="true"
  >
    <!-- <Mobile-tab v-if="!isPC" :tabInfo="tabInfo"></Mobile-tab> -->
    <Tab :key="isPC" :tabInfo="tabInfo"></Tab>
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
    item.url = store.originPath + item.url;

    return item.url;
  });

  return arr;
}

const urls = {
  footer: [],
  logo: [],
  homeLogos: [],
  home: [],
  solutionAviation: [],
  solutionLogistics: [],
  solutionRaiTransit: [],
  solutionBuilding: [],
  solutionSteamShip: [],
  solutionSupermarket: [],
  successfulCase: [],
  successfulPlane: [],
  successfulFleet: [],
  successfulRailTransit: [],
  successfulSteamShip: [],
  successfulSupermarket: [],
  RDCenter: []
};

export default {
  name: "App",
  data() {
    return {
      tabInfo: {
        tabs: store.tabs
      },
      isPC: methods.isPC(),
      urls,
      renderKey: 0
    };
  },
  components: {
    Tab: Tab,
    MobileTab: MobileTab,
    Footer: Footer
  },
  created() {
    this.renderKey += 1;
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    this.urls = {};
    this.$refs.vueApp.style.display = "block";

    this.$axios
      .get("/api/images")
      .then(res => {
        if (res && res.data && res.data.length > 0) {
          const item = res.data[0];

          if (typeof item === "object") {
            for (const [key, value] of Object.entries(item)) {
              if (value && typeof value === "object" && value.length > 0) {
                this.urls[key] = format(value, key);
                this.renderKey += 1;
              }
            }
          }
        }
      })
      .catch(error => {
        console.error(error);
      });

    window.addEventListener("beforeunload", function() {
      window.scrollTo(0, 0);
    });
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

<style lang="less">
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

a {
  text-decoration: none;
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
  cursor: pointer;

  a {
    color: white;
  }
}

.square {
  width: 0.25rem;
  height: 0.5rem;
  background: white;
  margin: 0.3rem 0.3rem 0.3rem 0;
}
</style>
