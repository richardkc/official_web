<template>
  <main class="planeMedia">
    <div class="mainPicture">
      <img v-lazy="imgUrls[0].url" />
    </div>
    <div class="aviations">
      <div class="titles">
        <img v-lazy="imgUrls[1].url" />
        <div class="title">航空媒体综合服务商</div>
      </div>
      <div class="parts firstPart">
        <div class="left">
          <div
            class="columnWrap"
            v-for="(item, index) in aviationColumns"
            :key="index"
            :style="{ color: item.color }"
          >
            <div class="column" :style="{ height: item.height }">
              <div class="columnTitle">{{ item.title }}</div>
              <div class="inner" :style="{ background: item.color }"></div>
            </div>
            <div class="columnContent">{{ item.content }}</div>
          </div>
        </div>
        <div class="right">
          <img v-lazy="imgUrls[2].url" />
          <div class="describe">三高人群<br />至优受众</div>
        </div>
      </div>
      <div class="concat firstConcat">
        <div class="text">Audience</div>
        <div class="text">
          Proportion
          <br />
          of the
          <br />
          population
        </div>
      </div>
      <div class="parts secondParts">
        <div class="left">
          <div class="describe">人群占比</div>
          <img v-lazy="imgUrls[3].url" />
        </div>
        <div class="right">
          <img v-lazy="imgUrls[4].url" />
        </div>
      </div>
      <div class="concat secondConcat">
        <div class="text">Airport capacity coverage average</div>
        <div class="icon">
          <img v-lazy="imgUrls[5].url" />
        </div>
      </div>
      <div class="parts thirdParts">
        <div class="left">
          <div
            class="rowWrap"
            v-for="(item, index) in aviationRows"
            :key="index"
          >
            <div class="row">
              <div class="cover" :style="{ width: item.width }">
                {{ item.content }}
              </div>
            </div>
            <div class="rowTitle">{{ item.title }}</div>
          </div>
        </div>
        <div class="right">
          <div class="describe">
            各机场运力
            <br />
            覆盖平均值
          </div>
        </div>
      </div>
    </div>
    <div class="resources">
      <div class="titles">
        <img v-lazy="imgUrls[6].url" />
        <div class="title">云端媒体资源</div>
      </div>
      <div class="imgWrap">
        <img v-lazy="imgUrls[7].url" />
      </div>
    </div>
    <div class="forms">
      <div class="titles">
        <img v-lazy="imgUrls[8].url" />
        <div class="title">七种媒体形式</div>
      </div>
      <div class="parts firstParts">
        <div class="left withText">
          <div class="partTitle">
            <div>
              <div class="lg">行李架</div>
              <div>Luggage rack</div>
            </div>
            <div class="xl">
              1
            </div>
          </div>
          <div class="partContent">空中巨无霸</div>
        </div>
        <div class="right">
          <img v-lazy="imgUrls[9].url" />
        </div>
      </div>
      <div class="parts secondParts">
        <div class="left">
          <img v-lazy="imgUrls[10].url" />
        </div>
        <div class="right withText">
          <div class="partTitle">
            <div class="xl">
              2
            </div>
            <div>
              <div class="lg">小桌板</div>
              <div>
                The user can<br />demonstrate on a<br />projector or computer
              </div>
            </div>
          </div>
          <div class="partContent">开合之间 直达心间</div>
        </div>
      </div>
      <div class="parts thirdParts">
        <div class="left withText">
          <div class="partTitle">
            <div>
              <div class="lg">座椅头巾</div>
              <div>Seat scarf</div>
            </div>
            <div class="xl">
              3
            </div>
          </div>
          <div class="partContent">头条新闻 近而复视</div>
        </div>
        <div class="right">
          <img v-lazy="imgUrls[11].url" />
        </div>
      </div>
      <div class="parts forthParts">
        <div class="left">
          <img v-lazy="imgUrls[12].url" />
          <img v-lazy="imgUrls[13].url" />
        </div>
        <div class="right withText">
          <div class="partTitle">
            <div class="xl">
              4
            </div>
            <div>
              <div class="lg">机身彩绘</div>
              <div>
                Body painting
              </div>
            </div>
          </div>
          <div class="partContent">云端引爆 超级巨星</div>
        </div>
      </div>
      <div class="parts fifthParts">
        <div class="left withText">
          <div class="partTitle">
            <div>
              <div class="lg">书籍杂志</div>
              <div>Books and magazines</div>
            </div>
            <div class="xl">
              5
            </div>
          </div>
          <div class="partContent">爱书人的快乐休闲时刻</div>
        </div>
        <div class="right">
          <img v-lazy="imgUrls[14].url" />
        </div>
      </div>
      <div class="parts sixthParts">
        <div class="left">
          <img v-lazy="imgUrls[15].url" />
        </div>
        <div class="right withText">
          <div class="partTitle">
            <div class="xl">
              6
            </div>
            <div>
              <div class="lg">机上电视</div>
              <div>
                On board TV
              </div>
            </div>
          </div>
          <div class="partContent">超级声量 响彻云端</div>
        </div>
      </div>
      <div class="parts seventhParts">
        <div class="left withText">
          <div class="partTitle">
            <div>
              <div class="lg">登机牌</div>
              <div>boarding pass</div>
            </div>
            <div class="xl">
              7
            </div>
          </div>
          <div class="partContent">一路不离手 我们一起走</div>
        </div>
        <div class="right">
          <img v-lazy="imgUrls[16].url" />
        </div>
      </div>
    </div>
    <div class="cases">
      <div class="titles">
        <img v-lazy="imgUrls[17].url" />
        <div class="title">合作案例</div>
      </div>
      <div class="inner">
        <div class="left">
          <div
            class="planesCases"
            v-for="(item, index) in planeCases"
            :key="index"
            :class="{ selected: showPlaneCaseIndex === index }"
            @click="() => planeCaseChecked(index)"
          >
            <div>
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="right">
          <img v-lazy="showPlaneCaseUrl" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import store from "../../store/warehouse";
