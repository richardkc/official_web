<template>
  <main class="introduction content">
    <section class="banner">
      <img v-lazy="imgUrls[0]" />
    </section>
    <section class="tabs">
      <div class="tabsWrapper">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          @mouseenter="
            () => {
              tabIndex = index;
            }
          "
          @click="
            () => {
              setTabIndex(index);
            }
          "
        >
          {{ item }}
        </div>
        <div
          class="underLine"
          :style="{ left: `calc(${tabIndex * 25}% + ${tabIndex * 0.65}rem)` }"
        ></div>
      </div>
    </section>
    <section class="companyIntroduction">
      <div class="titles">
        <div class="left">
          <img v-lazy="imgUrls[1]" />
          <div class="subTitle">公司简介</div>
        </div>
        <div class="right">
          <img src="../../assets/images/logo.png" />
        </div>
      </div>
      <div class="details">
        <div class="companyName subTitle">大昆仑数码科技有限公司</div>
      </div>
      <img class="image" v-lazy="imgUrls[2]" />
      <div class="contents">
        <div class="wraparound">“科技、灵感，一切皆可创新”</div>
        <div class="content">
          <div v-for="(item, index) in inntroductions" :key="index">
            <div class="dot"></div>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="cultures">
      <div class="cultureWrap">
        <div
          class="culture"
          v-for="(item, index) in cultures"
          :key="index"
          @mouseover="
            () => {
              cultureIndex = index;
            }
          "
          @mouseleave="
            () => {
              cultureIndex = null;
            }
          "
        >
          <div
            class="innerTitle"
            :style="{ opacity: cultureIndex === index ? 0 : 1 }"
          >
            {{ item.title }}
          </div>
          <div
            class="innerContent"
            :style="{ opacity: cultureIndex === index ? 1 : 0 }"
          >
            <div v-for="(text, textIndex) in item.content" :key="textIndex">
              {{ text }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="development">
      <div class="background">
        <img v-lazy="imgUrls[4]" />
      </div>
      <div class="inner">
        <div class="titles">
          <img v-lazy="imgUrls[3]" />
          <div class="subTitle">发展历程</div>
        </div>
        <div class="cards">
          <div class="card">
            <div class="title">2005</div>
            <div class="content">公司正式成立</div>
          </div>
          <div class="card">
            <div class="title">2006</div>
            <div class="content">
              成为3M公司全国大渠道经销商，<br />经营3M全系列贴膜产品
            </div>
          </div>
          <div class="card">
            <div class="title">2007 - 2009</div>
            <div class="content">
              07年为东方航空、深圳航空、厦门航空...
              <br />
              等多家航空公司提供高品质整机画面贴膜<br />
              解决方案，并为3M在国内唯一授权的航空<br />
              贴膜产品经销商、加工安装商。 2009年<br />
              成为沃尔玛(中国)公司全国标牌供应商，<br />
              服务全国400多家沃尔玛超市
            </div>
          </div>
          <div class="card">
            <div class="title">2013 - 2017</div>
            <div class="content">
              2013年 成为地铁集团运营分公司供应商<br />2015年
              成为安利(中国)总部广告标识供应商，服务全国12000家安利门店<br />
              2016年 - 2017年 被评为顺丰集团卓越供应商
            </div>
          </div>
          <div class="card">
            <div class="title">2018 - 2020</div>
            <div class="content">
              大昆仑与3M中国以及深圳中车成立贴膜技术研究中心
              大昆仑与中国商飞达成合作意向，成为中国商用飞机有限公司飞
              机贴膜供应商 大昆仑成为国家高新技术企业、深圳高新技术企业<br />AS9100D&IOS
              9001:2015 质量管理体系认证 大昆仑成为 中国城市轨道交通协会会员单位
              大昆仑被评为广东省守合同重信用企业
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="honor">
      <div class="background">
        <img v-lazy="imgUrls[8]" />
      </div>
      <div class="inner">
        <div class="titles">
          <div class="left">
            <img v-lazy="imgUrls[5]" />
            <div class="subTitle">资质荣誉</div>
          </div>
          <div class="right">
            大昆仑始终坚持走科技创新之路，与深圳中车及3M共同成立贴膜技术应<br />
            用研究中心，大昆仑目前申请专利28项：发明专利3项，实用新型13项，<br />
            软著12项。在科技创新的道路上，大昆仑不断突破创新，永不止步；
          </div>
        </div>
        <div class="honorsWrap">
          <div class="honors">
            <el-carousel
              :interval="10000"
              :autoplay="true"
              :loop="true"
              ref="carousel"
            >
              <el-carousel-item>
                <img
                  v-lazy="this.imgUrls[6]"
                  name="first"
                  style="width: 100%;"
                />
              </el-carousel-item>
              <el-carousel-item>
                <img
                  v-lazy="this.imgUrls[7]"
                  name="second"
                  style="width: 100%;"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="switcher">
            <div
              @click="
                () => {
                  carouselChange(0);
                }
              "
            >
              <switch-button type="pre"></switch-button>
            </div>

            <div
              @click="
                () => {
                  carouselChange(1);
                }
              "
            >
              <switch-button type="next"></switch-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SwitchButton from "../../components/switchButton.vue";

export default {
  props: {
    urls: Object
  },
  data() {
    return {
      selectIndex: 0,
      tabIndex: 0,
      cultureIndex: null,
      imgUrls: this.urls ? this.urls.introduction || [] : [],
      scrollMap: [20, 55, 75, 115],
      tabs: ["公司简介", "企业文化", "发展历程", "荣誉资质"],
      inntroductions: [
        "2005年，深圳市大昆仑数码科技有限公司成立，公司秉承特区精神，自觉担当时代赋予的使命，立足行业，不断创新，\
          以推动中国绿色环保事业前行为己任。公司自创建以来，一路积累了大量丰富的行业管理经验和服务经营\
          理念。通过提供全线设计、策划、制作和标示材料，与国内众多品牌企业建立了长效稳固的合作关系，包括但不\
          限于飞机、轨道交通、公交车身广告、大型商超装饰的应用上一直提供一流国际化水准的科技应用和服务系统。",
        "2018年，大昆仑与3M、深圳中车成立贴膜技术研究中心。专门研究轨道贴膜整体解决方案。",
        "大昆仑遵循国际AS9100D 航空航天、国防行业质量管理体系（IAQG）进行管理，是3M公司在中国唯一的航空\
          贴膜产品授权施工单位。",
        "大昆仑绿色环保贴膜技术的应用，是替代传统油漆喷涂工艺的重大革命，解决多个行业的环保、感官效果问题，\
          极大提高了效率，得到顺丰集团、南方航空、东方航空、中车集团等客户的一致好评。公司150人精英团队在一\
          次次的创新实践中，已在多个行业交出最完美的绿色技术改革方案。",
        "大昆仑改变了传统的单一服务模式，以商业标识材料开发、贴膜应用技术开发、品牌设计规划的项目整体服务能\
          力，参与了航空航天市场、大型交通物流车辆VI制作包装、轨道车辆内外装饰及翻新业务、船舶内外装饰涂装、\
          超大型商超标识广告市场等。",
        "未来大昆仑还会开发更多服务范围和行业领域，创造并实践科技创新，把“品质佳、服务好、交货快”的质量安全\
          方针层层传达，一丝不苟的贯彻执行下去。"
      ],
      cultures: [
        {
          title: "企业愿景",
          content: ["为中国绿色环保事", "业做出贡献的科研", "型智能企业"]
        },
        {
          title: "企业价值观",
          content: ["进步", "创新", "卓越"]
        },
        {
          title: "企业宗旨",
          content: ["诚信经营", "品质第一", "服务至上"]
        }
      ]
    };
  },
  methods: {
    carouselChange(name) {
      this.$refs.carousel && this.$refs.carousel.setActiveItem(name);
    },
    setTabIndex(index) {
      this.tabIndex = index;

      let height = 0;

      const maxHeight = this.scrollMap[index] * (window.fontSize || 0) || 0;

      const loop = () => {
        const request = window.requestAnimationFrame(loop);

        if (
          window.scrollY >= maxHeight ||
          (height && window.scrollY === height)
        ) {
          window.cancelAnimationFrame(request);

          return;
        }

        height = window.scrollY;

        window.scrollTo(0, window.scrollY + 50);
      };

      loop();

      setTimeout(() => {
        this.tabIndex = 0;
      }, 300);
    }
  },
  components: {
    "switch-button": SwitchButton
  }
};
</script>

<style lang="less" scoped>
@redColor: rgb(203, 74, 64);
@deepRedColor: rgb(156, 24, 47);
@blackColor: rgb(14, 14, 14);
@subTitleFontColor: rgb(128, 128, 128);
@contentFontColor: rgb(102, 102, 102);
@greyColor: rgb(179, 179, 179);
@deepGreyColor: rgb(153, 153, 153);

@titleFontWeight: 700;
@subTitleFontWeight: 400;

img {
  width: 100%;
}

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

.introduction {
  width: 100%;
  color: @contentFontColor;
}

.banner {
  width: 100%;
  display: flex;
  margin-bottom: 2rem;

  img {
    width: 100%;
  }
}

.tabs {
  width: 100%;
  height: 4rem;
  margin-bottom: 2rem;

  .tabsWrapper {
    width: 32%;
    margin: 0 34%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;

    > div {
      cursor: pointer;
      font-size: 0.6rem;
    }
  }
  .underLine {
    position: absolute;
    top: 100%;
    left: 0;
    transition: left 0.3s;

    &::after {
      content: "";
      display: block;
      width: 1rem;
      height: 2px;
      background-color: @deepRedColor;
    }
  }
}

.companyIntroduction {
  width: 60%;
  margin: 0 20% 4rem;

  img {
    width: 100%;
  }

  .titles {
    width: 110%;
    margin-left: -5%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;

    .subTitle {
      color: @redColor;
      font-weight: bold;
    }

    .left {
      width: 30%;
    }

    .right {
      width: 15%;
    }
  }

  .companyName {
    margin-bottom: 1.5rem;
  }

  .image {
    margin-bottom: 1rem;
  }

  .wraparound {
    font-size: 0.625rem;
    margin-bottom: 1rem;
  }

  .content {
    > div {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .dot {
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin: 0.24rem 0.2rem 0 0;
        border-radius: 0.4rem;
        background-color: @redColor;
      }

      span {
        flex: 1;
      }
    }
  }
}

.cultures {
  width: 60%;
  margin: 0 20% 4rem;

  .cultureWrap {
    display: flex;
    justify-content: space-between;
  }

  .culture {
    width: 9.6rem;
    height: 9.6rem;
    border-radius: 9.6rem;
    background-color: @redColor;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    position: relative;

    .innerTitle,
    .innerContent {
      white-space: nowrap;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .innerTitle {
      font-size: 1.1rem;
      transition: opacity ease-out 0.75s;
    }

    .innerContent {
      font-size: 0.7rem;
      line-height: 1.2rem;
      transition: opacity ease-in 0.75s;
    }
  }
}

.development {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    min-height: 32.4rem;
  }

  .inner {
    position: absolute;
    width: 60%;
    top: 3rem;
    left: 20%;

    .titles {
      width: 40%;
      margin-bottom: 1rem;

      .subTitle {
        color: white;
        font-weight: bold;
      }
    }

    .cards {
      width: 100%;
      position: relative;

      .card {
        background-color: white;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        top: 30rem;
        padding: 1.5rem 1.2rem;
        border: 1px solid @redColor;

        .title {
          margin-bottom: 1rem;
          color: @redColor;
        }

        &::before,
        &::after {
          content: "";
          display: none;
          position: absolute;
          width: 0.3rem;
          height: 0.3rem;
          background-color: white;
          border-radius: 0.3rem;
          border: 0.075rem solid @redColor;
        }
      }

      .card:nth-child(1) {
        width: 12rem;
        left: 8rem;
        top: 0;
      }

      .card:nth-child(2) {
        width: 13rem;
        left: 16rem;
        top: 3rem;
        z-index: 100;
        box-shadow: 0.15rem 0.15rem 0 0.15rem rgba(0, 0, 0, 0.3);

        &::before {
          display: block;
          top: -0.3rem;
          left: 3.7rem;
        }

        &::after {
          display: block;
          bottom: -0.3rem;
          left: 1.7rem;
        }
      }

      .card:nth-child(3) {
        width: 18rem;
        left: 0;
        top: 7rem;
      }

      .card:nth-child(4) {
        width: 20.5rem;
        left: 13rem;
        top: 12rem;
        padding-bottom: 2rem;
        z-index: 99;
        box-shadow: 0.15rem 0.15rem 0 0.15rem rgba(0, 0, 0, 0.3);

        &::before {
          display: block;
          top: -0.3rem;
          left: 4.7rem;
        }
      }

      .card:nth-child(5) {
        width: 19rem;
        left: 4rem;
        top: 19.5rem;
        z-index: 100;
        box-shadow: 0.15rem 0.15rem 0 0.15rem rgba(0, 0, 0, 0.3);

        &::before {
          display: block;
          top: -0.3rem;
          left: 8.8rem;
        }
      }
    }
  }
}

.honor {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    display: flex;
  }

  .inner {
    position: absolute;
    width: 70%;
    top: 8rem;
    left: 15%;
    background-color: white;
    padding: 3rem 4rem;

    .titles {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;

      .left {
        width: 25%;
      }

      .subTitle {
        font-size: 1.1rem;
        font-weight: bold;
        color: @redColor;
      }
    }
  }

  /deep/ .el-carousel__arrow {
    display: none;
  }

  .switcher {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;

    > div > div {
      border: 1px solid #eee;
      box-shadow: 0.2rem 0px 0.2rem #aaaaaa;
    }

    > div:first-child {
      margin-right: 2rem;
    }
  }
}
</style>
