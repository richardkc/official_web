<template>
  <main class="profile">
    <section
      class="carousel"
      v-for="carouselItem in ['fuselage', 'engineRoom', 'airport', 'vehicle']"
      :key="carouselItem"
      v-show="carouselItem === carouselKey"
    >
      <el-carousel
        height="32rem"
        direction="vertical"
        :interval="10000"
        :loop="true"
        v-if="carouselItem === carouselKey"
      >
        <el-carousel-item
          v-for="(item, index) in carouselMap[carouselItem]"
          :key="index"
        >
          <img v-lazy="carouselUrls[item]" style="width: 100%;" />
        </el-carousel-item>
      </el-carousel>
      <div class="carouselTab" v-show="carouselItem === carouselKey">
        <div
          class="tabItem"
          :class="{ selectedTab: carouselKey === item.key }"
          v-for="(item, index) in carouselTabs"
          :key="index"
          @mouseover="
            () => {
              carouselKey = item.key;
            }
          "
        >
          <span :class="{ active: carouselKey === item.key }">{{
            item.name
          }}</span>
        </div>
      </div>
    </section>
    <section class="successWorks">
      <div class="left">
        <div class="title">飞机制图解决方案 创意梦想与梦境</div>
        <div class="subTitle">
          <div>Creative Dream and</div>
          <div>dream of aircraft drawing solution</div>
        </div>
        <div class="content">
          彩绘飞机,也就是在飞机机身上制作画面,近年来在国内外已形成航空公司的一种时尚行为,许多大型盛事如世界杯、奥运会、
          亚运会等项目都会采用彩绘飞机进行媒体策划与推广，国内外大型企业冠名飞机是“移动的户外媒体”，拥有巨幅的视觉张力，超长投放周期，
          全国重点城市间频繁渗透，助力您的品牌影响力几何级成长。当机场的停机坪上出现一架与众不同、身穿“华服”的飞机时,
          人们会赋予它们更多的关注，从而达到了预期期望的效果。
        </div>
        <div class="examples">
          <div
            class="example"
            v-for="(item, index) in aviationMap"
            :key="index"
          >
            <img v-lazy="item.url" />
            <span :class="{ cover: index > 0 }">{{ item.name }}</span>
          </div>
        </div>
        <div class="more" @click="() => routerChange('successfulPlane')">
          更多成功案例
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </div>
      <div class="right">
        <div class="bottom">
          <div class="icons">
            <div
              class="iconWrap"
              v-for="item in transport"
              :key="item.key"
              @mouseover="() => iconFocused(item.key)"
              @mouseleave="() => iconFocused('')"
              @click="() => routerChange(item.key)"
            >
              <div class="imgWrap">
                <div
                  :key="item.key"
                  :class="{ hovered: hoveredIcon.key === item.key }"
                >
                  <div
                    class="details"
                    :class="{ showDetails: hoveredIcon.key === item.key }"
                  >
                    <span
                      class="detailContent"
                      v-for="(item, index) in hoveredIcon.details"
                      :key="index"
                      >{{ item }}</span
                    >
                  </div>
                  <span
                    class="detailName"
                    v-show="hoveredIcon.key === item.key"
                    >{{ hoveredIcon.name }}</span
                  >
                  <img
                    v-show="hoveredIcon.key !== item.key"
                    v-lazy="`${originPath}/uploads/circle-${item.index}.png`"
                  />
                  <img
                    v-show="hoveredIcon.key === item.key"
                    v-lazy="`${originPath}/uploads/normal-${item.index}.png`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="design">
      <div class="title">飞机工程定位图和画面设计</div>
      <div class="subTitle">
        <div>Aircraft engineering</div>
        <div>positioning map and screen design</div>
      </div>
      <img v-lazy="imgUrls[17]" />
    </section>
    <section class="progress">
      <div class="title">飞机贴膜作业流程</div>
      <div class="subTitle">Aircraft filming process</div>
      <div class="examples">
        <div class="example" v-for="(item, index) in workProcess" :key="index">
          <div class="count">{{ index + 1 }}</div>
          <img v-lazy="item.url" />
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </section>
    <section class="advantage">
      <div class="advantageInside">
        <div class="title">飞机数码贴膜的优势</div>
        <div class="subTitle">
          <div>Advantages of aircraft digital film</div>
          <div class="sm">
            A7706飞机贴膜是工艺的突破，大大提升飞机周转效率，并提升制作品质，可以帮助品牌客户在精准客户群体的品牌塑造
          </div>
        </div>
        <div class="icons">
          <div class="icon" v-for="(item, index) in advantages" :key="index">
            <div class="imgWrap">
              <img v-lazy="item.url" />
            </div>
            <div class="text">
              <div class="subTitle">{{ item.subTitle }}</div>
              <div
                class="content"
                v-for="(content, contentIndex) in item.content"
                :key="contentIndex"
              >
                {{ content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="proccess">
      <div class="title">传统喷漆的制作流程</div>
      <div class="subTitle">
        <div>The production process</div>
        <div>of traditional spray paint</div>
      </div>
      <div class="examples">
        <div class="example" v-for="(item, index) in process" :key="index">
          <div class="index">{{ index + 1 }}</div>
          <img v-lazy="item.url" />
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
      <div class="bordered-bottom"></div>
      <div class="content">
        <div class="left">
          <div class="subTitle">传统喷漆工艺</div>
          <div class="text">
            传统的制作方法，只能采用较简单的 大面积单色块画面，画面单调，在整
            体画面的表现力明显不足；
          </div>
        </div>
        <div class="right">
          <div class="step" v-for="(item, index) in steps" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="bordered-bottom"></div>
    </section>
    <section class="support">
      <div class="introduction">
        <div class="left">
          <div class="title">技术支持</div>
          <div class="subTitle">
            <div>The production process</div>
            <div>of traditional spray paint</div>
          </div>
        </div>
        <div class="right">
          <div class="subTitle">
            <div>
              深圳市大昆仑数码科技有限公司是3M中国首家授权航空项目的施工单位,
            </div>
            <div>相关的贴膜工程师均得到3M公司专业的培训及认证。</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="contentItem" v-for="(item, index) in supports" :key="index">
          <div v-if="item.text">{{ item.text }}</div>
          <img v-else-if="item.url" v-lazy="item.url" />
        </div>
      </div>
      <div class="examples">
        <div class="left">
          <img v-if="credentials[0]" v-lazy="credentials[0].url" />
        </div>
        <div class="right">
          <div class="image" v-for="(item, index) in credentials" :key="index">
            <img v-if="index > 0" v-lazy="item.url" />
          </div>
        </div>
      </div>
    </section>
    <section class="lagelSupport">
      <div class="lagelSupportInside">
        <div class="title">政策法规的支持</div>
        <div class="subTitle">Support of policies and regulations</div>
        <div class="content">
          <div>
            适航性方面，要严格遵照CCAR-
            -45部的相关规定审核,并且报地方适航审定处批准后,再报民航总局适航司审批，
            全部通过后才能在飞机上贴膜确定画面内容和覆盖区域后,需
            由航空公司将施工方案进行报批
          </div>
          <div>
            A7706 PET基贴膜，耐久性达4-9年，为全球唯一获得波音 /
            空中客车公司认证的机身专用贴膜， 机舱内贴膜为180MC，均已通过波音认证
          </div>
        </div>
      </div>
    </section>
    <section class="authentication">
      <div class="left">
        <div class="content">
          <div>Aircraft Graphics Business Flow Chart - APAC</div>
          <div>飞机图形业务流程图-亚太地区</div>
        </div>
        <div class="imgWrap">
          <img v-lazy="imgUrls[40]" />
        </div>
      </div>
      <div class="right">
        <div
          class="rightItem"
          v-for="(item, index) in authentications"
          :key="index"
        >
          <span>{{ item.text }}</span>
          <img v-lazy="item.url" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import store from "@/store/warehouse";

export default {
  name: "Aviation",
  props: {
    urls: Object
  },
  data() {
    return {
      imgUrls: this.urls ? this.urls.solutionAviation : [],
      originPath: store.originPath,
      iconFocus: false,
      iconDetail: "",
      carouselKey: "fuselage",
      carouselUrls: [],
      carouselMap: {
        fuselage: [0, 1, 2, 3],
        engineRoom: [4],
        airport: [5, 6],
        vehicle: [7]
      },
      carouselTop: [0.7, -0.2, -0.4, 0.9, 1.7, 0.3, 1.8, 2],
      carouselHeight: [100.5, 100.5, 100.4, 100.4, 100.4, 100.5, 102.9, 100.6],
      hoveredIcon: {
        name: "航空标识",
        key: "aviation",
        details: [
          "飞机制图解决方案创意梦想与梦境",
          "飞机工程定位图和画面设计",
          "飞机贴膜作业流程",
          "飞机数码贴膜的优势",
          "传统喷漆的制作流程",
          "技术支持",
          "政策法规的支持"
        ]
      },
      iconsInfo: [
        {
          name: "航空标识",
          key: "aviation",
          details: [
            "飞机制图解决方案创意梦想与梦境",
            "飞机工程定位图和画面设计",
            "飞机贴膜作业流程",
            "飞机数码贴膜的优势",
            "传统喷漆的制作流程",
            "技术支持",
            "政策法规的支持"
          ]
        },
        {
          name: "物流车队标识",
          key: "logistics",
          details: [
            "物流车队标识及贴膜工艺解决方案",
            "车队标识贴膜解决方案的优势"
          ]
        },
        {
          name: "轨道交通标识",
          key: "railTransit",
          details: [
            "车辆外饰",
            "车窗",
            "地面",
            "3M贴膜产品应用概述",
            "使用贴膜替代传统喷漆的优势"
          ]
        },
        {
          name: "大型商超标识",
          key: "supermarket",
          details: ["商超标识解决方案", "服务架构", "服务流程", "服务案例"]
        },
        {
          name: "船舶标识",
          key: "steamShip",
          details: [
            "3M 贴膜产品简介",
            "使用贴膜替代传统喷漆的优势",
            "3M 安全防滑贴产品系列"
          ]
        },
        {
          name: "建筑装饰标识",
          key: "building",
          details: [
            "3M 装饰建筑贴膜解决方案",
            "建筑装饰贴膜的行业应用",
            "材料分类"
          ]
        },
        {
          name: "3M全系列贴膜标识",
          key: "3M"
        }
      ],
      carouselTabs: [
        {
          key: "fuselage",
          name: "航空飞机机身"
        },
        {
          key: "engineRoom",
          name: "航空飞机机舱"
        },
        {
          key: "airport",
          name: "航空机场"
        },
        {
          key: "vehicle",
          name: "航空公司车辆"
        }
      ],
      aviationMap: [
        {
          name: "南方航空",
          url: `${this.urls ? this.urls.solutionAviation[4] : ""}`
        },
        {
          name: "山东航空",
          url: `${this.urls ? this.urls.solutionAviation[5] : ""}`
        },
        {
          name: "华夏航空",
          url: `${this.urls ? this.urls.solutionAviation[6] : ""}`
        },
        {
          name: "海南航空",
          url: `${this.urls ? this.urls.solutionAviation[7] : ""}`
        },
        {
          name: "东方航空",
          url: `${this.urls ? this.urls.solutionAviation[8] : ""}`
        },
        {
          name: "江西航空",
          url: `${this.urls ? this.urls.solutionAviation[9] : ""}`
        }
      ],
      transport: [
        {
          key: "aviation",
          index: 1
        },
        {
          key: "logistics",
          index: 2
        },
        {
          key: "railTransit",
          index: 3
        },
        {
          key: "supermarket",
          index: 4
        },
        {
          key: "steamShip",
          index: 5
        },
        {
          key: "building",
          index: 6
        },
        {
          key: "3M",
          index: 7
        }
      ],
      workProcess: [
        {
          text: "在相对无尘的环境，把画面摊开",
          url: `${this.urls ? this.urls.solutionAviation[18] : ""}`
        },
        {
          text: "画面张贴",
          url: `${this.urls ? this.urls.solutionAviation[19] : ""}`
        },
        {
          text: "完工",
          url: `${this.urls ? this.urls.solutionAviation[20] : ""}`
        }
      ],
      advantages: [
        {
          url: `${this.urls ? this.urls.solutionAviation[21] : ""}`,
          subTitle: "材料应用",
          content: ["波音、空客原厂认证", "安全环保"]
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[22] : ""}`,
          subTitle: "喷绘方式",
          content: ["照片效果逼真生动"]
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[23] : ""}`,
          subTitle: "安装快捷",
          content: [
            "安装一个完整机身画面仅需2-3天",
            "不影响飞机周旋律",
            "大幅度提升飞机在航时间"
          ]
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[24] : ""}`,
          subTitle: "场地要求",
          content: ["无需专用场地", "相对无尘即可完成"]
        }
      ],
      process: [
        {
          url: `${this.urls ? this.urls.solutionAviation[25] : ""}`,
          text: "飞机进棚进行清洁与准备"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[26] : ""}`,
          text: "脱漆"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[27] : ""}`,
          text: "调漆"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[28] : ""}`,
          text: "上底漆"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[29] : ""}`,
          text: "贴膜准备遮喷"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[30] : ""}`,
          text: "遮喷"
        }
      ],
      steps: [
        "工时时长：10-15天，影响飞机的周转效率;",
        "专用场地：需在专门的维修内机蓬进行;",
        "工艺复杂：需要清洁、脱漆、上底漆、遮喷面漆 画面",
        "效果不佳：只能运用纯色块的表现方式，绘制复杂画面困难，边缘不平整，影响美观; ",
        "污染环境：油漆气味重、油漆粉尘危害工作人员健康"
      ],
      supports: [
        {
          url: `${this.urls ? this.urls.solutionAviation[31] : ""}`,
          text: ""
        },
        {
          url: "",
          text:
            "由于飞机是个特殊的载体，面积大，而且要经历温度、压力、湿度、\
           风力等考验，制作要求不仅要贴得牢、不褪色，而且还要保证揭下来不留胶，使用的材料必须通过飞机制造厂认证(波音和空客等)"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[32] : ""}`,
          text: ""
        }
      ],
      credentials: [
        {
          url: `${this.urls ? this.urls.solutionAviation[33] : ""}`
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[34] : ""}`
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[35] : ""}`
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[36] : ""}`
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[37] : ""}`
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[38] : ""}`
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[39] : ""}`
        }
      ],
      authentications: [
        {
          text: "材料认证",
          url: `${this.urls ? this.urls.solutionAviation[41] : ""}`
        },
        {
          text: "材料原厂供货证明",
          url: `${this.urls ? this.urls.solutionAviation[42] : ""}`
        }
      ]
    };
  },
  mounted() {
    this.$axios.get("/api/solution-exhibitions").then(res => {
      if (res.data.length > 0) {
        this.iconUrls = res.data[0].aviation_icons;
      }
    });
    this.$axios.get("/api/exhibitions").then(res => {
      if (res.data.length > 0) {
        this.carouselUrls =
          this._.map(
            store.formatPaths(this._.get(res, "data[0].solution_aviation")),
            item => item.url
          ) || [];
      }
    });
  },
  methods: {
    iconFocused(value) {
      if (!value) {
        this.hoveredIcon = {};

        return;
      }

      this.hoveredIcon = this._.find(this.iconsInfo, { key: value }) || {};
    },
    routerChange(router) {
      if (this._.includes(["3M"], router)) {
        return;
      }

      this.$router.push({ path: router });
    }
  }
};
</script>

<style lang="less" scoped>
@redColor: rgb(203, 74, 64);
@blackColor: rgb(14, 14, 14);
@subTitleFontColor: rgb(128, 128, 128);
@contentFontColor: rgb(102, 102, 102);

@fontSizeLg: 1.1rem;
@fontSizeML: 0.75rem;
@fontSizeMd: 0.6rem;

@titleFontWeight: 700;
@subTitleFontWeight: 400;

.profile {
  width: 100%;
  background-color: white;
  font-size: @fontSizeMd;
}

.carousel {
  width: 90%;
  margin: 4rem 5% 0;
  position: relative;

  /deep/ .el-carousel__indicators {
    position: absolute;
    top: 50%;
    left: 1rem;
    width: 0.2rem;
    transform: translateY(-50%);

    .el-carousel__button {
      width: 0.4rem;
      height: 0.4rem;
      background-color: white;
      border-radius: 0.2rem;
      margin: 0.75rem 0;
    }
  }
}

.carouselTab {
  position: absolute;
  right: 6px;
  top: 47.2%;
  transform: translate(0, -50%);
  height: 70.8%;
  width: 1rem;
  background-color: rgb(153, 153, 153);
  z-index: 199;

  .active {
    color: white;
  }

  .tabItem {
    writing-mode: vertical-rl;
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 6px;
      height: 100%;
      background-color: rgb(204, 204, 204);
      position: absolute;
      left: 100%;
      top: 0;
    }
  }

  .selectedTab {
    &::after {
      background-color: rgb(153, 153, 153);
    }
  }
}

.successWorks {
  margin: 0 20%;
  margin-top: 6rem;
  width: 60%;
  position: relative;
  color: @contentFontColor;

  .left {
    width: 85%;
    margin-right: 15%;

    .title {
      color: @redColor;
      font-size: @fontSizeLg;
      font-weight: @titleFontWeight;
      margin-bottom: 0.5rem;
    }

    .subTitle {
      font-size: @fontSizeML;
      font-weight: @subTitleFontWeight;
      margin-bottom: 2rem;
    }

    .content {
      line-height: 1rem;
      margin-bottom: 2rem;
    }

    .examples {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
    }

    .example {
      width: 32.5%;
      border-radius: 0.625rem;
      overflow: hidden;
      position: relative;
      margin-bottom: 1%;

      & > img {
        width: 100%;
        height: 100%;
      }

      & > span {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: white;
      }

      .cover {
        background-color: @redColor;
        opacity: 0.8;
      }
    }

    .more {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      & > i {
        margin-left: 0.2rem;
        font-size: 0.675rem;
        color: @redColor;
        cursor: pointer;
      }
    }
  }

  .right {
    position: absolute;
    top: -2rem;
    right: -15%;
    width: 35%;
    height: 100%;

    img {
      height: 2rem;
      width: 2rem;
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      margin-top: @fontSizeMd;

      .imgWrap {
        > div {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          transition: width 0.3s;
          pointer-events: none;
        }
      }
    }

    .detailName {
      white-space: nowrap;
      display: inline-block;
      margin-right: 0.75rem;
    }

    .hovered {
      min-width: 6rem;
      display: flex;
      justify-content: space-between !important;
      position: relative; //
      height: 2rem;
      border-radius: 1rem;
      font-size: 0.55rem;
      align-items: center;
      background-color: @redColor;
      color: white;
      padding: 0 @fontSizeMd 0 (2 * @fontSizeMd);

      img {
        width: 1.25rem;
        max-height: 1.1rem;
        height: auto !important;
      }

      .showDetails {
        position: absolute;
        top: 2.5rem;
        right: 2rem;

        span {
          background-color: white;
        }
      }
    }

    .details {
      position: absolute;
      opacity: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: @fontSizeMd;
      color: @contentFontColor;

      & > span {
        margin-bottom: @fontSizeMd;
        white-space: nowrap;
      }
    }

    .showDetails {
      opacity: 1;
    }

    .icons {
      & > div {
        margin-bottom: @fontSizeMd;
      }
    }
  }
}

.design {
  margin: 0 10%;
  margin-top: 6rem;
  width: 80%;
  position: relative;
  color: @contentFontColor;

  .title {
    color: @redColor;
    font-size: @fontSizeLg;
    font-weight: @titleFontWeight;
    margin-bottom: 0.5rem;
    padding-left: 5rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @subTitleFontWeight;
    margin-bottom: 2rem;
    margin-left: 5rem;
  }

  img {
    width: 100%;
  }
}

.progress {
  margin: 0 12%;
  margin-top: 8rem;
  width: 76%;
  position: relative;
  color: @contentFontColor;

  .title {
    color: @redColor;
    font-size: @fontSizeLg;
    font-weight: @titleFontWeight;
    margin-bottom: 0.5rem;
    padding-left: 4rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @subTitleFontWeight;
    margin-bottom: 2rem;
    margin-left: 4rem;
  }

  .examples {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;

    .example {
      width: 30%;
      position: relative;

      .count {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        background-color: @redColor;
        border-radius: 0.25rem;
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: @fontSizeML;
      }

      & > img {
        width: 100%;
        height: 80%;
      }

      .text {
        margin-top: 0.5rem;
        color: black;
        font-weight: @titleFontWeight;
      }
    }
  }
}

.advantage {
  margin-top: 6rem;
  width: 100%;
  background-color: @blackColor;

  .advantageInside {
    padding-top: 4rem;
    width: 60%;
    position: relative;
    color: white;
    margin: 0 20%;
  }

  .title {
    color: @redColor;
    font-size: @fontSizeLg;
    font-weight: @titleFontWeight;
    margin-bottom: 0.5rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @subTitleFontWeight;
    margin-bottom: 2rem;

    .sm {
      font-size: @fontSizeMd;
      margin-top: 1rem;
    }
  }

  .icons {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 4rem;
    margin-left: -5%;
  }

  .icon {
    width: 25%;

    .imgWrap {
      width: 4rem;
      height: 4rem;
      background-color: @redColor;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }

    img {
      width: 50%;
    }

    .text {
      text-align: center;
      min-width: 7.2rem;
      margin: 0 auto;
      margin-top: 2rem;

      .subTitle {
        margin-bottom: 0.25rem;
      }
    }

    .content {
      white-space: nowrap;
    }
  }
}

.proccess {
  margin: 0 12%;
  margin-top: 8rem;
  width: 76%;
  position: relative;
  color: @contentFontColor;

  .title {
    color: @redColor;
    font-size: @fontSizeLg;
    font-weight: @titleFontWeight;
    margin-bottom: 0.5rem;
    margin-left: 4rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @subTitleFontWeight;
    margin-bottom: 2rem;
    margin-left: 4rem;
  }

  .examples {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    .example {
      width: 16%;

      img {
        width: 100%;
      }
    }

    .index {
      font-size: @fontSizeML;
      color: @redColor;
      font-weight: @titleFontWeight;
    }

    .text {
      margin-top: 0.5rem;
      color: black;
      font-weight: @titleFontWeight;
      font-size: 0.55rem;
      padding-left: 0.25rem;
      white-space: nowrap;
    }
  }

  .bordered-bottom {
    width: 100%;
    border-bottom: 0.125rem solid @redColor;
  }

  .content {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    .left {
      width: 30%;
      color: @redColor;
      margin-right: 2rem;

      .subTitle {
        margin: 0;
      }

      .text {
        margin-top: 2rem;
      }
    }

    .right {
      width: 50%;
      white-space: nowrap;
      line-height: 1rem;
    }
  }
}

.support {
  margin: 0 10%;
  margin-top: 8rem;
  width: 80%;
  position: relative;
  color: @contentFontColor;

  .title {
    color: @redColor;
    font-size: @fontSizeLg;
    font-weight: @titleFontWeight;
    margin-bottom: 0.5rem;
    margin-left: 4rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @subTitleFontWeight;
    margin-bottom: 2rem;
    margin-left: 4rem;
  }

  .introduction {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    .right {
      text-align: right;
    }
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .contentItem {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: @redColor;

      & > img,
      & > div {
        width: 100%;
        height: 100%;
      }

      div {
        padding: 1.5rem;
        line-height: 1rem;
        display: flex;
        align-items: center;
      }
    }
  }

  .examples {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;

    .left {
      width: 40%;
      padding-bottom: 1rem;

      img {
        width: 100%;
      }
    }

    .right {
      width: 60%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      div:not(:first-child) {
        width: calc(100% / 3);
        padding: 0 0 0 1rem;
      }

      img {
        width: 100%;
        padding-bottom: 1rem;
      }
    }
  }
}

.lagelSupport {
  width: 100%;
  background-color: @redColor;
  margin-top: 8rem;

  .lagelSupportInside {
    margin: 0 20%;
    width: 60%;
    position: relative;
    color: white;
    padding: 4rem 0;
  }

  .title {
    font-size: @fontSizeLg;
    font-weight: @titleFontWeight;
    margin-bottom: 0.5rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @subTitleFontWeight;
    margin-bottom: 2rem;
  }

  .content {
    line-height: 1.5rem;
  }
}

.authentication {
  margin: 6rem 20%;
  width: 60%;
  position: relative;
  color: black;
  font-weight: @titleFontWeight;
  display: flex;
  justify-content: space-between;

  .left {
    width: 80%;

    .content {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 0.5rem;

      div:first-child {
        margin-right: 4rem;
      }

      div {
        white-space: nowrap;
      }
    }

    .imgWrap {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  .right {
    width: 15%;

    .rightItem {
      width: 100%;

      & > span {
        display: inline-block;
        margin-bottom: 0.25rem;
      }

      img {
        width: 100%;
      }
    }

    .rightItem:first-child {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
