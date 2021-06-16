<template>
  <main class="railTransit">
    <section class="backgrounds">
      <img v-lazy="imgUrls[0]" />
      <img v-lazy="imgUrls[1]" />
      <div class="exteriorWrap">
        <div class="exterior">
          <div class="title">车辆外饰</div>
          <div class="subTitle">OUTSIDE</div>
          <div class="contents">
            <div class="subTitle">万众瞩目就是现在——沿途即是舞台</div>
            <div class="content">
              从此，您可以在车辆上创作令人惊叹的画面，更可以使您的车辆作为城市名片的一部分，助力当地城市文化宣传
            </div>
            <div
              class="details"
              v-for="(item, index) in exteriorDetails"
              :key="index"
            >
              <div class="dot"></div>
              <div>{{ item.text }}</div>
            </div>
            <div class="subTitle">
              相关产品系列
            </div>
            <div
              class="details"
              v-for="(item, index) in exteriorSeries"
              :key="index"
            >
              <div class="dot"></div>
              <div class="text">
                <div>{{ item.title }}</div>
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="interior">
      <div class="title">车辆内饰</div>
      <div class="subTitle">INSIDE</div>
      <div class="content">
        <div class="subTitle">
          流动的3D立体舞台,带你到远方旅行, 从此不再枯燥
        </div>
        <div class="detailText">
          动手创造您想要的画面、纹理，甚至触感，使车厢瞬间化身为流动的3D立体舞台，引领乘客走向远方。
        </div>
        <div class="details">
          <div v-for="(item, index) in interiorDetails" :key="index">
            <div class="dot"></div>
            <div>{{ item.text }}</div>
          </div>
        </div>
        <div class="images">
          <div class="left">
            <img v-lazy="imgUrls[2]" />
          </div>
          <div class="right">
            <img v-lazy="imgUrls[3]" />
            <img v-lazy="imgUrls[4]" />
          </div>
        </div>
        <div class="series">
          <div class="subTitle">相关产品系列</div>
          <div class="details">
            <div v-for="(item, index) in interiorSeries" :key="index">
              <div class="dot"></div>
              <div class="text">
                <div>{{ item.title }}</div>
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="window">
      <div class="top">
        <div class="left">
          <div class="title">车窗</div>
          <div class="subTitle">WINDOW</div>
          <div class="content">
            <div class="subTitle">小车窗，大智慧——给您家一般的安心与舒适</div>
            <div class="text">
              一个正确的车窗贴膜方案，可以给您的车辆带来意想不到的惊喜,
              让乘客拥有家一般 的舒适与安全。
            </div>
            <div class="details">
              <div
                class="detail"
                v-for="(item, index) in windowDetails"
                :key="index"
              >
                <div class="dot"></div>
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <img v-lazy="imgUrls[5]" />
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <img v-lazy="imgUrls[6]" />
        </div>
        <div class="right">
          <div class="subTitle">相关产品系列</div>
          <div class="details">
            <div
              class="detail"
              v-for="(item, index) in windowSeries"
              :key="index"
            >
              <div class="dot"></div>
              <div class="text">
                <div>{{ item.title }}</div>
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ground">
      <div class="top">
        <div class="left">
          <div class="leftTitle">
            <div class="titles">
              <div class="title">地面</div>
              <div class="subTitle">GROUND</div>
            </div>
            <div class="image">
              <img v-lazy="imgUrls[7]" />
            </div>
          </div>
          <div class="leftContent">
            <div class="subTitle">
              安全夺目——引领乘客的脚步
            </div>
            <div class="details">
              <div
                class="detail"
                v-for="(item, index) in groundDetails"
                :key="index"
              >
                <div class="dot"></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <img v-lazy="imgUrls[8]" />
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <img v-lazy="imgUrls[9]" />
        </div>
        <div class="right">
          <div class="subTitle">
            相关产品系列
          </div>
          <div class="details">
            <div
              class="detail"
              v-for="(item, index) in groundSeries"
              :key="index"
            >
              <div class="dot"></div>
              <div class="text">
                <div>{{ item.title }}</div>
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="overview">
      <div class="title">
        <div class="sign">3M</div>
        贴膜产品应用概述
      </div>
      <div class="subTitle">OVERVIEW</div>
      <div class="content">
        现阶段中国轨道交通发展速度快、规模大、范围广，车辆装备的市场需求、制造装配、投入运营及维修维保总量逐年上升。
        在轨道交通车辆传统的制造、维修过程中，车辆喷漆工艺产生的VOC(挥发性有机物)带来的环境问题逐渐引起社会关注，
        解决环保问题是轨道交通可持续发展进程中至关重要的一环。贴膜替代油漆涂装翻新城市轨道车辆表面是一种相对比较新的工艺，
        具有大幅降低VOC与重金属等有害物质排放，同时简化相关工序和步骤，提高生产效能的优点。因此，城市轨道交通车辆贴膜技术的
        应用与推广有助于加速行业制造、维保水平升级，促进轨道交通向绿色、环保、高效的方向发展。
        大昆仑公司与3M合作的贴膜产品在全球轨道车辆制造行业有很长时间的应用，主要应用集中在地铁、高铁的车内车外局部、全包装饰、
        车内车外标记等。在全球轨道交通车辆制造、翻新市场有很多成功案例，在国内的应用也很广泛.
        目前应用于轨道车辆表面装饰的3M贴膜主要为PVC贴膜，厚度在0.08mm左右,同时可以配套使用相对应的保护膜，可以
        提供更高的光泽度及易清洁性能等。
      </div>
      <div class="image">
        <img v-lazy="imgUrls[10]" />
      </div>
      <div class="content">
        贴膜的主要结构由上到下依次为透明保护膜层、PVC贴膜层、背胶层、衬纸层。
        3M贴膜的质保期期最长可以达到10年，使用期更长，完全可以满足轨道车辆外部装饰的需
        求。3M贴膜还应用一些专利技术在背胶上作一些特殊处理，比如涂布上一层玻璃微珠以方
        便贴膜施工时的预定位，并使用带导气槽的背胶以加快施工速度，提高施工质量。使用铸造
        法制造的皮膜，通常具有高达140%的延展率和小于0.4mm的收缩率，为施工于车身复杂表
        面提供了可能性。
      </div>
      <div class="subTitle compare">
        传统喷漆工艺与贴膜工艺的对比
      </div>
      <div class="image">
        <img v-lazy="imgUrls[11]" />
      </div>
      <div class="subTitle use">
        环保贴膜解决方案在地铁车辆车体翻新的应用
      </div>
      <div class="images">
        <div
          class="imageWrap"
          v-for="(item, index) in overviewApplications"
          :key="index"
        >
          <div class="index">{{ index + 1 }}</div>
          <div class="image">
            <img v-lazy="item.url" />
          </div>
        </div>
      </div>
    </section>
    <section class="advantage">
      <div class="advantageInside">
        <div class="title">使用贴膜替代传统喷漆的优势</div>
        <div class="subTitle">
          <div>Aircraft engineering</div>
          <div>positioning map and screen design</div>
        </div>
        <div class="introduction">
          相比于传统的喷漆工艺，车身外部使用贴膜进行车身全包具有如下优势
        </div>
        <div class="merits" v-for="(item, index) in advantages" :key="index">
          <div class="subTitle">
            <div class="index">{{ index + 1 }}、</div>
            <div>{{ item.title }}：</div>
          </div>
          <div class="text">{{ item.text }}</div>
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
  data() {
    return {
      imgUrls: this.urls ? this.urls.solutionRaiTransit : [],
      exteriorDetails: [
        {
          text: "一个优秀的画面解决方案，可以为您的车辆外饰带来精美的外观"
        },
        {
          text:
            "醒目的色彩到令人惊叹的画面，可以赢得乘客更多关注，提升最终用户体验"
        },
        {
          text:
            "3M画面贴膜产品拥有诸多功能,优秀的黏附性能、易定位和导气槽技术，以便施工者更加快速、轻松地施工和移除"
        }
      ],
      exteriorSeries: [
        {
          title: "3M画面贴膜(基础版)",
          text:
            "层次分明的混合打印，创造出酷炫的画面，微妙的设计中闪现优异的效果"
        },
        {
          title: "3M画面贴膜(环保版)",
          text: "高性能技术更环保，改变您的贴膜方式，质量出众，性能大幅度提升"
        },
        {
          title: "3M画面贴膜(反光版)",
          text:
            "独特的反光打印贴膜，让您的设计保持全天候的活力，更多广角反光，从此安全也 更有保障"
        },
        {
          title: "3M彩膜",
          text: " 一块块既定颜色的彩色贴膜，可支持专色定制"
        },
        {
          title: "3M画面保护膜",
          text:
            "配套的画面保护膜能够保护车体外画面免受气候、环境、破坏行为的影响，并能够形成一个保护屏障，确保画面长时间保持良好色泽除"
        }
      ],
      interiorDetails: [
        {
          text: "素雅的纹理,以及逼真、细腻的材质触感,可以提高车厢内部整体质感"
        },
        {
          text:
            "一个立体的画面解决方案,可以为您的车辆内饰带来令人惊叹的空间效果,赢得乘客更多关注,提升最终用户体验"
        },
        {
          text:
            "3M内饰专用贴膜产品的耐污、防刮擦功能,更有助于维持车厢整洁及减少人为摩擦带来的破损"
        }
      ],
      interiorSeries: [
        {
          title: "3M内饰专用贴膜 ",
          text:
            "天然材料的优良再现，拥有数百种逼真纹理设计(包括木材、大理石等)，可支持专色定制"
        },
        {
          title: "3M画面贴膜(基础版)",
          text:
            "层次分明的混合打印，创造出酷炫的画面，微妙的设计中闪现优异的效果"
        },
        {
          title: "3M画面贴膜(环保版)",
          text: "高性能技术更环保，改变您的贴膜方式，质量出众，性能大幅度提升"
        },
        {
          title: "3M画面保护膜",
          text: "一块块既定颜色的彩色贴膜，可支持专色定制"
        },
        {
          title: "3M画面保护膜",
          text:
            "配套的画面保护膜能够保护车厢内画面的色泽持久、表面清洁及防刮擦，同时提供逼真的 纹理触感"
        }
      ],
      windowDetails: [
        {
          text: "预防玻璃刮花不再是难题"
        },
        {
          text: "烈日炎炎,小小车窗变空调,带来更多凉爽"
        },
        {
          text: "阳光零刺眼,拥有更为舒适的车内光环境,保护视网膜,缓解眼疲劳"
        },
        {
          text: "阻隔高达99.9%的紫外线,减缓车内物品和设备的老化速度"
        },
        {
          text: "防止玻璃碎片飞溅,减少人身伤害"
        },
        {
          text: "隐私装饰,提升驾驶质量"
        }
      ],
      windowSeries: [
        {
          title: "3M玻璃保护膜",
          text: "降低外力刮擦及涂鸦对车窗玻璃的伤害"
        },
        {
          title: "3M玻璃隔热膜",
          text:
            "降低车内热量，减少空调能耗，防眩光，提高乘客体验舒适度，减缓车内设备老化速度"
        },
        {
          title: "3M玻璃安全防爆膜",
          text: "抗拉伸、防开裂，增强玻璃抗冲击力，减少碎片飞溅,降低人身伤害"
        },
        {
          title: "3M玻璃隐私膜",
          text: "通过镜面效果实现隐私，保护驾驶室隐私，提升驾驶员操作环境"
        }
      ],
      groundDetails: [
        {
          text:
            "可以有效降低在各种情况下滑倒的风险，为车辆检修人员及乘客提供了更多安全保障"
        },
        {
          text: "被广泛用于轨交车辆的车门入口、盟洗室以及车厢顶部"
        },
        {
          text:
            "创新的技术转化为久经考验的耐用性和更长的产品寿命,易于维护和清洁保养"
        },
        {
          text: "达到或超过建议的防滑材料标准"
        },
        {
          text: "提供不同摩擦系数的版本,确保各类接触面的防滑性"
        }
      ],
      groundSeries: [
        {
          title: "3M 700系列防滑贴",
          text:
            "表面含精炼钢砂，强力防滑，可进行表面涂色，耐用持久，适用于平坦，\
      光滑表面，可用于泥泞油污等极限环境下"
        },
        {
          title: "3M 600系列防滑贴",
          text:
            "表面含精炼钢砂，耐用，持久防滑，适用于平坦光滑表面，薄型设计，快速粘贴，方便使用"
        },
        {
          title: "3M 500系列防滑贴",
          text: "抗拉伸、防开裂，增强玻璃抗冲击力，减少碎片飞溅,降低人身伤害"
        },
        {
          title: "3M 300系列防滑贴",
          text: "通过镜面效果实现隐私，保护驾驶室隐私，提升驾驶员操作环境"
        },
        {
          title: "3M 200系列防滑贴",
          text:
            "幼细，舒适的防滑表面适用于人流量较少的区域及需赤足的表面，持久耐磨"
        }
      ],
      overviewApplications: [
        {
          url: this.urls ? this.urls.solutionRaiTransit[12] : ""
        },
        {
          url: this.urls ? this.urls.solutionRaiTransit[13] : ""
        },
        {
          url: this.urls ? this.urls.solutionRaiTransit[14] : ""
        },
        {
          url: this.urls ? this.urls.solutionRaiTransit[15] : ""
        },
        {
          url: this.urls ? this.urls.solutionRaiTransit[16] : ""
        },
        {
          url: this.urls ? this.urls.solutionRaiTransit[17] : ""
        }
      ],
      advantages: [
        {
          title: "绿色环保，无VOC排放",
          text:
            "以全国每年生产6000辆新的轨道车辆计算，这些车辆外表喷涂时大概会向空气中排放150万公斤的挥发性有机物(VOC)。\n\
            这些挥发性有机物，会对环境造成一定的危害，给相关人员的身体健康带来很多负面的影响。而使用贴膜，则可以从根本上杜绝这些影响。"
        },
        {
          title: "施工灵活快速",
          text:
            "传统的喷漆工艺需要在专门的车间内进行。打磨、分色、遮蔽、烘干都需要相对比较长的时间。\
            而贴膜的施工，不需要专门的车间，可以与其他装配工作安排在一起进行施工。\
            总体施工时间可节省10天左右。"
        },
        {
          title: "易于实现特殊设计",
          text:
            "现代的车身外观设计，越来越多的使用到全色彩画面，这样的设计是喷漆难以做到的。而在贴膜表面通过数码打印的方式印刷画面，\
          则是非常成熟的工艺。通过这种工艺制作的画面，色彩丰富持久，施工简单易行，可以最大程度的实现设计师的创意。"
        },
        {
          title: "降低车身自重",
          text:
            "相比于传统的喷漆工艺，使用贴膜可以有效的降低车身自重，对于车辆运营中的节能减排有着积极的作用。\
          减轻的重量在45公斤/辆(城轨车辆)--90公斤/辆(高铁车辆)。 "
        },
        {
          title: "维护翻新方便",
          text:
            "在日常维护中，对破损处贴膜的局部更换非常方便快速，无需进入喷漆车间，可在日常维护工位进行修补。\
          大修期满后进行全车贴膜更换也很方便，贴膜的可去除背胶可使旧贴膜快速揭除而不留残胶。"
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
  margin-bottom: 0.75rem;
}

.subTitle {
  font-size: @fontSizeML;
  font-weight: @titleFontWeight;
  margin-bottom: 2rem;
}

.railTransit {
  width: 100%;
  background-color: white;
  font-size: @fontSizeMd;
  color: @contentFontColor;
}

.dot {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0.3rem 0.4rem 0 0;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.3rem;
    height: 0.3rem;
    background-color: @contentFontColor;
    border-radius: 0.3rem;
  }
}

.backgrounds {
  width: 100%;
  padding-top: 4rem;
  text-align: center;
  position: relative;

  img {
    width: 100%;
  }

  img:first-child {
    width: 90%;
  }
}

.exteriorWrap {
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
}

.exterior {
  width: 60%;
  margin: 0 20% 6rem;
  text-align: left;

  .contents {
    .subTitle {
      color: black;
      margin-bottom: 1rem;
      font-weight: @titleFontWeight;
    }

    .content {
      margin-bottom: 1rem;
    }

    .details {
      line-height: 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .subTitle {
      color: black;
      margin-top: 2rem;
    }
  }
}

.interior {
  margin: 0 20%;
  margin-top: 1rem;
  width: 60%;

  .dot {
    margin-top: 0.4rem;
  }

  .details {
    line-height: 1.2rem;
    margin-bottom: 1.5rem;

    & > div {
      display: flex;
      justify-content: flex-start;
    }
  }

  .content {
    .subTitle {
      color: black;
      margin-bottom: 0.5rem;
    }

    .detailText {
      margin-bottom: 1.5rem;
    }
  }

  .images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 14rem;
    margin-bottom: 1.5rem;

    .left {
      width: 60%;
      height: 100%;

      img {
        height: 100%;
      }
    }

    .right {
      flex: 1;
      padding-left: 0.5rem;
      height: 100%;

      img:nth-child(1) {
        margin-bottom: 0.5rem;
      }

      img {
        height: calc((100% - 0.5rem) / 2);
      }
    }

    img {
      width: 100%;
      float: right;
    }
  }

  .series {
    .subTitle {
      color: black;
      margin-bottom: 1.5rem;
    }
  }
}

.window {
  margin: 0 20%;
  margin-top: 8rem;
  width: 60%;

  .dot {
    margin-top: 0.4rem;
  }

  .content {
    .subTitle {
      color: black;
      margin-bottom: 0.5rem;
    }

    .text {
      margin-bottom: 1.5rem;
    }
  }

  .details {
    line-height: 1.2rem;
  }

  .detail {
    display: flex;
    justify-content: flex-start;
  }

  img {
    width: 100%;
  }

  .top,
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .top {
    margin-bottom: 3rem;

    .left {
      width: 50%;
      margin-right: 5%;
    }

    .right {
      width: 45%;
    }
  }

  .bottom {
    position: relative;

    .left {
      width: 30%;
    }

    .right {
      width: 90%;
      position: absolute;
      top: 0;
      left: 35%;

      .subTitle {
        color: black;
        margin-bottom: 1rem;
      }
    }
  }
}

.ground {
  margin: 0 20%;
  margin-top: 8rem;
  width: 60%;
  position: relative;

  .dot {
    margin-top: 0.4rem;
  }

  .content {
    .subTitle {
      color: black;
      margin-bottom: 0.5rem;
    }

    .text {
      margin-bottom: 1.5rem;
    }
  }

  .details {
    line-height: 1.2rem;
  }

  .detail {
    display: flex;
    justify-content: flex-start;
  }

  img {
    width: 100%;
  }

  .leftTitle {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2rem;

    .titles {
      margin-right: 3rem;
    }

    .image {
      width: 60%;

      img {
        width: 100%;
      }
    }
  }

  .leftContent {
    .subTitle {
      color: black;
      margin-bottom: 1.5rem;
    }
  }

  .top,
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .top {
    margin-bottom: 2rem;

    .left {
      width: 70%;
      margin-right: 5%;
      z-index: 100;
    }

    .right {
      position: absolute;
      top: -5%;
      right: calc(-100% / 3);
      height: 120%;
      width: 100%;
    }
  }

  .bottom {
    position: relative;

    .left {
      width: 55%;
    }

    .right {
      width: 75%;
      position: absolute;
      bottom: 0;
      left: 40%;

      .subTitle {
        color: black;
        margin-bottom: 1rem;
      }
    }
  }
}

.overview {
  margin: 0 20%;
  margin-top: 8rem;
  width: 60%;

  .dot {
    margin-top: 0.4rem;
  }

  & > .image {
    padding: 1rem 0;
  }

  .compare {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .use {
    margin: 2rem 0;
  }

  .images {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .imageWrap {
      position: relative;
      width: 31%;
      margin-bottom: 3%;

      .index {
        position: absolute;
        top: 0;
        left: 0.5rem;
        transform: translate(0, -50%);
        width: 1rem;
        height: 1rem;
        background: @redColor;
        color: white;
        text-align: center;
        line-height: 1rem;
        font-weight: @titleFontWeight;
        border-radius: 0.25rem;
      }
    }
  }

  .content {
    .subTitle {
      color: black;
      margin-bottom: 0.5rem;
    }

    .text {
      margin-bottom: 1.5rem;
    }
  }

  .content,
  .details {
    line-height: 1.2rem;
  }

  .detail {
    display: flex;
    justify-content: flex-start;
  }

  img {
    width: 100%;
  }
}

.advantage {
  margin-top: 8rem;
  width: 100%;
  background-color: @redColor;
  color: white;
  padding: 4rem 0;

  .title {
    color: white;
  }

  .advantageInside {
    width: 55%;
    margin: 0 25% 0 20%;
  }

  .introduction {
    display: inline-block;
    margin-bottom: 3rem;
    border: 1px solid white;
    border-radius: 0.25rem;
    padding: 0.125rem 0.5rem;
  }

  .merits {
    margin-bottom: 2rem;

    .subTitle {
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: flex-start;
    }

    .text {
      line-height: 1.2rem;
    }
  }
}
</style>
