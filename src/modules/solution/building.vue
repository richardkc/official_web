<template>
  <main class="building">
    <section class="banner">
      <img :src="imgUrls[0]" />
    </section>
    <section class="solution">
      <div class="top">
        <div class="left">
          <div class="title">
            <span class="sign">3M</span>
            装饰建筑贴膜解决方案
          </div>
          <div class="subTitle">
            <div>3M DECORATIVE</div>
            <div>BUILDING FILM SOLUTION</div>
          </div>
          <div class="content">
            3MTM
            DI-NOCTM建筑饰面可应用于各种表面材料，让创意无限。加上225种新的图案结合最新潮流，
            我们提供1000多种不同的设计，此外，我们还添加了新的“哑光系列”
            瓷砖的最新技术，包括我们的“纯色”，它有着深沉、丰富的色彩“干木”，它有着天然木材和“工业纹理”，
            其中包括工业和有机质感。结合我们对其他独特新产品的多样化选择，例如：作为“氧化金属”，它模拟阳极氧化涂层，
            和“纺织品”，它具有精致的编织纹理，“哑光系列”最大限度地提高了室内设计的可能性。
          </div>
        </div>
        <div class="right">
          <img :src="imgUrls[1]" />
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <img :src="imgUrls[2]" />
        </div>
        <div class="right">
          <div class="subTitle">贴膜的应用优势</div>
          <div class="content">
            <div
              class="text"
              v-for="(item, index) in advantagesText"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="imageWrap">
        <img :src="imgUrls[3]" />
      </div>
    </section>
    <section class="application">
      <div class="top">
        <img :src="imgUrls[4]" />
      </div>
      <div class="bottom">
        <div class="left">
          <div class="title">建筑装饰贴膜的行业应用</div>
          <div class="subTitle">
            <div>INDUSTRY APPLICATION OF</div>
            <div>BUILDING DECORATION FILM</div>
          </div>
          <div class="content">
            <div>
              建筑贴膜是一种背部有胶粘剂的印刷和压花乙烯或聚烯烃材料；可用于墙壁，但不是“墙纸”，不是织物、纺织品；
            </div>
            <div>
              在海外，广泛用于装饰和设计，高效便捷的施工模式，在降低维护成本，保证经久耐用的基础上仍能给人眼前一亮的设计感。
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="imgUrls[5]" />
        </div>
      </div>
    </section>
    <section class="advantage">
      <div class="itemWrap" v-for="(item, index) in advantages" :key="index">
        <img :src="item.url" />
        <div class="subTitle">{{ item.title }}</div>
        <div class="text">{{ item.text }}</div>
      </div>
    </section>
    <section class="classification">
      <div class="titles">
        <div class="left">
          <div class="title">材料分类</div>
          <div class="subTitle">MATERIAL CLASSIFICATION</div>
        </div>
        <div class="right">
          <div class="more">查看更多材料样式</div>
        </div>
      </div>
      <div class="first">
        <div class="left">
          <div class="itemWrap">
            <div class="text">Smooth Stone</div>
            <img :src="imgUrls[10]" />
          </div>
          <div class="itemWrap">
            <div class="text">Textile</div>
            <img :src="imgUrls[11]" />
          </div>
        </div>
        <div class="right">
          <div class="itemWrap">
            <div class="text">Fine Wood</div>
            <img :src="imgUrls[12]" />
          </div>
        </div>
      </div>
      <div class="second">
        <div class="left">
          <div>
            <div class="subTitle">3M™ Dynoc™ 设计玻璃膜</div>
            <div class="content">
              通过将具有高度设计感的3MTM DynocTM薄膜手柄连接到玻璃上，
              可通过玻璃表现各种设计的玻璃装饰PVC片材。
            </div>
          </div>
          <div class="imgWrap">
            <img :src="imgUrls[13]" />
            <div class="remarks">玻璃粘贴工作可在专门的建筑商店中进行</div>
          </div>
        </div>
        <div class="right">
          <img :src="imgUrls[14]" />
          <div class="remarks">DG-1528</div>
        </div>
      </div>
      <div class="third">
        <div class="left">
          <div>
            <div class="subTitle">3M™ Fasara™ 玻璃膜</div>
            <div class="content">
              增添了设计和眼罩的薄膜。
              您可以从100多种类型的图案中进行选择，并根据自己的想法进行设计，以充分利用玻璃材料。
            </div>
          </div>
          <img :src="imgUrls[15]" />
        </div>
        <div class="right">
          <div>
            <div class="subTitle">3M™ Scotch Tint™</div>
            <div class="content">
              一种增加玻璃舒适性和安全性的薄膜。
              通过切断日光中包含的红色和红外线，可以适当地调整室内环境，
              并且可以使用防止玻璃破裂和侵入的措施以及玻璃，并且还可以提高玻璃的安全性，
              例如在发生以下情况时防止散射、破损。
            </div>
          </div>
          <img :src="imgUrls[16]" />
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
      imgUrls: this.urls ? this.urls.solutionBuilding : [],
      advantagesText: [
        "1、满足公共区域安全防火等，需求所有产品均通过防火安全认证，相较于传统木材等材质，能够充分匹配安全防火需求。",
        "2、可维护性，品质稳定，经久耐用，平均使用寿命超过10年，且日\
        常维护成本低，若需更新设计，操作简单，不影响日常运营。",
        "3、设计性与功能性相互兼顾，丰富多彩、轻薄柔软、易于3D和异型\
        处理，突破了传统装饰材料的局限，拓展了建筑，室内外设计的创\
        作空间，同等预算内，兼容设计与功能。",
        "4、符合节能减排，环保实用的发展趋势"
      ],
      advantages: [
        {
          url: this.urls ? this.urls.solutionBuilding[6] : "",
          title: "可维护性",
          text:
            "品质稳定，经久耐用，平均使用寿命超过10年，且日常维护成本低，若需更新设计，操作简单，不影响日常运营。"
        },
        {
          url: this.urls ? this.urls.solutionBuilding[7] : "",
          title: "满足公共区域安全防火等需求",
          text:
            "所有产品均通过防火安全认证相较于传统木材等材质，能够充分匹配安全防火需求。"
        },
        {
          url: this.urls ? this.urls.solutionBuilding[8] : "",
          title: "符合节能减排，环保实用的发展趋势",
          text: ""
        },
        {
          url: this.urls ? this.urls.solutionBuilding[9] : "",
          title: "设计性与功能性相互兼顾",
          text:
            "丰富多彩、轻薄柔软、易于3D和异型处理，突破了传统装饰材料的局限，\
          拓展了建筑室内外设计的创作空间，同等预算内，兼容设计与功能。"
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

.building {
  width: 100%;
  background-color: white;
  font-size: @fontSizeMd;
  color: @contentFontColor;
}

.content {
  line-height: 1rem;
}

.banner {
  width: 94%;
  margin: 4rem 3% 0;

  img {
    width: 100%;
  }
}

.solution {
  width: 60%;
  margin: 6rem 20% 0;
  text-align: left;

  .top,
  .bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .imageWrap,
  img {
    width: 100%;
  }

  .top {
    margin-bottom: 2rem;

    .left {
      width: 45%;
    }

    .right {
      width: 35%;
      padding-top: 10%;
    }
  }

  .bottom {
    .left {
      width: 40%;

      img {
        width: 100%;
      }
    }

    .right {
      width: 55%;
      padding-top: 15%;

      .subTitle {
        color: black;
        margin-bottom: 1rem;
      }
    }

    .content {
      margin-bottom: 3rem;
    }
  }

  .imageWrap {
    width: 55%;
    margin-left: 45%;
    margin-top: 0.5rem;
  }
}

.application {
  width: 100%;
  margin-top: 6rem;
  background-color: @redColor;
  color: white;

  .top {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 4rem 0;

    .left {
      width: 35%;
      margin-right: 5%;

      .title {
        color: white;
      }
    }

    .right {
      width: 22%;

      img {
        width: 100%;
      }
    }
  }
}

.advantage {
  width: 60%;
  margin: 4rem 20% 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .itemWrap {
    width: 45%;

    img {
      width: 100%;
    }
  }

  .subTitle {
    margin: 1rem 0 0.5rem;
  }

  .text {
    width: 80%;
    margin-bottom: 2rem;
  }
}

.classification {
  width: 60%;
  margin: 4rem 20% 0;

  .titles {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .subTitle {
      margin-bottom: 0.5rem;
    }

    .right {
      .more {
        display: inline-block;
        padding: 0.125rem 0.5rem;
        color: @redColor;
        border: 1px solid @redColor;
        border-radius: 1rem;
        justify-content: center;
        cursor: pointer;
      }
    }
  }

  .remarks {
    margin-top: 0.5rem;
  }

  .first,
  .second,
  .third {
    margin: 4rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 100%;
    }

    .left,
    .right {
      width: 46%;
    }

    .subTitle {
      color: black;
      margin-bottom: 0.5rem;
    }
  }

  .first {
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .itemWrap {
      .text {
        color: black;
        font-weight: @titleFontWeight;
        margin-bottom: 0.5rem;
      }
    }
  }

  .second {
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .third {
    .left,
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    img {
      margin-top: 2rem;
    }
  }
}
</style>
