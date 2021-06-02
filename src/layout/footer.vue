<template>
  <section class="footer">
    <img class="coverImg" src="../assets/images/firstPage_4.jpg" />
    <div class="companyInfo">
      <div>
        <div>深圳市大昆仑数码有限公司</div>
        <div>深圳市龙岗区坂田街道布龙路227号格泰隆·智谷C栋4楼</div>
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
  data() {
    return {};
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
