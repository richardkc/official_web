<template>
  <section class="footer">
    <img class="coverImg" v-lazy="imgUrls[0]" />
    <div class="companyInfo">
      <div>
        <div>深圳市大昆仑数码科技有限公司</div>
        <div>深圳市龙岗区平湖街道新木社区新围仔乐新路51号67栋</div>
      </div>
      <div>
        <div>0755-8322 6566</div>
        <div>13509662539 / 13322991093</div>
      </div>
      <div>
        <div>szdkl@foxmail.com</div>
        <div>www.smdkl.cn</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  props: {
    urls: Object
  },
  data() {
    return {
      imgUrls: this.urls ? this.urls.footer : []
    };
  }
};
</script>

<style lang="less" scoped>
.footer {
  min-height: 7.41rem;
  position: relative;

  .coverImg {
    display: block;
    width: 100%;
    height: 100%;
    z-index: -100;
  }

  .companyInfo {
    position: absolute;
    top: 50%;
    left: 56%;
    width: 80%;
    color: white;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
  }

  .companyInfo > div {
    width: 25%;
    line-height: 0.88rem;
  }

  .companyInfo > div:first-child {
    width: 35%;

    div:first-child {
      font-size: 0.65rem;
      letter-spacing: 0.08rem;
    }
  }
}
</style>
