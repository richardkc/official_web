<template>
  <div class="profile">
    <section class="carousel">
      <el-carousel
        height="42rem"
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
          <img :src="item.url" style="width: 100%; height: 100%;" />
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
        <div>飞机制图解决方案 创意梦想与梦境</div>
        <div>
          <div>Creative Dream and</div>
          <div>dream of aircraft drawing solution</div>
        </div>
        <div>
          彩绘飞机,也就是在飞机机身上制作画面,近年来在国内外已形成航空公司的一种时尚行为,许多大型盛事如世界杯、奥运会、
          亚运会等项目都会采用彩绘飞机进行媒体策划与推广，国内外大型企业冠名飞机是“移动的户外媒体”，拥有巨幅的视觉张力，超长投放周期，
          全国重点城市间频繁渗透，助力您的品牌影响力几何级成长。当机场的停机坪上出现一架与众不同、身穿“华服”的飞机时,
          人们会赋予它们更多的关注，从而达到了预期期望的效果。
        </div>
        <div class="example">
          <div></div>
        </div>
        <div class="more">
          更多成功案例
          <span>+</span>
        </div>
      </div>
      <div class="right">
        <div class="first">
          航空标识
          <img />
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
          <div class="icons"></div>
        </div>
      </div>
    </section>
    <section class="design">
      <div class="title">飞机工程定位图和画面设计</div>
      <div>Aircraft engineering</div>
      <div>positioning map and screen design</div>
      <img />
    </section>
    <section class="progress">
      <div>飞机贴膜作业流程</div>
      <div>Aircraft filming process</div>
      <div class="examples">
        <div class="example">
          <div class="count">1</div>
          <img />
          <div>在相对无尘的环境，把画面摊开</div>
        </div>
        <div class="example">
          <div class="count">2</div>
          <img />
          <div>画面张贴</div>
        </div>
        <div class="example">
          <div class="count">3</div>
          <img />
          <div>完工</div>
        </div>
      </div>
    </section>
    <section class="advantage">
      <div>飞机数码贴膜的优势</div>
      <div>Advantages of aircraft digital film</div>
      <div>
        A7706飞机贴膜是工艺的突破，大大提升飞机周转效率，并提升制作品质，可以帮助品牌客户在精准客户群体的品牌塑造
      </div>
      <div class="icons">
        <div class="icon">
          <img />
          <div>材料应用</div>
          <div>波音、空客原厂认证， 安全环保</div>
        </div>
        <div class="icon">
          <img />
          <div>喷绘方式</div>
          <div>照片效果逼真生动</div>
        </div>
        <div class="icon">
          <img />
          <div>安装快捷</div>
          <div>
            安装一个完整机身画面仅需2-3天 不影响飞机周旋律
            大幅度提升飞机在航时间
          </div>
        </div>
        <div class="icon">
          <img />
          <div>场地要求</div>
          <div>无需专用场地 相对无尘即可完成</div>
        </div>
      </div>
    </section>
    <section class="proccess">
      <div>传统喷漆的制作流程</div>
      <div>The production process</div>
      <div>of traditional spray paint</div>
      <div class="examples">
        <div class="example">
          <div class="index"></div>
          <img />
          <div class="detail"></div>
        </div>
        <div class="example">
          <div class="index"></div>
          <img />
          <div class="detail"></div>
        </div>
      </div>
      <div class="bordered-bottom"></div>
      <div class="content">
        <div class="left">
          <div>传统喷漆工艺</div>
          <div>
            传统的制作方法，只能采用较简单的 大面积单色块画面，画面单调，在整
            体画面的表现力明显不足；
          </div>
        </div>
        <div class="right">
          <div class="step"></div>
          <div class="step"></div>
        </div>
      </div>
      <div class="bordered-bottom"></div>
    </section>
    <section class="support">
      <div>
        <div class="left">
          <div>技术支持</div>
          <div>The production process</div>
          <div>of traditional spray paint</div>
        </div>
        <div class="right">
          <div>
            深圳市大昆仑数码科技有限公司是3M中国首家授权航空项目的施工单位,
          </div>
          <div>相关的贴膜工程师均得到3M公司专业的培训及认证。</div>
        </div>
      </div>
      <div class="content">
        <img />
        <div class="details">
          <div>
            由于飞机是个特殊的载体，面积大，而且要经历温度、压力、湿度、风力等考验，
            制作要求不仅要贴得牢、不褪色，而且还要保证揭下来不留胶，使用的材料必须通过飞机制造厂认证(波音和空客等)
          </div>
        </div>
        <img />
      </div>
      <div class="examples">
        <div class="left"></div>
        <div class="right">
          <img />
          <img />
        </div>
      </div>
    </section>
    <section class="lagelSupport">
      <div>政策法规的支持</div>
      <div>Support of policies and regulations</div>
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
    </section>
    <section class=""></section>
  </div>
</template>

<script>
export default {
  name: "Other",
  data() {
    return {
      currentCarouselIndex: 0,
      carouselMap: [
        {
          name: "profile_1",
          url: require("../../assets/images/about_1.jpg")
        },
        {
          name: "profile_2",
          url: require("../../assets/images/about_2.jpg")
        },
        {
          name: "profile_3",
          url: require("../../assets/images/about_1.jpg")
        },
        {
          name: "profile_4",
          url: require("../../assets/images/about_2.jpg")
        }
      ],
      carouselTabs: ["航空飞机机身", "航空飞机机舱", "航空机场", "航空公司车辆"]
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
.profile {
  height: 411rem;
  width: 100%;
  background-color: white;
  font-size: 0.5rem;
}

.carousel {
  width: 90%;
  margin: 7rem 5% 0;
  position: relative;

  /deep/ .el-carousel__indicators {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    height: 80%;
    width: calc(1rem + 6px);
    z-index: 1000;

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
  height: 80%;
  width: 1rem;
  background-color: rgb(153, 153, 153);
  z-index: 999;

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
  margin-top: 7rem;
  width: 60%;
  height: 44rem;
  position: relative;

  .left {
    width: 80%;
    margin-right: 20%;
  }

  .right {
  }
}
</style>
