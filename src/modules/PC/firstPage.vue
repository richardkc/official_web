<template>
  <main class="firstPage" scroll>
    <section class="section_1">
      <img class="coverImg" v-lazy="imgUrls[0]" />
    </section>
    <section class="section_2">
      <!-- 关于我们 -->
      <div class="companyInfo_name">
        <img v-lazy="imgUrls[1]" />
        <span class="title-span">关于我们</span>
      </div>
      <div class="companyInfo_background">
        <img v-lazy="imgUrls[2]" />
      </div>
      <div class="companyInfo">
        <img class="about_1" v-lazy="imgUrls[3]" />
        <img class="about_2" v-lazy="imgUrls[4]" />
        <div class="infoDetail">
          <div class="title">“科技、灵感，一切皆可创新”</div>
          <div class="content">
            2005年，深圳市大昆仑数码科技有限公司成立，公司秉承特区精神，自觉担当时代赋予的使命，
            立足行业，不断创新，以推动中国绿色环保事业前行为己任。公司自创建以来，一路积累了大量丰富的行业管理经验和服务经营理念。
            通过提供全线设计、策划、制作和标示材料，与国内众多品牌企业建立了长效稳固的合作关系，在包括但不限于飞机、轨道交通、
            公交车身广告、大型商超装饰的应用上一直提供一流国际化水准的科技应用和服务系统。
          </div>
          <button class="more" @click="() => routerChange('introduction')">
            查看更多
          </button>
        </div>
      </div>
      <!-- 行业解决方案 -->
      <div class="solution_name">
        <span class="title-span">行业解决方案</span>
        <img v-lazy="imgUrls[5]" />
      </div>
      <div class="solution_background">
        <img v-lazy="imgUrls[6]" />
      </div>
      <div class="solution">
        <div v-for="(item, index) in transport" :key="index">
          <router-link
            :to="item.router"
            class="imgWrap"
            :class="[
              `imgWrap_${item.key}`,
              activeForSolution == index ? 'active' : ''
            ]"
            @click="isActive('activeForSolution', index)"
          >
            <img v-lazy="originPath + `/uploads/normal-${index + 1}.png`" />
          </router-link>
          <div class="transDetail">
            <div class="transName">{{ item.name }}</div>
            <div>{{ item.English }}</div>
          </div>
        </div>
      </div>
      <!-- 研发中心 -->
      <div class="center_name">
        <img v-lazy="imgUrls[14]" />
      </div>
    </section>
    <section class="section_3">
      <div class="RDCenter" :style="{ height: RDcenterHeight + 'px' }">
        <div class="title" id="pageSize">
          <div class="name">研发中心</div>
          <button class="btn-primary">
            <router-link to="/RDCenter">更多案例</router-link>
          </button>
        </div>
        <div class="detail">
          <img v-lazy="imgUrls[15]" />
          <div class="content">
            <div>
              大昆仑通过与沃尔玛中国、顺丰集团、深圳地铁、东航、南航、海航、3M等各大公司的业务合作及促进，
              近年来，公司不断加大投入，通过自主开发、设备改造、技术升级等方式，升级研发设备。
            </div>
            <div>
              同时，为确保研发的投入规模、规范中心建设，特别制定了《研发中心管理制度》，从制度层面提升研发中心的管理水平和发展后劲。
            </div>
            <div>
              大昆仑以客户需求、行业发展趋势为方向，逐步从传统制作行业过渡到研发、创新的科研型智能企业。
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section_4">
      <!-- 成功案例 -->
      <div class="successWork_name">
        <img v-lazy="imgUrls[16]" />
        <span class="title-span">成功案例</span>
      </div>
      <div class="successWork">
        <div class="works">
          <div>
            <div class="line">
              <ul>
                <li
                  :class="activeForSuccessWork == index ? 'active' : ''"
                  @click="isActive('activeForSuccessWork', index)"
                  v-for="(item, index) in footerContents.works"
                  :key="index"
                >
                  {{ item.text }}
                </li>
              </ul>
            </div>
          </div>
          <button class="btn-primary">
            <router-link to="/successfulCase">更多案例</router-link>
          </button>
        </div>
        <div class="carousel">
          <div class="contents">
            <el-carousel
              :interval="5000"
              arrow="always"
              ref="carousel"
              height="16rem"
              @change="carouselChange"
            >
              <el-carousel-item
                v-for="(item, index) in footerContents.all"
                :key="index"
              >
                <img v-lazy="item.url" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="carouselFooter">
            <div @click="footerIndexChange('prev')">
              <Switch-button type="pre" />
            </div>
            <div class="footerContent">
              <span
                v-for="(item, index) in footerContents.splited"
                :key="index"
                :class="{ selected: footerContents.selected === item.index }"
                >{{ item.text }}</span
              >
            </div>
            <div @click="footerIndexChange('next')">
              <Switch-button type="next" />
            </div>
          </div>
        </div>
      </div>
      <!-- 媒体品牌设计 -->
      <div class="mediaAndDesign_name">
        <img v-lazy="imgUrls[18]" />
        <span class="title-span">媒体、品牌设计</span>
      </div>
      <div class="mediaAndDesign">
        <div class="designs">
          <img v-lazy="imgUrls[19]" />
          <div class="designName">
            <div>品牌视觉包装解决方案</div>
            <div>商业广告宣传设计</div>
            <div>航空媒体资源广告投放洽谈</div>
          </div>
        </div>
        <div class="designDetail">
          <div>
            作为一种新的图形技术，广告客户现在可以使用令人过目不忘的图形图像，在平均2.5小时的飞行时
            间内，在机舱内外将品牌的关键信息，直接展示在大量具有较高消费能力的优质客户面前。没有其他
            场地提供这种类型的环境。
          </div>
          <div>
            研究表明，超过80%的乘客能够轻松地回忆起飞机旅途中富有创造性的品牌或产品广告;
          </div>
          <div>目标客户群体精准，可以帮助品牌客户在精准客户群体的品牌塑造;</div>
        </div>
      </div>
      <!-- 新闻中心 -->
      <div class="news_name">
        <span class="title-span">新闻公布中心</span>
        <img v-lazy="imgUrls[20]" />
      </div>
      <div class="news_background">
        <img v-lazy="imgUrls[21]" />
      </div>
      <div class="news">
        <div class="left">
          <div class="small">
            <img v-lazy="imgUrls[22]" />
            <img v-lazy="imgUrls[23]" />
            <img v-lazy="imgUrls[24]" />
          </div>
          <div class="big">
            <img v-lazy="imgUrls[25]" />
            <img v-lazy="imgUrls[26]" />
          </div>
        </div>
        <div class="right">
          <img v-lazy="imgUrls[27]" />
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="partner_name" ref="partner">
        <img v-lazy="imgUrls[28]" />
        <span class="title-span">合作伙伴</span>
      </div>
      <div class="partner">
        <div class="partners">
          <div class="logos">
            <img v-lazy="imgUrls[30]" />
          </div>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="contact_name" ref="concat">
        <img v-lazy="imgUrls[29]" />
        <span class="title-span">联系我们</span>
      </div>
      <div class="contact">
        <div class="map">
          <iframe frameborder="0" scrolling="no" :src="iframeUrl"></iframe>
        </div>
        <div class="contactForm">
          <div class="detail">
            <div class="title">
              如需了解公司更多详情，请填写以下信息，方便与您联系
            </div>
            <div class="titleEn">
              If you want to know more about the company, please fill in the
              following information to facilitate contact with you
            </div>
            <form class="form" @submit.prevent="sendEmail">
              <div class="formItem">
                <div>
                  <label>名字</label>
                  <input
                    type="text"
                    placeholder="Name"
                    v-model="formData.name"
                    name="name"
                  />
                </div>
                <div>
                  <label>手机</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    v-model="formData.phone"
                    name="phone"
                  />
                </div>
              </div>
              <div class="formItem">
                <label>邮箱</label>
                <input
                  type="text"
                  placeholder="E-Mail"
                  v-model="formData.email"
                  name="email"
                />
              </div>
              <div class="formItem">
                <label>地址</label>
                <input
                  type="text"
                  placeholder="Address"
                  v-model="formData.address"
                  name="address"
                />
              </div>
              <div class="submit">
                <input type="submit" class="btn-primary" value="提交表格" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import emailjs from "emailjs-com";
