<template>
  <main class="steamShip">
    <section class="banner">
      <img :src="imgUrls[0]" />
    </section>
    <section class="introduction">
      <div class="title">
        <span class="sign">3M</span>
        贴膜产品简介
      </div>
      <div class="subTitle">
        <div>3M DECORATIVE</div>
        <div>BUILDING FILM SOLUTION</div>
      </div>
      <div class="content">
        现阶段中国船舶工业发展速度快、范围广，
        船舶装备的市场需求、制造装配、投入运营及维修维保总量逐年上升。
      </div>
      <div class="content">
        在船舶工业传统的制造、维修过程中，船身内外喷漆工艺产生的VOC（挥发性有机物）带来的环境问题逐渐引起社会关注，
        解决环保问题是轨道交通可持续发展进程中至关重要的一环。贴膜替代油漆涂装翻新游船、游艇、赛艇表面是一种相对比较
        新的工艺，具有大幅降低 VOC
        与重金属等有害物质排放，同时简化相关工序和步骤，提高生产效能的优点。
      </div>
      <div class="content">
        因此，船舶工业贴膜技术的应用与推广有助于加速行业制造、维保水平升级，促进船舶工业向绿色、环保、高效的方向发展。
      </div>
      <div class="content">
        大昆仑公司与3M合作的贴膜产品在中国船舶制造行业的应用，主要应用集中在游船、游艇、赛艇的船内车外局部、全包装饰、车内车外标记等。
        在全球船舶工业制造、翻新市场有很多成功案例，在国内的应用也很广泛;目前应用于船舶工业表面装饰的3M贴膜主要为PVC贴膜，
        厚度在0.08mm左右,同时可以配套使用相对应的保护膜，可以提供更高的光泽度及易清洁性能等。
      </div>
      <div class="content">
        在全球船舶工业制造、翻新市场有很多成功案例，在国内的应用也很广泛;
        目前应用于船舶工业表面装饰的3M贴膜主要为PVC贴膜，厚度在0.08mm左右,
        同时可以配套使用相对应的保护膜，可以提供更高的光泽度及易清洁性能等。
      </div>
      <div class="imageWrap">
        <img :src="imgUrls[1]" />
      </div>
      <div class="content">
        贴膜的主要结构由上到下依次为透明保护膜层、PVC贴膜
        层、背胶层、衬纸层。3M贴膜的质保期期最长可以达到10年，使用期更长，完全可以满足各类船只内部和外部的装饰需求。
        3M贴膜还应用一些专利技术在背胶上作一些特殊处理，比
        如涂布上一层玻璃微珠以方便贴膜施工时的预定位，并使用
        带导气槽的背胶以加快施工速度，提高施工质量。使用铸造
        法制造的皮膜，通常具有高达 140% 的延展率和小于0.4mm
        的收缩率，为施工于车身复杂表面提供了可能性。
      </div>
      <div class="imageWrap">
        <img :src="imgUrls[2]" />
      </div>
      <div class="compare">
        <div class="subTitle">传统喷漆工艺与贴膜工艺的对比</div>
        <img :src="imgUrls[3]" />
      </div>
    </section>
    <section class="advantage">
      <div class="advantageInside">
        <div class="title">使用贴膜替代传统喷漆的优势</div>
        <div class="subTitle">
          相比于传统的喷漆工艺，船身使用贴膜全包具有以下优势
        </div>
        <div class="textWrap" v-for="(item, index) in advantages" :key="index">
          <div class="subTitle">{{ index + 1 }}、{{ item.title }}</div>
          <div class="content">{{ item.text }}</div>
        </div>
      </div>
    </section>
    <section class="characteristic">
      <div class="first">
        <div class="left">
          <img :src="imgUrls[4]" />
        </div>
        <div class="right">
          <div class="content">
            <div class="subTitle">
              <div>让您的船只与众与同;</div>
              <div>游艇和摩托艇上有独特的宣传位置，必定会吸引众人的目光。</div>
            </div>
            <div>
              激动人心的画面不只是陆地的特权。当您把船只当作舞台，画面能赋予其个性，让它成为你的金字招牌，
              打造独一无二的船只。或者将画面展现给全新的潜在客户 ——
              船体图案能为各类事件、赞助商以及品牌提供引人注目的解决方案。
              从简单的字母贴膜到整体图案，3M提供的贴膜样式系列日益丰富，专门设计各种贴膜，能够适用于任何情
              景，在含盐水域中抗腐蚀，在高速运动下抗剥离。我们提供广泛的产品组合，包含通用性最强的各种贴膜，不仅适用于陆地，同时也可驰骋于海洋。
            </div>
          </div>
        </div>
      </div>
      <div class="second">
        <div class="left">
          <div class="details">
            <div class="subTitle">
              品质保证，始终不变
            </div>
            <div class="content">
              您致力于让企业以及您的品牌持续发展。因此，您购买的画面贴膜产品应该让您相信，它们从第一天使用到寿命终结，应始终保持良好的色彩品质。
              <br />
              3M产品因持久而生。自1902年起，我们不断提出开创性的解决方案，让产品即有高性能，又有稳定的质量。我们应用全球先
              进的试验设备对我们的贴膜进行严格的检测，测试其防潮、防紫外线等性能，模拟在长达数年的严苛环境下的使用情况。确保3M的产品始终满足客户的期望。
              <br />
              作为一家世界500强企业，3M不断用新技术和新产品对画面产业进行变革，全心全意彰显客户品牌。
              我们对我们的技术充满信心，3MTMMCSTM画面质保为全质保期保证，如果您的画面在质保期的最后一天出现问题，我们将
              如开始质保第一天一样实施质保。
            </div>
          </div>
          <div class="details">
            <div class="subTitle">品牌水中行</div>
            <div class="content">
              从赛艇到游船、私人游艇，再到其它船只，使用3M画面贴膜包覆船体，能够传递信息、展示标志、或者一簇活力的装
              饰点缀。
              我们的贴膜拥有您想要的快速、简便安装的特点，以及持久美观的质量和特性。不论您是寻找定制的条纹图案或是整体
              的创意设计，我们贴膜的品质在业内遥遥领先。
            </div>
          </div>
        </div>
        <div class="right">
          <div class="subTitle">您的船，我们“包”了</div>
          <div class="content">
            从打印贴膜到彩色贴膜、反光膜、保护膜，不论您需要包覆
            的船体面积有多大，都可以轻松实现。
          </div>
          <img :src="imgUrls[5]" />
        </div>
      </div>
      <div class="third">
        <div class="subTitle">暴露角度</div>
        <div class="content">
          画面应用面积的大小，以及画面是否应用于垂直表面
          (例如，船体)或非垂直型表面(例如船首 的水平部分或船尾)，
          上述暴露因素会对保修期限造成影响。
        </div>
        <div class="images">
          <div
            class="imageWrap"
            v-for="(item, index) in characteristicsThird"
            :key="index"
          >
            <img :src="item.url" />
            <div class="remark">
              <div class="subTitle">{{ item.title }}</div>
              <div class="content">{{ item.text }}</div>
            </div>
          </div>
        </div>
        <img :src="imgUrls[8]" />
      </div>
      <div class="fourth">
        <div class="subTitle">任浪花飞溅，我自驰骋向前</div>
        <div class="content">
          画面应用面积的大小，以及画面是否应用于垂直表面
          (例如，船体)或非垂直型表面(例如船首 的水平部分或船尾)，
          上述暴露因素会对保修期限造成影响。
        </div>
        <div class="images">
          <div
            class="imageWrap"
            v-for="(item, index) in characteristicsFourth"
            :key="index"
          >
            <img :src="item.url" />
            <div class="subTitle">{{ item.title }}</div>
            <div class="content">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="series">
      <div class="titles">
        <div class="title">
          <span class="sign">3M</span>
          安全防滑贴产品系列
        </div>
        <div class="subTitle">
          3M贴膜提供更多设计选择 <br />具有稳定性高、安装迅速、拆卸便捷等特点
        </div>
      </div>
      <div class="types">
        <div class="left">
          <div class="subTitle">专供产品类型:</div>
          <div class="content">
            <div v-for="(item, index) in seriesTypes" :key="index">
              <span>{{ index + 1 }}</span>
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="imgUrls[13]" />
        </div>
      </div>
      <div class="application">
        <div class="subTitle">安全防滑贴在船舶行业中的应用</div>
        <div class="content">
          画面应用面积的大小，以及画面是否应用于垂直表面
          (例如，船体)或非垂直型表面(例如船首 的水平部分或船尾)，
          上述暴露因素会对保修期限造成影响。
        </div>
        <div class="imageWrap">
          <img :src="imgUrls[14]" />
        </div>
        <div class="spots">
          <div class="left">
            <img :src="imgUrls[15]" />
          </div>
          <div class="right">
            <div
              class="spot content"
              v-for="(item, index) in spots"
              :key="index"
            >
              <span>{{ index + 1 }}</span
              >、
              <span>{{ item.text }}</span>
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
  data() {
    return {
      imgUrls: this.urls ? this.urls.solutionSteamShip : [],
      advantages: [
        {
          title: "绿色环保，无VOC排放：",
          text:
            "船身外表面喷涂油漆时，会向空气中排放大 量的挥发性有机物( VOC )，\
          这些挥发性有机物（VOC），会对环境造成一定的危害，给相关人员的身体健康带来很多负面的影响，\
          而使用贴膜，则可以从根本上杜绝这些影响。"
        },
        {
          title: "施工灵活快速：",
          text:
            "传统的喷漆工艺需要在专门的车间内进行。打磨、分色、遮蔽、烘干都需要相对比较长的时间。\
          而贴膜的施工，不需要专门的车间，可以与其他装配工作安排在一起进行施工。\
          总体施工时间可节省10天左右。"
        },
        {
          title: "易于实现特殊设计：",
          text:
            "现代的船身外观设计，越来越多的使用到全色彩画面，这样的设计是喷漆难以做到的。\
          而在贴膜表面通过数码打印的方式印刷画面，则是非常成熟的工艺。通过这种工艺制作的画面，色彩丰富持久，\
          施工简单易行，可以最大程度的实现设计师的创意。"
        },
        {
          title: "降低船体自重：",
          text:
            "相比于传统的喷漆工艺，使用贴膜可以有效的降低船体自重，对于船只运营中的节能减排有着积极的作用。"
        },
        {
          title: "维护翻新方便：",
          text:
            "在日常维护中，对破损处贴膜的局部更换非常方便快速，无需进入喷漆车间，可在日常维护工位进行修补。\
          大修期满后进行船身贴膜更换也很方便，贴膜的可去除背胶可使旧贴膜快速揭除而不留残胶。"
        }
      ],
      characteristicsThird: [
        {
          url: this.urls ? this.urls.solutionSteamShip[6] : "",
          title: "垂直暴露面",
          text: "任何应用于90-75度倾角表面的画面"
        },
        {
          url: this.urls ? this.urls.solutionSteamShip[7] : "",
          title: "非垂直暴露面",
          text: "任何应用于75-0度倾角表面的画面"
        }
      ],
      characteristicsFourth: [
        {
          url: this.urls ? this.urls.solutionSteamShip[9] : "",
          title: "持久如新",
          text:
            "紫外线、高温、潮湿甚至酸露，用大自然中一切严苛的条件来考验 3M 产品，它都能通过测试。\
              并且画面不会被灼伤、不变色。无论应用于多么恶劣的环境，3M贴膜的表现都会达到或更可能超出您的预期。"
        },
        {
          url: this.urls ? this.urls.solutionSteamShip[10] : "",
          title: "超强的适应力",
          text:
            "3M贴膜在设计时就考虑到如何应对最为复杂的弯曲、轮廓、船脊或凹槽，它几乎能够环绕和粘附在任何位置。\
              同时 3M 贴膜还具 有易于操作和安装的特性，其抗揭性、抗裂性和抗剥落性极强，节省了无必要的修复和返工，缩短了靠岸时间。"
        },
        {
          url: this.urls ? this.urls.solutionSteamShip[11] : "",
          title: "更易于移除",
          text:
            "3M膜还具有易于移除和更换的特性，能确 保揭除后，没有或仅有少量的黏合剂残留，只需简单清理即可，\
              还您的船体一个完好无损的原始漆面。当您想去掉船身上的宣传标识时，不必在修复工作上浪费额外的时间或 金钱。"
        },
        {
          url: this.urls ? this.urls.solutionSteamShip[12] : "",
          title: "精妙的可打印性",
          text:
            "从细节到整体效果，3M贴膜为卓越的打印质量专门设计，我们可以根据您的想法为您私人订制。\
              3M贴膜能够展现非凡活力，吸人眼球，实现您的想法和设计，并与现实生 活顺滑地无缝对接。"
        }
      ],
      seriesTypes: [
        {
          text: "细号砂面舒适型-200系列"
        },
        {
          text: "中号砂面舒适型-300系列"
        },
        {
          text: "通用型-600系列"
        },
        {
          text: "工程型凹凸不平表面-500系列"
        },
        {
          text: "超强耐磨-700系列"
        }
      ],
      spots: [
        {
          text:
            "满足公共区域安全防火等，需求所有产品均通过防火安全认证，\
          相较于传统木材等材质，能够充分匹配安全防火需求;"
        },
        {
          text:
            "可维护性，品质稳定，经久耐用，平均使用寿命超过10年，且日\
          常维护成本低，若需更新设计，操作简单，不影响日常运营;"
        },
        {
          text:
            "设计性与功能性相互兼顾，丰富多彩、轻薄柔软、易于3D和异\
          型处理，突破了传统装饰材料的局限，拓展了建筑，室内外设计\
          的创作空间，同等预算内，兼容设计与功能;"
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

.steamShip {
  width: 100%;
  background-color: white;
  font-size: @fontSizeMd;
  color: @contentFontColor;
}

.introduction {
  width: 60%;
  margin: 6rem 20% 0;

  .content {
    margin-bottom: 1.5rem;
  }

  .imageWrap {
    width: 100%;
    margin-bottom: 2rem;

    img {
      width: 100%;
    }
  }

  .compare {
    width: 100%;

    img {
      width: 100%;
    }
  }
}

.advantage {
  width: 100%;
  background-color: @redColor;
  color: white;

  & div {
    font-weight: normal !important;
  }

  .title {
    color: white;
  }

  .advantageInside {
    width: 60%;
    margin: 6rem 20% 0;
    padding: 6rem 10% 4rem 0;

    & > .subTitle {
      display: inline-block;
      border-radius: 0.1rem;
      border: 1px solid white;
      padding: 0.125rem 0.5rem;
      margin-bottom: 4rem;
    }
  }

  .title {
    margin-bottom: 2rem;
  }

  .textWrap {
    margin-bottom: 2rem;

    .subTitle {
      margin-bottom: 0.5rem;
    }
  }
}

.characteristic {
  width: 60%;
  margin: 4rem 20% 0;

  .first,
  .second,
  .third,
  .fourth {
    margin-bottom: 4rem;
    width: 100%;

    .subTitle {
      color: black;
    }
  }

  .first,
  .second {
    display: flex;
    justify-content: space-between;

    .left,
    .right {
      img {
        width: 100%;
      }
    }
  }

  .first {
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .subTitle {
      font-size: @fontSizeMd;
      margin: 0;
    }

    .left,
    .right {
      width: 47%;
    }
  }

  .second {
    .subTitle {
      margin-bottom: 1rem;
    }

    .left {
      width: 47%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .right {
      width: 42%;

      img {
        margin-top: 2rem;
      }
    }
  }

  .third {
    .subTitle {
      margin-bottom: 1rem;
    }

    & > .content {
      margin-bottom: 2rem;
    }

    & > img {
      width: 100%;
      margin-top: 3rem;
    }

    .images {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .imageWrap {
      width: 48%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .remark {
        margin-top: 2rem;

        .subTitle {
          margin-bottom: 0.5rem;
          color: @contentFontColor;
          font-size: @fontSizeMd;
        }
      }

      img {
        width: 100%;
      }
    }
  }

  .fourth {
    .subTitle {
      margin-bottom: 1.5rem;
    }

    .content {
      margin-bottom: 3rem;
    }

    .images {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .imageWrap {
        width: 38%;
        margin-right: 12%;

        img {
          width: 80%;
        }

        .subTitle {
          margin: 0.5rem 0 1rem;
        }
      }
    }
  }
}

.series {
  width: 77%;
  margin: 0 3% 6rem 20%;

  .titles {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;

    & > .subTitle {
      font-weight: normal !important;
      margin-top: 0.5rem;
    }
  }

  .types {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;

    .subTitle {
      margin-bottom: 1rem;
      color: black;
    }

    .left {
      width: 30%;
    }

    .right {
      width: 70%;

      img {
        width: 100%;
      }
    }
  }

  .application {
    img {
      width: 100%;
    }

    .subTitle {
      color: black;
      margin-bottom: 1rem;
    }

    & > .content {
      margin-bottom: 1rem;
      font-size: @fontSizeML;
      font-weight: @titleFontWeight;
    }

    .imageWrap {
      width: 100%;
    }
  }

  .spots {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    .left,
    .right {
      width: 47%;
    }

    .right {
      .spot {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
