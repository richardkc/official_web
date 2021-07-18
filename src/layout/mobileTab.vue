<template>
  <nav class="tabs">
    <img class="logo" src="../assets/images/logo.png" />
    <div
      class="navBtn"
      @click="
        () => {
          handleNav();
        }
      "
    >
      <div class="navBtnLine"></div>
      <div class="navBtnLine"></div>
      <div class="navBtnLine"></div>
    </div>
    <div class="navList" v-show="listVisible">
      <ul>
        <li
          v-for="(list, listIndex) in tabInfo.tabs"
          :key="list.key"
          :style="{
            cursor: list.children.length > 0 ? 'pointer' : 'default'
          }"
          @click="
            () => {
              handleNavClick(list, listIndex);
            }
          "
        >
          <div
            class="listName"
            :class="{ selected: selectedKey === listIndex }"
          >
            {{ list.name }}
          </div>
          <ul
            class="menuList"
            :style="{
              display:
                selectedKey === listIndex &&
                showList &&
                list.children &&
                list.children.length > 0
                  ? 'flex'
                  : 'none'
            }"
          >
            <li v-for="item in list.children" :key="item.key">
              <router-link v-if="item.router" :to="item.router">{{
                item.name
              }}</router-link>
              <span v-if="!item.router">{{ item.name }}</span>
            </li>
          </ul>
        </li>
        <li>登录</li>
        <li>CN</li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import $ from "jquery";

export default {
  name: "Nav",
  props: {
    tabInfo: Object
  },
  data() {
    return {
      selectedKey: "",
      showList: false,
      routerKey: "",
      listVisible: false
    };
  },
  watch: {
    //监听路由变化
    $route(to, from) {
      const router = to.path || "";

      this.changeRouter(router);
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.RDcenterHeight = document.body.clientWidth * 0.387;
      })();
    };

    // this.scrollChange();

    window.addEventListener("scroll", this.scrollChange, true);
    this.changeRouter(window.location.pathname);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollChange, true);
  },
  methods: {
    handleNav() {
      this.listVisible = !this.listVisible;
    },
    changeRouter(router) {
      const tabs = this.tabInfo.tabs || [];

      for (let i = 0; i < tabs.length; i += 1) {
        const currentTab = tabs[i];

        this.selectedKey = "";

        if (currentTab.router === router) {
          this.selectedKey = i;
        }

        if (currentTab.children && currentTab.children.length > 0) {
          currentTab.children.forEach(item => {
            if (item.router === router) {
              this.selectedKey = i;
            }
          });
        }

        if (this.selectedKey || this.selectedKey === 0) {
          this.routerKey = this.selectedKey;
          break;
        }
      }
    },
    scrollChange() {
      const scrollTop = document.documentElement.scrollTop;
      const offsetHeight = document.documentElement.offsetHeight;
      this.showList = false;
      this.listVisible = false;

      // if (disableSelected) {
      //   return;
      // }

      // tabHeightRange.forEach((item, index) => {
      //   const heightPercent = (scrollTop * 100) / offsetHeight;

      //   if (item.min < heightPercent && item.max > heightPercent) {
      //     this.selectedKey = index;
      //   }
      // });
    },
    handleNavClick(list, index) {
      this.showList =
        this.selectedKey === index && this.showList ? false : true;
      this.selectedKey = index;

      if (this.routerKey !== index && list.router) {
        this.$router.push({ path: list.router });
        this.showList = false;

        return;
      }
      console.log("aaaaaaaaaaaaaaaaaa");

      // disableSelected = true;
      // $(document.documentElement).animate(
      // 	{
      // 		scrollTop:
      // 			(document.documentElement.offsetHeight *
      // 				(tabHeightRange[index].min + 5)) /
      // 			100,
      // 	},
      // 	500
      // );

      // setTimeout(() => {
      // 	disableSelected = false;
      // }, 500);
    }
  }
};
</script>

<style scoped lang="less">
a {
  color: black;
  text-decoration: none;
}

.tabs {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  user-select: none;

  .listName {
    position: relative;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 900;
    width: 100%;
    height: 70%;
  }

  .logo {
    display: block;
    width: 5.6rem;
    height: 3.12rem;
    z-index: 999;
    margin: 0.5rem;
  }

  .navList {
    position: absolute;
    top: 80%;
    right: 1rem;
    width: 80%;
    max-height: 80vh;
    overflow-y: auto;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 999;
    flex: 1;
    display: flex;
    align-items: flex-start;
  }

  .navList > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 3rem;
  }

  .navList > ul > li {
    width: 100%;
    min-height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    position: relative;
  }

  .tool {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    height: 1rem;
    margin-right: 1.8%;
  }

  .login {
    margin-right: 0.32rem;
    width: 2.16rem;
    line-height: 1rem;
    text-align: center;
    border: 1px solid white;
    border-radius: 0.5rem;
  }

  .language {
    height: 100%;
    width: 1rem;
    line-height: 1rem;
    text-align: center;
    border-radius: 50%;
    color: black;
    background-color: white;
  }

  .menuList {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;

    li {
    }
  }
}

.selected {
  color: rgb(203, 74, 64);
}

.navBtn {
  width: 3.25rem;
  height: 2.25rem;
  margin: 0.5rem;
  position: relative;
  cursor: pointer;

  .navBtnLine {
    position: absolute;
    border: 1px solid rgb(203, 74, 64);
    width: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .navBtnLine:nth-child(1) {
    top: 0.5rem;
  }

  .navBtnLine:nth-child(2) {
    top: 1rem;
  }

  .navBtnLine:nth-child(3) {
    top: 1.5rem;
  }
}
</style>
