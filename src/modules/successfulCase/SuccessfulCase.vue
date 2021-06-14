<template>
  <section class="successfulCase">
    <img :src="imgUrls[0]" />
    <div class="contentWrap">
      <div class="left">
        <div class="subTitle">ABOUT US</div>
        <div class="title">航空飞机</div>
        <div class="content">
          国内外大型企业冠名飞机是“移动的户外媒体”，
          拥有巨幅的视觉张力，超长投放周期，
          全国重点城市间频繁渗透，助力您的品牌影响力几何级成长。
        </div>
      </div>
      <div class="right">
        <div class="examples">
          <div class="example" v-for="(item, index) in examples" :key="index">
            <img :src="item.url" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    urls: Object
  },
  data() {
    return {
      imgUrls: this.urls ? this.urls.successfulCase : [],
      examples: [
        {
          url: this.urls ? this.urls.successfulCase[1] : ""
        },
        {
          url: this.urls ? this.urls.successfulCase[2] : ""
        },
        {
          url: this.urls ? this.urls.successfulCase[3] : ""
        },
        {
          url: this.urls ? this.urls.successfulCase[4] : ""
        },
        {
          url: this.urls ? this.urls.successfulCase[5] : ""
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
@greyColor: rgb(179, 179, 179);
@deepGreyColor: rgb(153, 153, 153);

@titleFontWeight: 700;
@subTitleFontWeight: 400;

.title {
  font-size: 1.75rem;
  font-weight: @titleFontWeight;
  margin-bottom: 2.5rem;
}

.subTitle {
  font-size: 0.85rem;
  font-weight: @titleFontWeight;
  margin-bottom: 1rem;
}

.successfulCase {
  color: white;
  width: 100%;
  position: relative;
  display: flex;

  img {
    width: 100%;
  }

  .contentWrap {
    position: absolute;
    width: 90%;
    left: 5%;
    bottom: 8%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .left {
    width: 20%;
  }

  .right {
    width: 80%;
  }

  .examples {
    width: 150%;
    display: flex;
    justify-content: flex-start;
  }

  .example {
    margin-left: 3%;
  }
}
</style>
