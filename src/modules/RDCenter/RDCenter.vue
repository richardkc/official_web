<template>
  <main class="RDCenter">
    <section class="banner">
      <img :src="imgUrls[0]" />
    </section>
    <section class="introduction">
      <div class="titles">
        <div class="left">
          <div class="title">研发情况介绍</div>
          <div class="subTitle">研发情况介绍</div>
        </div>
        <div class="right">
          <img :src="logoUrls[0]" />
        </div>
      </div>
      <div class="subTitleLg">2018年与3M、深圳中车成立贴膜技术研发中心</div>
      <div class="imageWrap">
        <img :src="imgUrls[1]" />
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
      <div class="subTitleLg">
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
      <div class="cover">
        <img :src="imgUrls[2]" />
      </div>
      <div class="applicationInner">
        <div class="examples">
          <div class="title">大昆仑拥有先进的打印设备</div>
          <div class="subTitle">
            PRINTING EQUIPMENT
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
      imgUrls: this.urls ? this.urls.successfulCase : [],
      logoUrls: this.urls ? this.urls.logo : []
    };
  }
};
</script>

<style lang="less" scoped></style>
