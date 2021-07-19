<template>
  <nav class="tabs" :class="{ tabsColor: [1].includes(this.routerKey) }">
    <img class="logo" src="../assets/images/logo.png" />
    <div
      class="navList"
      @mouseleave="
        () => {
          selectedKey = originKey;
        }
      "
    >
      <ul>
        <li
          v-for="(list, listIndex) in tabInfo.tabs"
          :key="list.key"
          style="cursor: pointer;"
          @click="
            () => {
              handleNavClick(list, listIndex);
            }
          "
          @mouseover="
            () => {
              hoverKeyChange(listIndex);
            }
          "
          @mouseleave="
            () => {
              hoverKeyChange('');
            }
          "
        >
          <div
            class="listName"
            :class="{ selectedTab: selectedKey === listIndex }"
          >
            <span>{{ list.name }}</span>
          </div>
          <div class="menuList">
            <div class="emptyBar"></div>
            <ul
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
                <router-link
                  v-if="item.router"
                  :to="item.router"
                  @click.native="
                    e => {
                      e.stopPropagation();
                      e.preventDefault();
                    }
                  "
                  >{{ item.name }}</router-link
                >
                <span v-if="!item.router">{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="tool">
        <div class="login">登录</div>
        <div class="language">CN</div>
      </div>
    </div>
  </nav>
</template>

<script>
let disableSelected = false;

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
      hoverKey: ""
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

    this.changeRouter(window.location.pathname);
  },
  methods: {
    changeRouter(router) {
      const tabs = this.tabInfo.tabs || [];

      for (let i = 0; i < tabs.length; i += 1) {
        const currentTab = tabs[i];

        this.selectedKey = "";

        if (currentTab.router === router) {
          this.selectedKey = i;
          this.originKey = i;
        }

        if (currentTab.children && currentTab.children.length > 0) {
          currentTab.children.forEach(item => {
            if (item.router === router) {
              this.selectedKey = i;
              this.originKey = i;
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
      this.showList = false;

      if (disableSelected) {
        return;
      }
    },
    handleNavClick(list, index) {
      const locationRouter = location.pathname;

      if (list.router && list.router !== locationRouter) {
        this.$router.push({ path: list.router });
        this.changeRouter(list.router);

        return;
      }

      this.hoverKeyChange(index);
    },
    hoverKeyChange(index) {
      this.selectedKey = this._.isNumber(index) ? index : "";
      this.showList = this._.isNumber(index) ? true : false;
    }
  }
};
</script>

<style scoped lang="less">
@greyColor: rgb(128, 128, 128);
@redColor: rgb(235, 74, 64);

.tabsColor {
  color: @greyColor !important;

  .login {
    border-color: @greyColor !important;
  }
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
  color: white;
  user-select: none;

  .listName {
    position: relative;

    // &:hover {
    // 	&::before {
    // 		background-color: rgb(235, 74, 64);
    // 	}
    // }
  }

  .listName::before {
    content: "";
    box-sizing: content-box;
    display: block;
    width: 100%;
    height: 1rem;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -100;
  }

  .selectedTab {
    color: white !important;
  }

  .selectedTab::before {
    background-color: @redColor;
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
    z-index: 999;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .navList > ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
  }

  .navList > ul > li {
    margin-right: 2.4%;
    white-space: nowrap;
    position: relative;
  }

  a {
    color: @greyColor;
    text-decoration: none;
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
    color: rgba(128, 128, 128);
    background-color: white;
  }

  .emptyBar {
    width: 100%;
    height: 0.2rem;
  }

  .menuList {
    position: absolute;
    top: 0.8rem;
    left: 50%;
    transform: translate(-50%, 0);

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: white;
      border-radius: 0.2rem;
      padding: 0.32rem 0.72rem 0.12rem;
      text-align: center;
      box-shadow: 0 0.1rem 0.25rem 0.1rem rgba(0, 0, 0, 0.15);
    }

    li {
      margin-bottom: 0.32rem;

      &:hover {
        a {
          color: @redColor !important;
        }
      }
    }
  }
}
</style>
