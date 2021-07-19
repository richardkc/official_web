<template>
  <main class="successfulCase">
    <img v-lazy="imgUrls[0]" />
    <div class="scrollBtns">
      <img
        src="../../assets/images/button/button_left.png"
        @mousedown="scrollExamples('left')"
      />
      <img
        src="../../assets/images/button/button_right.png"
        @mousedown="scrollExamples('right')"
      />
    </div>
    <div class="contentWrap">
      <div class="left">
        <div class="subTitle">ABOUT US</div>
        <div class="title">航空飞机</div>
        <div class="content">
          国内外大型企业冠名飞机是“移动的户外媒体”，
          拥有巨幅的视觉张力，超长投放周期，
          全国重点城市间频繁渗透，助力您的品牌影响力几何级成长。
        </div>
      </div>
      <div class="right">
        <div class="examples" id="examples">
          <div class="inner">
            <router-link
              class="example"
              v-for="(item, index) in examples"
              :key="index"
              :to="item.router"
            >
              <div
                @mouseover="
                  () => {
                    selectIndex = index;
                  }
                "
              >
                <img v-lazy="item.url" />
                <div v-if="selectIndex === index">
                  <span>更多案例</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    urls: Object
  },
  data() {
    return {
      selectIndex: 0,
      imgUrls: this.urls ? this.urls.successfulCase : [],
      examples: [
        {
          url: this.urls ? this.urls.successfulCase[1] : "",
          router: "/successfulPlane"
        },
        {
          url: this.urls ? this.urls.successfulCase[2] : "",
          router: "/successfulRailTransit"
        },
        {
          url: this.urls ? this.urls.successfulCase[3] : "",
          router: "/successfulFleet"
        },
        {
          url: this.urls ? this.urls.successfulCase[4] : "",
          router: "/successfulSteamShip"
        },
        {
          url: this.urls ? this.urls.successfulCase[5] : "",
          router: "/successfulSupermarket"
        }
      ]
    };
  },
  methods: {
    scrollExamples: type => {
      if (type === "left") {
        document.getElementById("examples").scrollLeft = 0;
      } else if (type === "right") {
        document.getElementById("examples").scrollLeft = 99999;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@redColor: rgb(203, 74, 64);
@blackColor: rgb(14, 14, 14);
@subTitleFontColor: rgb(128, 128, 128);
@contentFontColor: rgb(102, 102, 102);
@greyColor: rgb(179, 179, 179);
@deepGreyColor: rgb(153, 153, 153);

@titleFontWeight: 700;
@subTitleFontWeight: 400;

.title {
  font-size: 1.75rem;
  font-weight: @titleFontWeight;
  margin-bottom: 2rem;
}

.subTitle {
  font-size: 0.85rem;
  font-weight: @subTitleFontWeight;
  margin-bottom: 1rem;
}

.content {
  font-size: 0.55rem;
  line-height: 1rem;
}

.successfulCase {
  color: white;
  width: 100%;
  position: relative;
  display: flex;

  img {
    width: 100%;
  }

  .scrollBtns {
    position: absolute;
    bottom: 44%;
    right: 1.25rem;
    display: flex;
    justify-content: flex-start;

    img {
      width: 2.5rem;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.5);
        border-radius: 1.5rem;
      }
    }

    img:first-child {
      margin-right: 1rem;
    }
  }

  .contentWrap {
    position: absolute;
    width: 95%;
    left: 5%;
    bottom: 8%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .left {
    width: 20%;
  }

  .right {
    width: 80%;
    overflow: hidden;
  }

  .examples {
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: 0;
    margin-left: 3%;

    &::-webkit-scrollbar {
      height: 0;
    }

    .inner {
      width: 140%;
      display: flex;
      justify-content: flex-start;
    }
  }

  .example {
    margin-right: 3%;
    border-radius: 10%;
    max-width: 17%;
    overflow: hidden;
    > div {
      position: relative;
      cursor: pointer;

      > div {
        position: absolute;
        left: 10%;
        bottom: 10%;
        font-size: 0.55rem;
        border: 1px solid white;
        padding: 0.125rem 0.5rem;
        border-radius: 1rem;

        span {
          text-decoration: none;
          color: white;
        }

        &:hover {
          box-shadow: 0px 0px 3px 1px rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
}
</style>