export default {
  props: {
    urls: Object
  },
  data() {
    return {
      selectIndex: 0,
      imgUrls: this._.chain(new Array(50))
        .map(() => {
          return { url: "" };
        })
        .value(),
      aviationColumns: [
        {
          title: "90%+",
          height: "100%",
          content: "大学以上学历",
          color: "#999999"
        },
        {
          title: "79%",
          height: "80%",
          content: "政企高管",
          color: "#b3b3b3"
        },
        {
          title: "69.2%",
          height: "60%",
          content: "家庭年收入20W+",
          color: "#cccccc"
        }
      ],
      aviationRows: [
        {
          title: "南航",
          content: "16.43 %",
          width: "30%"
        },
        {
          title: "东航",
          content: "13.83 %",
          width: "25%"
        },
        {
          title: "国航",
          content: "9.97 %",
          width: "20%"
        }
      ],
      planeCases: [
        {
          name: "江西航空-井冈山号"
        },
        {
          name: "山东航空-云门号"
        },
        {
          name: "南方航空--广汽欧蓝德号"
        },
        {
          name: "南方航空--广东荔枝号"
        },
        {
          name: "华夏航空-衢州号"
        },
        {
          name: "海南航空-功夫熊猫号"
        }
      ],
      showPlaneCaseIndex: 0,
      showPlaneCaseUrl: ""
    };
  },
  mounted() {
    this.$axios.get("/api/media-designs").then(res => {
      if (this._.size(res.data) > 0) {
        this.imgUrls = store.formatPaths(
          this._.get(res, `data[${0}].planeMedia`)
        );
      }
    });

    this.$axios.get("/api/exhibitions").then(res => {
      if (res.data.length > 0) {
        this.planeCasesUrl = store.formatPaths(
          this._.get(res, "data[0].plane_media")
        );
        this.showPlaneCaseUrl = this._.get(
          this.planeCasesUrl,
          `[${this.showPlaneCaseIndex}].url`
        );
      }
    });
  },
  methods: {
    scrollExamples(type) {
      if (type === "left") {
        document.getElementById("examples").scrollLeft = 0;
      } else if (type === "right") {
        document.getElementById("examples").scrollLeft = 99999;
      }
    },
    planeCaseChecked(index) {
      this.showPlaneCaseIndex = index;
      this.showPlaneCaseUrl = this._.get(this.planeCasesUrl, `[${index}].url`);
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

@fontSizeLg: 1.1rem;
@fontSizeML: 0.75rem;
@fontSizeMd: 0.6rem;

@titleFontWeight: 700;
@subTitleFontWeight: 400;

img {
  display: flex;
  height: 100%;
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

.planeMedia {
  width: 100%;
}

.mainPicture {
  width: 100%;

  img {
    width: 100%;
  }
}

.aviations {
  width: 100%;
  padding: 4rem 20% 0;

  .titles {
    width: 100%;
    margin-bottom: 3rem;

    img {
      width: 20rem;
      margin-bottom: 0.5rem;
    }
  }

  .title {
    color: @redColor;
  }

  .parts {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .concat {
    height: 8rem;
    width: 100%;
    position: relative;

    .text {
      color: #cccccc;
    }
  }

  .firstPart {
    align-items: flex-end;

    .left {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right {
      position: relative;
      width: 60%;

      img {
        width: 100%;
      }
    }

    .describe {
      position: absolute;
      top: -2.5rem;
      right: -1rem;
      width: 6rem;
      height: 5rem;
      background-color: @redColor;
      color: white;
      font-size: 1rem;
      padding: 1rem;
      white-space: nowrap;
    }
  }

  .columnWrap {
    position: relative;
    height: 6rem;
    display: flex;
    align-items: flex-end;
    margin: 0 2.2rem 1.25rem 0;

    .column {
      width: 1rem;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;

      > div {
        width: 100%;
        white-space: nowrap;
      }
    }

    .inner {
      flex: 1;
    }

    .columnContent {
      position: absolute;
      bottom: -1.2rem;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
  }

  .firstConcat {
    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;
      width: 72%;
      height: calc(50% - 2px);
      right: 12%;
    }

    &::before {
      top: 0;
      border: 3px dashed transparent;
      border-right-color: @redColor;
      border-bottom-color: @redColor;
    }

    &::after {
      top: 50%;
      border: 3px dashed transparent;
      border-left-color: @redColor;
    }

    .text {
      position: absolute;
      padding: 0.1rem 0;
    }

    .text:nth-child(1) {
      top: 10%;
      right: 12%;
      transform: translateX(50%);
      background-color: white;
    }

    .text:nth-child(2) {
      bottom: 5%;
      left: -0.5rem;
    }
  }

  .secondParts {
    .left {
      width: 60%;
      position: relative;

      .describe {
        position: absolute;
        bottom: 1rem;
        left: -1rem;
        width: 6rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: @redColor;
        color: white;
        font-size: 1rem;
        padding: 1rem;
        white-space: nowrap;
      }

      img {
        width: 100%;
      }
    }

    .right {
      width: 40%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      img {
        width: 90%;
      }
    }
  }

  .secondConcat {
    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;
      width: 78%;
      height: calc(50% - 2px);
      right: 6%;
    }

    &::before {
      top: 0;
      border: 3px dashed transparent;
      border-left-color: @redColor;
      border-bottom-color: @redColor;
    }

    &::after {
      top: 50%;
      border: 3px dashed transparent;
      border-right-color: @redColor;
    }

    .text {
      position: absolute;
      padding: 0.1rem 0;
      left: 0;
      bottom: 10%;
    }

    .icon {
      z-index: 100;
      width: 1rem;
      position: absolute;
      right: 6%;
      bottom: 0;
      background-color: white;
      transform: translateX(50%);
      padding: 0.1rem 0 0.4rem;

      img {
        width: 100%;
      }
    }
  }

  .thirdParts {
    height: 8rem;

    .left {
      width: 65%;
    }

    .right {
      width: 35%;

      .describe {
        width: 70%;
        margin-left: 30%;
        height: 6rem;
        background-color: @redColor;
        color: white;
        font-size: 1rem;
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .rowWrap:not(:last-child) {
      margin-bottom: 1.2rem;
    }

    .rowWrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .row {
        flex: 1;
        background-color: #cccccc;
      }

      .rowTitle {
        margin-left: 0.4rem;
        white-space: nowrap;
      }

      .cover {
        height: 1.2rem;
        line-height: 1.2rem;
        background-color: @redColor;
        color: white;
        padding-left: 1rem;
      }
    }
  }
}

.resources {
  width: 60%;
  margin: 4rem 20% 0;

  .titles {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 2rem;

    img {
      width: 20rem;
      margin-bottom: 0.5rem;
    }

    .title {
      color: @redColor;
    }
  }

  .imgWrap {
    width: 100%;

    img {
      width: 100%;
    }
  }
}

.forms {
  width: 60%;
  margin: 4rem 20% 0;

  .titles {
    margin-bottom: 4rem;

    img {
      width: 20rem;
      margin-bottom: 0.5rem;
    }

    .title {
      color: @redColor;
    }
  }

  .parts {
    display: flex;
    justify-content: flex-start;
    color: white;
  }

  .parts:not(:last-child) {
    margin-bottom: 2rem;
  }

  .partTitle {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .partContent {
    font-size: 1.1rem;
    white-space: nowrap;
  }

  .lg {
    font-size: 0.9rem;
  }

  .xl {
    font-size: 3.8rem;
    line-height: 2.5rem;
  }

  .withText {
    background-color: @redColor;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .firstParts {
    .left {
      width: 30%;
      padding: 1rem;
      padding-right: 0;
      border-top-left-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;
    }

    .right {
      width: 70%;

      img {
        width: 100%;
      }
    }
  }

  .secondParts {
    margin-bottom: 1rem !important;

    .left {
      width: 60%;
      overflow: visible;
      z-index: 100;

      img {
        width: calc(100% + 1.5rem);
      }
    }

    .right {
      width: 40%;
      padding: 1rem;
      padding-left: 2rem;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
      margin-top: 0.8rem;
    }

    .partTitle {
      text-align: right;
    }
  }

  .thirdParts {
    .left {
      width: 40%;
      padding: 1rem;
      margin-top: 3rem;
      border-radius: 1.5rem;
      border-bottom-right-radius: 0;
    }

    .right {
      width: 60%;
      padding-left: 4%;

      img {
        width: 100%;
      }
    }
  }

  .forthParts {
    position: relative;

    .left {
      width: 60%;

      img {
        width: calc(100% + 1.5rem);
      }

      img:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(60% + 1.5rem);
      }
    }

    .right {
      width: 40%;
      padding: 1rem;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }

    .partTitle {
      text-align: right;
    }
  }

  .fifthParts {
    .left {
      width: 40%;
      padding: 1rem;
      border-radius: 1.5rem;
      border-bottom-right-radius: 0;
    }

    .right {
      width: 60%;
      padding-left: 4%;

      img {
        width: 100%;
      }
    }
  }

  .sixthParts {
    position: relative;

    .left {
      width: 60%;

      img {
        width: calc(100% + 1.5rem);
      }
    }

    .right {
      width: 40%;
      padding: 1rem;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }

    .partTitle {
      text-align: right;
    }
  }

  .seventhParts {
    .left {
      width: 40%;
      padding: 1rem;
      border-radius: 1.5rem;
      border-bottom-right-radius: 0;
    }

    .right {
      width: 60%;
      padding-left: 4%;

      img {
        width: 75%;
        margin-left: 25%;
      }
    }
  }
}

.cases {
  width: 60%;
  margin: 8rem 20% 4rem;

  .titles {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    img {
      width: 20rem;
      margin-bottom: 0.5rem;
    }

    .title {
      color: @redColor;
      margin-bottom: 0;
    }
  }

  .inner {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .left {
    width: 30%;
    border-left: 3px dashed @redColor;
    padding: 3rem 0;
  }

  .planesCases {
    display: inline-block;
    margin: 0 0 1rem -2px;
    margin-bottom: 1rem;
    padding: 0.2rem 0.75rem;
    cursor: pointer;
  }

  .selected {
    background-color: @redColor;
    color: white;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .right {
    width: 70%;
    display: flex;
    justify-items: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 14rem;
      margin: auto;
    }
  }
}
</style>
