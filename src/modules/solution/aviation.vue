<template>
  <main class="profile">
    <section class="carousel">
      <el-carousel
        height="32rem"
        direction="vertical"
        @change="carouselIndexChange"
        :interval="10000"
        :autoplay="true"
        :loop="true"
      >
        <el-carousel-item
          v-for="(item, index) in carouselMap"
          :key="index"
          :name="item.name"
        >
          <img v-lazy="item.url" style="width: 100%; height: 100%;" />
        </el-carousel-item>
      </el-carousel>
      <div class="carouselTab">
        <div class="tabItem" v-for="(item, index) in carouselTabs" :key="index">
          <span :class="{ active: currentCarouselIndex === index }">{{
            item
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
        <div class="more">
          更多成功案例
          <div>+</div>
        </div>
      </div>
      <div class="right">
        <div class="flrstWrap">
          <div class="first">
            <span>航空标识</span>
            <img v-lazy="imgUrls[10]" />
          </div>
        </div>
        <div class="bottom">
          <div class="details">
            <span>飞机制图解决方案创意梦想与梦境</span>
            <span>飞机工程定位图和画面设计</span>
            <span>飞机贴膜作业流程</span>
            <span>飞机数码贴膜的优势</span>
            <span>传统喷漆的制作流程</span>
            <span>技术支持</span>
            <span>政策法规的支持</span>
          </div>
          <div class="icons">
            <div v-for="item in transport" :key="item.key">
              <div class="imgWrap">
                <div>
                  <img
                    style="width: 50px;height: 50px;"
                    v-lazy="imgUrls[item]"
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
              <div class="content">{{ item.content }}</div>
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
export default {
  name: "Aviation",
  props: {
    urls: Object
  },
  data() {
    return {
      imgUrls: this.urls ? this.urls.solutionAviation : [],
      currentCarouselIndex: 0,
      carouselMap: [
        {
          name: "profile_1",
          url: `${this.urls ? this.urls.solutionAviation[0] : ""}`
        },
        {
          name: "profile_2",
          url: `${this.urls ? this.urls.solutionAviation[1] : ""}`
        },
        {
          name: "profile_3",
          url: `${this.urls ? this.urls.solutionAviation[2] : ""}`
        },
        {
          name: "profile_4",
          url: `${this.urls ? this.urls.solutionAviation[3] : ""}`
        }
      ],
      carouselTabs: [
        "航空飞机机身",
        "航空飞机机舱",
        "航空机场",
        "航空公司车辆"
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
      transport: [11, 12, 13, 14, 15, 16],
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
          content: "波音、空客原厂认证， 安全环保"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[22] : ""}`,
          subTitle: "喷绘方式",
          content: "照片效果逼真生动"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[23] : ""}`,
          subTitle: "安装快捷",
          content:
            "安装一个完整机身画面仅需2-3天 不影响飞机周旋律大幅度提升飞机在航时间"
        },
        {
          url: `${this.urls ? this.urls.solutionAviation[24] : ""}`,
          subTitle: "场地要求",
          content: "无需专用场地 相对无尘即可完成"
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
  methods: {
    carouselIndexChange(index) {
      this.currentCarouselIndex = index;
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
  margin: 2rem 5% 0;
  position: relative;

  /deep/ .el-carousel__indicators {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    height: 65%;
    width: calc(1rem + 6px);
    z-index: 200;

    .el-carousel__indicator {
      padding: 0;
      height: 25%;
      width: 100%;
      padding-left: 1rem;
    }

    .is-active > .el-carousel__button {
      background: rgb(153, 153, 153);
    }

    .el-carousel__button {
      width: 100%;
      height: 100%;
      background: rgb(204, 204, 204);
      opacity: 1;
    }
  }
}

.carouselTab {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translate(0, -50%);
  height: 65%;
  width: 1rem;
  background-color: rgb(153, 153, 153);
  z-index: 199;

  .active {
    color: white;
  }

  & > div {
    writing-mode: vertical-rl;
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
      margin-bottom: 1rem;
    }

    .subTitle {
      font-size: @fontSizeML;
      font-weight: @titleFontWeight;
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
      line-height: @fontSizeMd;
      display: flex;
      justify-content: flex-start;

      & > div {
        margin-left: 0.2rem;
        width: @fontSizeMd;
        height: @fontSizeMd;
        display: flex;
        color: @redColor;
        border: 1px solid @redColor;
        border-radius: 0.5rem;
        justify-content: center;
        align-items: flex-end;
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

    .flrstWrap {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .first {
      width: 6rem;
      height: 2rem;
      font-size: 0.55rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: @redColor;
      border-radius: 1.25rem;
      color: white;
      padding: 0 @fontSizeMd 0 (2 * @fontSizeMd);

      img {
        width: 1.25rem;
        height: 1.1rem;
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      margin-top: @fontSizeMd;
    }

    .details {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: @fontSizeMd;
      color: @contentFontColor;

      & > span {
        margin-bottom: @fontSizeMd;
      }
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
    margin-bottom: 1rem;
    padding-left: 5rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @titleFontWeight;
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
    margin-bottom: 1rem;
    padding-left: 4rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @titleFontWeight;
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
    margin-bottom: 1rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @titleFontWeight;
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
      width: 7rem;
      margin: 0 auto;
      margin-top: 2rem;

      .subTitle {
        margin-bottom: 0.25rem;
      }
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
    margin-bottom: 1rem;
    margin-left: 4rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @titleFontWeight;
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
    margin-bottom: 1rem;
    margin-left: 4rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @titleFontWeight;
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
    padding: 4rem 4rem 4rem 0;
  }

  .title {
    font-size: @fontSizeLg;
    font-weight: @titleFontWeight;
    margin-bottom: 1rem;
  }

  .subTitle {
    font-size: @fontSizeML;
    font-weight: @titleFontWeight;
    margin-bottom: 4rem;
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