import apiKeys from "../../utils/apikeys";
import store from "../../store/warehouse";
import SwitchButton from "../../components/switchButton";

export default {
  name: "FirstPage",
  props: {
    urls: Object
  },
  data() {
    return {
      loading: false,
      originPath: store.originPath,
      activeForSuccessWork: 0,
      activeForSolution: 0,
      transport: store.transport,
      coverWidth: document.body.clientWidth,
      coverHeight: document.body.clientWidth * 0.6,
      RDcenterHeight: document.body.clientWidth * 0.387,
      imgUrls: this.urls ? this.urls.home : [],
      logoUrls: this.urls ? this.urls.homeLogos : [],
      iframeUrl: "../../../static/map.html",
      formData: {
        name: "",
        phone: "",
        email: "",
        address: ""
      },
      footerContents: {
        all: [],
        splited: [],
        selected: 0,
        works: [
          {
            key: "successful_plane",
            text: "航空飞机"
          },
          {
            key: "successful_rail_transit",
            text: "轨道交通"
          },
          {
            key: "successful_fleet",
            text: "物流车队"
          },
          {
            key: "successful_supermarket",
            text: "大型商超"
          },
          {
            key: "successful_steam_ship",
            text: "船舶标识"
          }
        ]
      },
      allSuccessfuls: []
    };
  },
  mounted() {
    this.$axios.get("/api/exhibitions").then(res => {
      if (res.data.length > 0) {
        this.allSuccessfuls = store.formatAllPaths(res.data[0]);
        this.setFooterContents("successful_plane");
      }
    });

    const queryParams = this.getQueryParams();
    const position = this._.get(queryParams, "position");
    const ref = this._.get(this.$refs, position);

    ref && ref.scrollIntoView();
  },
  methods: {
    routerChange(path) {
      this.$router.push(path);
    },
    getQueryParams() {
      const url = document.location.search || "";
      const arr1 = url.split("?");
      const obj = {};

      if (arr1.length > 1) {
        const arr2 = arr1[1].split("&");
        for (let i = 0; i < arr2.length; i++) {
          const curArr = arr2[i].split("=");
          obj[curArr[0]] = decodeURIComponent(curArr[1]);
        }
      }

      return obj;
    },
    sendEmail(e) {
      if (
        !this.formData.name ||
        !this.formData.phone ||
        !this.formData.address ||
        !this.formData.email
      ) {
        this.$message &&
          this.$message({
            message: "请您补全完整信息",
            type: "warning"
          });

        return;
      }

      this.loading = true;

      emailjs
        .sendForm(
          apiKeys.SERVICE_ID,
          apiKeys.TEMPLATE_ID,
          e.target,
          apiKeys.USER_ID
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );

      this.$axios
        .post("/api/contact-informations", {
          ...this.formData,
          time: this.formatDate("yyyy-MM-dd hh:mm:ss")
        })
        .then(
          res => {
            this.loading = false;
            this.formData = {};

            if (res.data.length > 0) {
              this.planeUrls = store.formatPaths(res.data[0].successful_plane);
            }

            this.$message &&
              this.$message({
                message: "提交成功",
                type: "success"
              });
          },
          () => {
            this.loading = false;

            this.$message &&
              this.$message({
                message: "提交异常，请刷新页面重新提交",
                type: "error"
              });
          }
        );
    },
    formatDate(fmt) {
      const o = {
        "M+": new Date().getMonth() + 1, //月份
        "d+": new Date().getDate(), //日
        "h+": new Date().getHours(), //小时
        "m+": new Date().getMinutes(), //分
        "s+": new Date().getSeconds(), //秒
        "q+": Math.floor((new Date().getMonth() + 3) / 3), //季度
        S: new Date().getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (const k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    },
    isActive(k, v) {
      this[k] = v;

      if (k === "activeForSuccessWork") {
        this.setFooterContents(this.footerContents.works[v].key);
      }
    },
    setFooterContents(key) {
      this.footerContents.all = this._.chain(this.allSuccessfuls)
        .get(key)
        .map((item, index) => ({ ...item, index }))
        .value();
      this.footerContents.splited = this.footerContents.all.slice(0, 3);
      this.footerContents.selected = 0;
    },
    footerIndexChange(type) {
      if (this._.get(this.$refs, "carousel")) {
        this.$refs.carousel[type]();
      }
    },
    carouselChange(currentIndex) {
      if (currentIndex > 2) {
        this.footerContents = {
          ...this.footerContents,
          selected: currentIndex,
          splited: this.footerContents.all.slice(
            currentIndex - 2,
            currentIndex + 1
          )
        };
        return;
      }

      this.footerContents = {
        ...this.footerContents,
        selected: currentIndex,
        splited: this.footerContents.all.slice(0, 3)
      };
    }
  },
  components: {
    "Switch-button": SwitchButton
  }
};
</script>

<style scoped lang="less">
.firstPage {
  position: relative;
  flex: 1 0 auto;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  section {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
}

.section_1 {
  min-height: 31.8rem;
}

.section_2 {
  min-height: 79.2rem;
}

.section_4 {
  min-height: 158.66rem;
}

.section_1,
.section_2,
.section_3,
.section_4 {
  position: relative;

  .coverImg {
    display: block;
    width: 100%;
    height: 100%;
    z-index: -100;
  }
}

.section_2 {
  position: relative;

  .companyInfo_name {
    position: absolute;
    top: 3.8%;
    left: 11.5%;
    color: rgba(203, 74, 64);
    display: flex;
    align-items: flex-start;

    img {
      width: 10.5rem;
    }

    span {
      margin-left: 4rem;
    }
  }

  .companyInfo_background {
    position: absolute;
    top: 12%;
    left: 0;

    img {
      width: 100%;
    }
  }

  .companyInfo {
    position: absolute;
    top: 14%;
    left: 37.5%;
    width: 56.25%;
    height: 20%;
    background-color: rgba(203, 74, 64, 0.86);
  }

  .about_1 {
    width: 42.6%;
    position: absolute;
    bottom: 88%;
    right: 10%;
  }

  .about_2 {
    width: 58.6%;
    position: absolute;
    right: 72%;
    bottom: 11%;
  }

  .infoDetail {
    position: absolute;
    right: 9%;
    bottom: 11%;
    width: 60%;
    height: 59%;
    color: white;
    word-break: break-all;
  }

  .title {
    width: 100%;
    font-size: 0.65rem;
    font-weight: 700;
    margin-bottom: 0.24rem;
  }

  .content {
    width: 100%;
  }

  .more {
    color: white;
    font-size: 0.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1.2rem;
    width: 3.7rem;
    line-height: 1.2rem;
    border: 1px solid white;
    border-radius: 1.2rem;
    cursor: pointer;
  }

  .solution_name {
    position: absolute;
    top: 49.7%;
    right: 14.6%;
    color: rgba(203, 74, 64);

    img {
      width: 17rem;
    }

    span {
      margin-right: 10rem;
    }
  }

  .solution_background {
    position: absolute;
    top: 61%;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 52rem;
    }
  }

  .solution {
    position: absolute;
    width: 74%;
    height: 10%;
    min-height: 8rem;
    bottom: 13%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: space-around;
    color: rgb(102, 102, 102);
  }

  .transDetail {
    text-align: center;
    position: absolute;
    top: 6.4rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .transName {
    font-size: 0.65rem;
    font-weight: 700;
    margin-bottom: 0.16rem;
    width: 4.75rem;
  }

  .solution > div {
    width: calc(100% / 7);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .imgWrap {
      border-radius: 2.08rem;
      height: 4.16rem;
      width: 4.16rem;
      background-color: rgba(203, 74, 64);
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #b3b3b3;
      }
    }

    img {
      width: 1.92rem;
    }
  }

  .center_name {
    position: absolute;
    bottom: 3%;
    left: 15%;
    color: rgba(203, 74, 64);

    img {
      width: 25rem;
    }
  }
}

.section_3 {
  .RDCenter {
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    color: white;
  }

  // .content {
  // 	font-weight: bold;
  // }

  .title {
    height: 100%;
    width: 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .name {
      font-size: 1.6rem;
    }
  }

  .detail {
    height: 100%;
    width: 50%;
    padding: 2.88rem 0;

    img {
      width: 58%;
      min-height: 7.6rem;
    }

    .content {
      font-size: 0.5rem;
      line-height: 0.8rem;
      margin-top: 2.64rem;
      color: rgb(153, 153, 153);
    }
  }
}

.title-span {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: bold;
  color: rgb(203, 74, 64);
}

.section_4 {
  .successWork_name {
    position: absolute;
    top: 3.5%;
    right: 15%;

    img {
      width: 19rem;
    }

    span {
      font-size: 1.8rem !important;
      position: absolute;
      width: 8rem;
      bottom: 0;
      left: 0;
    }
  }

  .mediaAndDesign_name {
    position: absolute;
    top: 24.2%;
    left: 15%;

    img {
      width: 22rem;
    }

    span {
      position: absolute;
      white-space: nowrap;
      top: 0;
      right: 0;
    }
  }

  .news_name {
    position: absolute;
    top: 48.5%;
    right: 14%;

    img {
      width: 9.4rem;
    }

    span {
      position: absolute;
      width: 28rem;
      bottom: 0.3rem;
      right: 100%;
    }
  }

  .news_background {
    position: absolute;
    top: 51.5%;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .partner_name {
    position: absolute;
    top: 70%;
    left: 15%;

    img {
      width: 13.6rem;
    }

    span {
      position: absolute;
      width: 20rem;
      top: 100%;
      left: 0;
    }
  }

  .contact_name {
    position: absolute;
    top: 85.2%;
    left: 15%;

    img {
      width: 18.4rem;
    }

    span {
      font-size: 1.8rem;
      width: 20rem;
      position: absolute;
      top: 0;
      left: 100%;
      margin-left: 7rem;
    }
  }

  .successWork {
    position: absolute;
    width: 80%;
    top: 4%;
    left: 10%;
    display: flex;
    justify-content: center;

    .works > div {
      position: relative;
      margin-bottom: 6.4rem;
      padding-left: 34%;
    }

    .works {
      width: 30%;
      height: 100%;

      button {
        margin-left: 20%;
      }

      .line {
        width: 100%;
        height: 16.8rem;
        border-left: 2px solid rgb(212, 212, 212);
      }

      ul {
        position: relative;
        margin-left: calc(-0.325rem - 1px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(102, 102, 102);
        font-size: 0.65rem;

        li:before {
          display: inline-block;
          background-color: rgba(255, 255, 255, 0);
          width: 0.65rem;
          height: 0.65rem;
          border-radius: 50%;
          content: "";
          margin-right: 0.65rem;
        }

        .active:before {
          background-color: rgba(203, 74, 64);
        }

        .active {
          color: rgba(203, 74, 64);
        }

        li {
          min-width: 4rem;
          margin-bottom: 0.64rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
    }

    .carousel {
      width: 70%;
      height: 100%;

      .contents {
        width: 23rem;
        height: 14rem;
        margin: 20% 0 0 13%;

        img {
          width: 100%;
        }
      }
    }

    /deep/ .el-carousel {
      .el-carousel__indicators,
      .el-carousel__arrow {
        display: none;
      }
    }

    .carouselFooter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      margin-left: 15%;
      margin-top: 3.1rem;
    }

    .footerContent {
      width: 60%;
      display: flex;
      justify-content: space-around;
      color: rgb(102, 102, 102);

      .selected {
        color: black;
        font-weight: 700;
      }
    }
  }

  .mediaAndDesign {
    position: absolute;
    width: 100%;
    height: 15%;
    top: 30%;
    left: 0;
    display: flex;
    justify-content: flex-start;

    .designs {
      width: 70%;
      height: 100%;
      position: relative;

      img {
        width: 100%;
      }
    }

    .designName {
      position: absolute;
      left: 100%;
      top: 2.6rem;

      div {
        height: 1.92rem;
        line-height: 1.92rem;
        background-color: rgb(153, 153, 153);
        font-size: 0.72rem;
        padding: 0 0.32rem;
        color: white;
      }

      div:nth-child(1) {
        width: 9.4rem;
      }

      div:nth-child(2) {
        width: 8rem;
        margin-top: -0.32rem;
        background-color: rgb(128, 128, 128);
      }

      div:nth-child(3) {
        width: 10.8rem;
      }
    }

    .designDetail {
      width: 24%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: rgb(102, 102, 102);
      padding: 2.24rem 2.6rem;
      line-height: 0.8rem;

      div {
        margin-bottom: 0.56rem;
      }
    }
  }

  .news {
    position: absolute;
    top: 54.2%;
    left: 14%;
    height: 10%;
    width: 74%;
    display: flex;
    justify-content: center;

    .left,
    .right {
      width: 50%;
      height: 100%;
      position: relative;
    }

    .left {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .small {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.32rem;

      img {
        width: 32%;
      }

      img:last-child {
        margin: 0 !important;
      }
    }

    .big {
      img {
        width: 100%;
        display: block;
      }
    }

    .right {
      display: flex;
      align-items: flex-end;

      img {
        width: 100%;
      }
    }
  }

  .partner {
    position: absolute;
    top: 72%;
    left: 45%;
    width: 75%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .partners {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 60%;
    }

    .logos {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  .contact {
    position: absolute;
    top: 89.5%;
    left: 15%;
    height: 9%;
    width: 80%;
    display: flex;
    justify-content: space-between;

    .map {
      width: 45%;
      height: 100%;

      iframe {
        width: 17.2rem;
        height: 14rem;
      }
    }

    .contactForm {
      width: 55%;
      height: 100%;
    }

    .title {
      width: 100%;
      text-align: center;
      font-size: 0.6rem;
      font-weight: bold;
      line-height: 1rem;
      margin-bottom: 0.32rem;
    }

    .titleEn {
      width: 80%;
      margin: auto;
      text-align: center;
      line-height: 0.72rem;
    }

    .form {
      width: 100%;

      .formItem {
        width: 100%;
        height: 2.4rem;
        line-height: 2.4rem;
        margin-top: 0.5rem;
        border-bottom: 1px solid rgb(212, 212, 212);
      }

      .formItem:first-child {
        display: flex;
        justify-content: space-between;
        border: none;

        div {
          border-bottom: 1px solid rgb(212, 212, 212);
          width: 48%;
        }
      }

      .formItem:last-child {
        border: none;
      }

      label {
        width: 1.6rem;
        display: inline-block;
      }

      .input {
        display: inline-block;
        width: calc(100% - 1.6rem);
        color: rgb(204, 204, 204);
      }

      .submit {
        width: 100%;
        height: 2.6rem;
        justify-content: center;
        display: flex;
        align-items: flex-end;
      }
    }
  }
}
</style>
