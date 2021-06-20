<template>
  <main class="RDCenter">
    <section class="banner">
      <img v-lazy="imgUrls[0]" />
    </section>
    <section class="introduction">
      <div class="titles">
        <div class="left">
          <div class="title">研发情况介绍</div>
          <div class="subTitle">ABOUT US</div>
        </div>
        <div class="right">
          <img v-lazy="logoUrls[0]" />
        </div>
      </div>
      <div class="subTitle">2018年与3M、深圳中车成立贴膜技术研发中心</div>
      <div class="imageWrap">
        <img v-lazy="imgUrls[1]" />
      </div>
      <div class="content">
        大昆仑通过与沃尔玛中国、顺丰集团、深圳地铁、东航、南航、海航、3M等各大公司的业务合作及促进，
        近年来，公司不断加大投入，通过自主开发、设备改造、技术升级等方式，升级研发设备。
        <br />
        <br />
        同时，为确保研发的投入规模、规范中心建设，特别制定了《研发中心管理制度》，从制度层面提升研发中心的管理水平和发展后劲。
        <br />
        <br />
        大昆仑以客户需求、行业发展趋势为方向，逐步从传统制作行业过渡到研发、创新的科研型智能企业。
      </div>
      <div class="subTitle">
        大昆仑技术研发管理制度
      </div>
      <div class="content">
        制定并严格执行《科研项目立项管理制度》，每年保持有 5-6
        项的科研立项，严格按照项目申请审批、 预算审批、
        中期试验控制、项目成果申报及转化的规范流程执行;
        <br />
        <br />
        制定《研发投入核算财务管理制度》，且每年不低于销售收入 5%
        的资金作为研发经费，实行专款专用，
        建立专账管理，建立了良好的研发费用财务核算管理体系;
        并编制了相关研发项目的《企业研发费用辅助明细账》。
        <br />
        <br />
        对于研发人员的激励管理和创新奖励，公司制定了《研究开发人员考核奖励制度》、《创新创业平台管理制度》、《特
        别贡献奖制度》等规章制度。
        在科技研发创新管理中，对于在技术创新、取得专利等成果的研发人员，给予奖励，
        很好地贯彻人才是第一生产力的人力资源理念。
      </div>
    </section>
    <section class="application">
      <div class="background">
        <img v-lazy="imgUrls[2]" />
      </div>
      <div class="cover">
        <div class="boxShadow"></div>
        <div class="boxShadow"></div>
      </div>
      <div class="applicationInner">
        <div class="examples">
          <div class="title">大昆仑拥有先进的打印设备</div>
          <div class="subTitle">
            PRINTING EQUIPMENT
          </div>
          <div class="images">
            <img v-lazy="imgUrls[3]" />
            <img v-lazy="imgUrls[4]" />
            <img v-lazy="imgUrls[5]" />
          </div>
        </div>
        <div class="use">
          <div class="title">大昆仑研发产品在航空市场的应用</div>
          <div class="subTitle">
            AVIATION MARKET
          </div>
          <div class="content">
            以 3M 绿色环保贴膜代替了传统的飞机油漆喷涂工艺。
            <br />
            大昆仑为 3M 公司授权的航空贴膜产品的施工单位，也是 3M MCS
            质保认单位、金牌画面制作商等。
            <br />
            在此基础上大昆仑服务各大航空公司的机身标示和贴膜项目。
            大昆仑多次承担航空公司的重大冠名项目的制作和服务，如东航玩具总动员、海航功夫熊猫号、南航
            欧蓝德号，南航荔枝号。大昆仑有能力和技术提供全套航空贴膜和提供解决方案并落地执行。
          </div>
          <img v-lazy="imgUrls[6]" />
        </div>
      </div>
    </section>
    <section class="range">
      <div class="left">
        <img v-lazy="imgUrls[7]" />
      </div>
      <div class="right">
        <div class="title">
          大昆仑服务于
          <br />
          国内 70% 的航空公司
        </div>
        <div class="content">
          中国东方航空、中国南方航空、中国联合航空、深圳航空、西部航空、北部湾航空、首都航空、
          上海金鹿公务航空、河北航空、海南航空、厦门航空、山东航空、海南航空、
          天津航空、江西航空、无锡航空、西安航空、天骄航空、华夏航空重庆航空、吉祥航空、红土航空
          ......
        </div>
      </div>
    </section>
    <section class="market">
      <img v-lazy="imgUrls[8]" />
      <div class="marketInner">
        <div class="title">
          大昆仑与3M合作的航空市场
        </div>
        <div class="content">
          在 3M 的支持和协助下，进行 3M7706 在民航局的标准认定研究 3M
          材料在航空市场的深化设计、应用、推广
          <br />
          航空及轨道车辆贴膜技术培训和推广
          <br />
          研发场地：不低于 1000 平方
          <br />
          采用 3M 规范的标准装修和设施
          <br />
          研发和培训物料由 3M 提供
          <br />
          预计培训人数：
          <br />
          在200名/年左右，按照 3M 统一的收费标准和折扣
          <br />
          生源渠道：来自各航空公司机务维修部门和轨道维修部门
        </div>
      </div>
    </section>
    <section class="allApplication">
      <img v-lazy="imgUrls[9]" />
      <div class="inner">
        <div class="trans">
          <div class="title">
            大昆仑研发产品
            <br />
            在交通运输领域的应用
          </div>
          <div class="subTitle">
            LOGISTICS FLEET
          </div>
          <div class="content">
            以3M绿色环保贴膜代替了传统的汽车油漆工艺。2015年-2020年，为顺丰集团提供全国运输车辆
            VI标示导入，为此，大昆仑在2016、2017年度被顺丰集团评为卓越供商。
          </div>
          <div class="imageWrap">
            <img v-lazy="imgUrls[10]" />
          </div>
        </div>
        <div class="logistics">
          <div class="titles">
            <div class="left">
              <div class="title">
                大昆仑服务于
                <br />
                国内顶级物流巨头
              </div>
            </div>
            <div class="right">
              <img v-lazy="imgUrls[11]" />
            </div>
          </div>
          <div class="content">
            大昆仑为顺丰速运集团全国 200多
            个城市物流车辆车身画面做标识贴膜工艺研究、画面打印制作、施工方案研究、施工安装落地大昆仑为德邦快递全国
            200多个城市物流车辆车身画面做标识贴膜工艺研究、画面打印制作、施工方案研究、施工安装落地
            <br />
            大昆仑为跨越速运华南大区 1000多
            台物流车辆车身画面标识贴膜做工艺研究、画面打印制作、施工方案研究、施工安装落地
          </div>
        </div>
        <div class="trackApplication">
          <div class="title">
            大昆仑研发产品
            <br />
            在轨道交通领域的应用
          </div>
          <div class="subTitle">
            RAIL TRANSIT
          </div>
          <div class="content">
            <div class="detail">
              以3M绿色环保贴膜代替了传统的轨道车辆喷漆工艺
            </div>
            <div
              class="text"
              v-for="(item, index) in trackApplications"
              :key="index"
            >
              <div class="square"></div>
              <div>
                <div
                  v-for="(text, textIndex) in splitString(item.text)"
                  :key="textIndex"
                >
                  {{ text }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="trackMarket">
          <div class="left">
            <img v-lazy="imgUrls[12]" />
          </div>
          <div class="right">
            <div class="title">
              大昆仑与3M合作研发的轨道交通市场
            </div>
            <div class="content">
              针对目前政府和企业单位提倡的环保方针，大昆仑计划研发环保节能的物料产品方案，
              同时，轨道交通车辆翻新所引起的油漆污染和施工场地限制已日渐提上议程，替代油漆的工艺研发刻不容缓，因此希望能联同
              3M / 深圳中车 / 深圳龙岗政府
              共同建立技术研发中心，为今后提供更多的环保产品技术方案和轨道交通车辆翻新的环保事业贡献一份力量
              <br />
              我们应加快轨道车辆绿色环保贴膜翻新技术代替传统油漆工艺的推广应用。
              抓住机会与深圳地铁、深圳中车、广佛线展开实质性的业务合作及开发
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="surpermarket">
      <img v-lazy="imgUrls[13]" />
      <div class="inner">
        <div class="titles">
          <div class="title">
            大昆仑科研产品在商超行业的应用
          </div>
          <div class="subTitle">
            SUPERMARKET INDUSTRY
          </div>
        </div>
        <div class="contents">
          <div class="left">
            <div class="content">
              <div
                :class="{ nowrap: index < 3 }"
                v-for="(text, index) in splitString(supermarketApplications)"
                :key="index"
              >
                <div>{{ text }}</div>
              </div>
            </div>
          </div>
          <div class="image">
            <img v-lazy="imgUrls[14]" />
          </div>
          <div class="imageWrap">
            <div>
              <img v-lazy="imgUrls[15]" />
            </div>
            <div>
              <img v-lazy="imgUrls[16]" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="achievements">
      <img v-lazy="imgUrls[19]" />
      <div class="inner">
        <div class="title">
          大昆仑研发成果
        </div>
        <div class="subTitle">
          {{ "R & D ACHIEVEMENTS" }}
        </div>
        <div class="imageWrap">
          <img v-lazy="imgUrls[17]" />
        </div>
        <div class="base">
          <div class="left">
            <img v-lazy="imgUrls[18]" />
          </div>
          <div class="right">
            <div class="title">
              大昆仑研发基地
            </div>
            <div class="subTitle">
              RESEARCH AND DEVELOPMENT BASE
            </div>
            <div class="content">
              已获得政府批准的首期 2000 平方的智慧家园技术研发基地作为基础。
              智慧家园，深圳东部中心重要科技产业支撑点区，政府重点打造的发展战略新兴产业重点园区
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    urls: Object
  },
  methods: {
    splitString: function(str) {
      if (str && str.split) {
        return str.split("\n");
      }

      return [str];
    }
  },
  data() {
    return {
      imgUrls: this.urls ? this.urls.RDCenter : [],
      logoUrls: this.urls ? this.urls.logo : [],
      trackApplications: [
        {
          text:
            "2019 年大昆仑中标深圳地铁 3 号线国产化升级改造及大修项目\n\
            为深圳 3 号线地铁车身贴膜方案做工艺研究、画面打印制作、安装施工 "
        },
        {
          text:
            "2020 年大昆仑中标广佛地铁列车大修及技改 ( 智能运维 ) 项目，\
            为广佛城际列车车身全包贴膜方案做工艺研究、\n\
            画面打印制作、施工安装 2017 年根据合同成为比亚迪云轨项目机车贴膜供应商"
        }
      ],
      supermarketApplications:
        "服务沃尔玛中国 420 家大型超市标牌项目长达 8 年。\n\
        为山姆会员店 28 \
        家会员店的标牌工程制定标准，带动了山姆店全国的整改。\n\
        为安利中国服务 12000 家工作室的标牌升级项目。\n\
        2009 年获得深圳市第 26 届大运会荣誉证书，\n\
        完成 295 次设计制作任务\n\
        2006 年起为 3M 公司经销商，经营 3M 全系类的标示类产品，\n\
        拥有完善的网上销售系统。\n\
        环保物料方案的研发、加快标牌智能化、环保化的研发课题的推进\
        根据沃尔玛中国的要求，针对传统物料难处理、和项目周\
        期长的问题，研发智能化广告及导向标牌，研究云结合显示膜\
        的技术作为广告及标牌的集成方案，替代传统的KT板、PVC板、LED\
        屏等物理 标牌，这将是未来标牌技术和工艺的趋势"
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
@fontSizeL: 0.85rem;
@fontSizeML: 0.75rem;
@fontSizeMd: 0.6rem;

@titleFontWeight: 700;
@subTitleFontWeight: 400;

.title {
  color: @redColor;
  font-size: @fontSizeLg;
  font-weight: @titleFontWeight;
  margin-bottom: 0.5rem;
}

.subTitle {
  font-size: @fontSizeML;
  font-weight: @titleFontWeight;
  margin-bottom: 2rem;
}

.content {
  line-height: 1rem;
}

.RDCenter {
  width: 100%;
  background-color: white;
  font-size: @fontSizeMd;
  color: @contentFontColor;
}

.banner {
  width: 100%;

  img {
    width: 100%;
  }
}

.introduction {
  margin: 4rem 20% 0;

  .titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .right {
      width: 4.5rem;

      img {
        width: 100%;
      }
    }
  }

  & > .subTitle {
    color: @redColor;
    margin-bottom: 0.75rem;
  }

  .imageWrap {
    margin-bottom: 1.5rem;
  }

  .imageWrap,
  img {
    width: 100%;
  }

  .content {
    margin-bottom: 4rem;
  }
}

.application {
  width: 100%;
  min-height: 22rem;
  position: relative;

  .background {
    padding-top: 0.5rem;
  }

  .background,
  img {
    width: 100%;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 30%;
    background-color: rgba(203, 74, 64, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    .boxShadow {
      box-shadow: 0 0.25rem 0.75rem 0.5rem rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 1px;
    }

    .boxShadow:first-child {
      margin-top: -1px;
    }

    .boxShadow:last-child {
      margin-bottom: -1px;
    }
  }

  .applicationInner {
    width: 70%;
    position: absolute;
    top: 5rem;
    left: 15%;
    background: linear-gradient(
      to bottom,
      white,
      white 30%,
      transparent 60%,
      transparent
    );
    padding: 4rem;

    .examples {
      width: 100%;
    }

    .images {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 6rem;

      img:nth-child(1) {
        width: 60%;
      }

      img:nth-child(2) {
        width: 40%;
      }

      img:nth-child(3) {
        width: 100%;
      }
    }
  }

  .use {
    .content {
      line-height: 1.2rem;
      margin-bottom: 2rem;
    }

    img {
      width: 130%;
      margin-left: -15%;
    }
  }
}

.range {
  width: 75%;
  margin: 0 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .left {
    width: 65%;
    padding-right: 1.5rem;

    img {
      width: 100%;
    }
  }

  .right {
    width: 32%;

    .title {
      margin-bottom: 1.5rem;
    }
  }
}

.market {
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }

  .marketInner {
    width: 30%;
    position: absolute;
    top: 20%;
    left: 20%;
  }

  .title {
    margin-bottom: 2rem;
  }

  .content {
    line-height: 1.2rem;
  }
}

.allApplication {
  width: 100%;
  position: relative;
  color: white;
  display: flex;

  .title {
    color: white;
    white-space: nowrap;
  }

  .content {
    line-height: 1.2rem;
  }

  & > img {
    width: 100%;
  }

  .inner {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 6rem;
  }

  .trans {
    width: 20%;
    margin-left: 60%;

    .subTitle {
      margin-bottom: 1rem;
    }

    .imageWrap {
      width: 90%;
      margin-top: 1rem;

      img {
        width: 100%;
      }
    }
  }

  .logistics,
  .trackApplication,
  .trackMarket {
    width: 60%;
    margin: 2rem 20% 0;
  }

  .logistics {
    img {
      width: 100%;
    }

    .titles {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 2rem;

      .left {
        width: 30%;
      }

      .right {
        width: 70%;
      }
    }
  }

  .trackApplication {
    margin-top: 6rem;

    .subTitle {
      margin-bottom: 6rem;
    }

    .text {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .trackMarket {
    margin-top: 8rem;
    display: flex;
    justify-content: space-between;

    .left {
      width: 32%;

      img {
        width: 100%;
      }
    }

    .right {
      width: 57%;

      .title {
        margin-bottom: 1.5rem;
      }
    }
  }
}

.surpermarket {
  width: 100%;
  margin-bottom: 20rem;

  img {
    display: inline-block;
    width: 100%;
  }

  .inner {
    width: 100%;
    margin-top: -4rem;
  }

  .titles {
    width: 60%;
    margin-left: 20%;
  }

  .contents {
    width: 70%;
    background-color: @redColor;
    color: white;
    padding: 4rem 10% 4rem 20%;
    position: relative;

    .left {
      width: 80%;
    }

    .nowrap {
      white-space: nowrap;
    }

    .image {
      position: absolute;
      left: 85%;
      top: -20%;
      width: 52%;
    }

    .imageWrap {
      position: absolute;
      left: 20%;
      top: 90%;
      width: 110%;
      display: flex;
      justify-content: space-between;

      div {
        border-radius: 1rem;
        background-color: white;
        padding: 0.25rem;
      }

      div:first-child {
        width: 52%;
      }

      div:last-child {
        width: 48%;
      }

      img {
        border-radius: 1rem;
        height: 100%;
      }
    }
  }
}

.achievements {
  width: 100%;
  display: flex;
  position: relative;

  img {
    width: 100%;
  }

  .inner {
    width: 60%;
    position: absolute;
    top: -1.2rem;
    left: 20%;
  }

  .subTitle {
    margin-bottom: 4rem;
  }

  .imageWrap {
    margin-bottom: 4rem;
    width: 100%;
  }

  .base {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    width: 40%;
  }

  .right {
    width: 50%;

    .subTitle {
      margin-bottom: 2rem;
    }
  }
}
</style>
