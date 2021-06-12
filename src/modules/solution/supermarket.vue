<template>
  <div class="supermarket">
    <section class="banner">
      <img src="../../assets/images/supermarket/supermarket-1.png" />
    </section>
    <section class="solution">
      <div class="solutionInside">
        <div class="title">
          商超标识解决方案
        </div>
        <div class="subTitle">
          SUPERMARKET LOGO SOLUTION
        </div>
        <div class="content">
          <div v-for="(item, index) in history" :key="index">
            {{ item.text }}
          </div>
        </div>
      </div>
    </section>
    <section class="framework">
      <div class="cover">
        <img src="../../assets/images/supermarket/supermarket-2.png" />
      </div>
      <div class="frameWorkInside">
        <div class="left">
          <div class="title">服务架构</div>
          <div class="subTitle">
            SERVICE ARCHITECTURE
          </div>
          <div class="dialog">
            <div class="content">
              公司针对所有沃尔玛相关项目的负责同事每月进行绩效考评，项目完成总结经验，提升技能与技巧。<br />
              培训与提升：公司引进AS9100D的质量管理体系进行优化，针对项目人员每3个月做一次系统的培训与考核。
            </div>
            <div class="subTitle">
              简单快捷 专业标准 热心热情 细致认真
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../../assets/images/supermarket/supermarket-3.png" />
        </div>
      </div>
    </section>
    <section class="process">
      <div class="titles">
        <div class="left">
          <div class="title">服务流程</div>
          <div class="subTitle">SERVICE PROCESS</div>
        </div>
        <div class="right">
          定期培训<br />
          建设文件管理系统<br />
          即时反馈及解决原则
        </div>
      </div>
      <div class="contentWrap">
        <div class="left">
          <div
            class="processItem"
            v-for="(item, index) in processes"
            :key="index"
          >
            <div class="index">{{ index + 1 }}</div>
            <div class="text">{{ item.text }}</div>
          </div>
        </div>
        <div class="right">
          <img src="../../assets/images/supermarket/supermarket-4.png" />
        </div>
      </div>
    </section>
    <section class="servers">
      <div class="title">服务案例</div>
      <div class="subTitle">SERVICE CASE</div>
      <div class="examples">
        <div class="example" v-for="(item, index) in servers" :key="index">
          <div class="content">{{ item.text }}</div>
          <img :src="item.url" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [
        {
          text:
            "2009年至今，为沃尔玛(中国)公司全国标牌供应商，服务全国400多家沃尔玛超市，提供全国标牌修补服务；"
        },
        {
          text:
            "2012年度：与深圳岁宝百货达成合作意向，为岁宝百货提供店内标识标牌标设计、制作、安装等服务；"
        },
        {
          text:
            "2015年至今，为安利(中国)总部广告标识供应商，服务全国12000家安利门店，提供标识标牌、海报制作等服务；"
        },
        {
          text: "2015年至今，服务国内28家山姆会员店，成为其全国标牌供应商；"
        },
        {
          text:
            "2016年至今，为沃尔玛49个店提供了新店及旧店改造的服务，连续6年为深圳及全国季节性广告物料提供服务；"
        },
        {
          text: "2017年度：宝能科技有限公司标牌广告服务。"
        }
      ],
      processes: [
        {
          text: "业务下达"
        },
        {
          text: "根据图纸规划"
        },
        {
          text: "走场核对、测量"
        },
        {
          text: "完善规划"
        },
        {
          text: "根据规划制定进度、下单生产"
        },
        {
          text: "进场安装"
        },
        {
          text: "新增、后补规划"
        },
        {
          text: "总结完工（完工报告）"
        },
        {
          text: "决算和总结、评估"
        }
      ],
      servers: [
        {
          text: "沃尔玛",
          url: require("../../assets/images/supermarket/supermarket-5.png")
        },
        {
          text: "山姆",
          url: require("../../assets/images/supermarket/supermarket-6.png")
        },
        {
          text: "安利",
          url: require("../../assets/images/supermarket/supermarket-7.png")
        },
        {
          text: "宝能科技",
          url: require("../../assets/images/supermarket/supermarket-8.png")
        }
      ]
    };
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

@fontSizeXL: 1.25rem;
@fontSizeLg: 1.1rem;
@fontSizeML: 0.75rem;
@fontSizeMd: 0.55rem;

@titleFontWeight: 700;
@subTitleFontWeight: 400;

.title {
  color: @redColor;
  font-size: @fontSizeLg;
  font-weight: @titleFontWeight;
  margin-bottom: 0.75rem;
}

.subTitle {
  font-size: @fontSizeML;
  font-weight: @titleFontWeight;
  margin-bottom: 2rem;
}

.content {
  line-height: 1.2rem;
}

.banner {
  width: 94%;
  margin: 4rem 3% 0;

  img {
    width: 100%;
  }
}

.sign {
  color: red;
  font-weight: bolder;
  font-size: @fontSizeXL;
}

.supermarket {
  width: 100%;
  background-color: white;
  font-size: @fontSizeMd;
  color: @contentFontColor;
}

.solution {
  width: 100%;
  background-color: @redColor;
  color: white;

  .solutionInside {
    width: 60%;
    margin: 4rem 20% 0;
    padding: 4rem 0;
  }

  .title {
    color: white;
  }
}

.framework {
  width: 100%;
  position: relative;
  padding-top: 4rem;
  overflow: hidden;

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -100;

    img {
      width: 100%;
    }
  }

  .frameWorkInside {
    width: 60%;
    margin: 0 20% 0;
    display: flex;
    justify-content: space-between;

    .left {
      width: 55%;

      .dialog {
        background-color: @greyColor;
        color: white;
        padding: 2rem 1.5rem;
        border-radius: 1rem;
        position: relative;

        .subTitle {
          margin: 2rem 0 0;
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 1rem solid transparent;
          border-left: 2rem solid @greyColor;
          border-bottom: 1rem solid transparent;
        }
      }
    }

    .right {
      width: 37%;

      img {
        width: 100%;
      }
    }
  }
}

.process {
  width: 60%;
  margin: 4rem 20% 0;

  .titles {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;

    .subTitle {
      margin: 0;
    }

    .right {
      text-align: right;
      line-height: 0.9rem;
      color: black;
    }
  }

  .contentWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      width: 55%;
    }

    .processItem {
      display: flex;
      justify-content: flex-start;
      color: white;

      .index {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        font-size: 1rem;
        text-align: center;
        line-height: 2rem;
        z-index: 100;
      }

      .text {
        height: 2rem;
        width: 12rem;
        margin-left: -2rem;
        border-radius: 1rem;
        font-size: 0.65rem;
        padding-left: 3rem;
        line-height: 2rem;
      }
    }

    .processItem:nth-child(2n + 1) {
      .index {
        background-color: @greyColor;
      }

      .text {
        background-color: @redColor;
      }
    }

    .processItem:nth-child(2n) {
      padding-left: 3rem;

      .index {
        background-color: @deepGreyColor;
      }

      .text {
        background-color: @greyColor;
      }
    }

    .right {
      width: 42%;

      img {
        width: 100%;
      }
    }
  }
}

.servers {
  width: 60%;
  margin: 6rem 20%;

  & > .subTitle {
    margin-bottom: 4rem;
  }

  .example {
    margin-bottom: 3rem;
  }

  .content {
    font-size: 0.6rem;
    color: black;
    font-weight: @titleFontWeight;
    margin-bottom: 1rem;
  }

  .example,
  img {
    width: 100%;
  }
}
</style>
