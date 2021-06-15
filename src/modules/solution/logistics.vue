<template>
  <main class="logistics">
    <section class="programmes">
      <img :src="imgUrls[0]" />
    </section>
    <section class="programme">
      <div class="details">
        <div class="left">
          <div class="title">物流车队标识及贴膜工艺解决方案</div>
          <div class="subTitle">
            <div>Logistics team logo</div>
            <div>and film technology solutions</div>
          </div>
          <div class="content">
            <div v-for="(item, index) in programmeTexts" :key="index">
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="subTitle">
            <span class="sign">3M</span>
            <span>车队专用材料IJ180MC</span>
          </div>
          <div class="content">
            <div v-for="(item, index) in programmeMerit" :key="index">
              <div class="dot">·</div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <img :src="imgUrls[1]" />
      <div class="taleWrap">
        <el-table :data="characteristics" :style="{ width: '100%' }">
          <el-table-column
            v-for="(item, index) in characteristicTitles"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          >
          </el-table-column>
        </el-table>
      </div>
    </section>
    <section class="advantage">
      <div class="title">车队标识贴膜解决方案的优势</div>
      <div class="subTitle">Advantages of fleet logo film solutions</div>
      <div class="content">
        <div class="left">
          <div class="subTitle">行业领先</div>
          <div class="text">
            在中国物流车队标识行业，大昆仑是行业内公认的行业领导者，凭借创新的技术和强大的全资源整合能力，
            为客户提供高品质、专业可靠的车队标识解决方案，深受国内众多客户的信赖。近年来，大昆仑已为国内众多物流巨头的车辆打造车身画面，
            创造品牌价值。
          </div>
          <img :src="imgUrls[2]" />
        </div>
        <div class="right">
          <img :src="imgUrls[3]" />
        </div>
      </div>
    </section>
    <section class="introduction">
      <div class="left">
        <img :src="imgUrls[4]" />
      </div>
      <div class="right">
        <div class="header">
          <div class="subTitle">MCS质量保证体系</div>
          <div class="text">
            <div><span class="sign">3M</span>的质量保证体系分为：</div>
            <div>产品基本质保、产品功能保证、完美匹配体统（MCS）</div>
            <div>
              为授权经销商、加工商及最终用户提供完善的质量保证和最优质的服务。
            </div>
          </div>
        </div>
        <div
          class="rightItem"
          v-for="(item, index) in introductions"
          :key="index"
        >
          <div v-if="index > 0" class="border-bottom"></div>
          <div class="subTitle">{{ item.title }}</div>
          <div class="text">{{ item.content }}</div>
        </div>
      </div>
    </section>
    <section class="construction">
      <div class="left">
        <div class="subTitle">认证安装施工网络</div>
        <div class="content">
          施工团队全国布局，覆盖广泛，可满足客户多地安装需求
          认证施工团队均经过3M专业培训和测试，服务可靠，客户放心
          施工团队均配有专业施工工具，施工速度快，减少车辆占用时间，有效提升运营效率；
        </div>
        <img :src="imgUrls[5]" />
      </div>
      <div class="right">
        <img :src="imgUrls[6]" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    urls: Object
  },
  data() {
    return {
      imgUrls: this.urls ? this.urls.solutionLogistics : [],
      programmeTexts: [
        {
          text:
            "流动性强：不受地理位置的限制，可根据客户需求在任何区域作全天候深入广泛的宣传。"
        },
        {
          text:
            "传播方式独特：色彩绚丽、视觉冲击力强，受关注程度高。\
              广告容量大、成本低、超大广告版面，画面与费用之比是其它媒体无法比拟的。"
        },
        {
          text:
            "时效长、受众面广：数月乃至数年的宣传时效可形成上千万次的重复到达。"
        }
      ],
      programmeMerit: [
        {
          text: "铸造级白色PVC膜"
        },
        {
          text: "优异的画面喷绘质量"
        },
        {
          text: "灰色压敏背胶，具有良好的遮蔽性"
        },
        {
          text:
            "具有专利权的Comply导气槽及Controltac易定\
              位背胶技术，操作简便，可最大限度的减少损耗"
        },
        {
          text: "优异的延展性，可去除背胶，无残胶"
        },
        {
          text: "5年质保"
        },
        {
          text: "除了平面，还可贴覆曲面及铆钉面"
        },
        {
          text: "适用油墨: UV、溶剂、弱溶剂均可"
        },
        {
          text: "推荐保护膜: 8519/8520"
        }
      ],
      characteristicTitles: [
        {
          label: "优势",
          prop: "advantage",
          width: "20"
        },
        {
          label: "性能",
          prop: "performance",
          width: "35"
        },
        {
          label: "好处",
          prop: "benefit",
          width: "45"
        }
      ],
      characteristics: [
        {
          advantage: "3M压力激活背胶",
          performance: "可反复定位，可移除",
          benefit: "可以在施工前确认施工位置后再激活背胶粘性，减少损耗"
        },
        {
          advantage: "第三代导气槽",
          performance: "提供最高等级的导气技术",
          benefit: "施工简便，无气泡，皮膜表面无导气槽的纹路"
        },
        {
          advantage: "绝佳的初粘性",
          performance: "更好的适应复合曲面及铆钉面施工",
          benefit: "无需胶粘性发展的时间能够减少车辆上路前的等待时间"
        },
        {
          advantage: "灰色背胶",
          performance: "绝佳的遮蔽性",
          benefit: "喷绘画面的绝佳表现，不会露出底色"
        },
        {
          advantage: "半永久性背胶",
          performance: "快速、方便的加热、移除无残胶",
          benefit: "无卷边，无收缩，无开裂，对于许多复杂表面具有绝佳的贴覆性"
        },
        {
          advantage: "铸造级贴膜",
          performance: "质量稳定",
          benefit: "光面，完美的画面表现"
        }
      ],
      introductions: [
        {
          title: "产品基本质保",
          content: "针对产品未经任何加工前的质量保证。"
        },
        {
          title: "产品功能保证",
          content: "针对打印后材料的质量保证"
        },
        {
          title: "完美匹配系统（MCS）",
          content: "针对喷绘后3M成品的最高等级的品质保证"
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

@fontSizeLg: 1.1rem;
@fontSizeML: 0.75rem;
@fontSizeMd: 0.55rem;

@titleFontWeight: 700;
@subTitleFontWeight: 400;

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

.logistics {
  width: 100%;
  background-color: white;
  font-size: @fontSizeMd;
  color: @contentFontColor;
}

.programmes {
  margin-top: 2rem;
  width: 100%;

  img {
    width: 100%;
  }
}

.programme {
  margin: 0 15%;
  margin-top: 6rem;
  width: 70%;

  .sign {
    font-size: 0.75rem;
    color: red;
    font-weight: bolder;
  }

  .details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .left {
      width: 50%;

      .content {
        line-height: 1.5rem;
      }
    }

    .right {
      width: 40%;
      padding-top: 0.25rem;

      .content {
        line-height: 1rem;

        & > div {
          display: flex;
          justify-content: flex-start;
        }
      }

      .dot {
        margin-right: 0.25rem;
      }

      .subTitle {
        margin-bottom: 4rem;
      }
    }
  }

  & > img {
    width: 100%;
  }

  .taleWrap {
    width: 100%;
    margin-top: 2rem;

    /deep/ .el-table {
      .el-table__header,
      .el-table__empty-block,
      .el-table__body {
        width: 100% !important;
      }

      th,
      td {
        text-align: center;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
      }

      th {
        background-color: @redColor;
        color: white;
      }

      td {
        font-size: 0.5rem;
      }

      .el-table__row:nth-child(2n + 1) {
        background-color: rgb(230, 230, 230);
      }

      .el-table__row:nth-child(2n) {
        background-color: rgba(203, 74, 64, 0.2);
      }
    }
  }
}

.advantage {
  margin: 0 0 0 15%;
  margin-top: 6rem;
  width: 85%;

  .subTitle {
    margin-bottom: 3rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .left {
    width: 40%;

    .subTitle {
      margin-bottom: 0.5rem;
      color: @redColor;
    }

    .text {
      line-height: 1.2rem;
      margin-bottom: 3rem;
    }

    img {
      width: 80%;
    }
  }

  .right {
    width: 60%;

    img {
      width: 100%;
    }
  }
}

.introduction {
  margin-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .subTitle {
    margin-bottom: 0.5rem;
    color: @redColor;
  }

  .left {
    width: 30%;
    margin-right: 4rem;

    img {
      width: 100%;
    }
  }

  .right {
    .header,
    .rightItem {
      margin-bottom: 1.6rem;
      position: relative;
    }

    .sign {
      font-weight: bolder;
    }

    .border-bottom {
      position: absolute;
      top: -0.8rem;
      width: 9rem;
      border-bottom: 2px solid rgba(102, 102, 102, 0.2);
    }
  }
}

.construction {
  margin: 6rem 0 8rem 20%;
  width: 80%;
  position: relative;

  .left {
    width: 40%;

    .subTitle {
      margin-bottom: 0.5rem;
      color: @redColor;
    }

    img {
      width: 100%;
    }

    .content {
      line-height: 1.2rem;
      margin-bottom: 2rem;
    }
  }

  .right {
    position: absolute;
    right: -2rem;
    top: -40%;
    width: 80%;

    img {
      width: 100%;
    }
  }
}
</style>
