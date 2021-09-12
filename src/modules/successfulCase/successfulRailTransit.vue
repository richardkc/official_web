<template>
  <main class="successfulRailTransit">
    <div class="banner">
      <img v-lazy="imgUrls[0]" />
    </div>
    <div class="examples">
      <div
        class="example"
        v-for="(item, index) in railTransitUrls"
        :key="index"
        @click="() => changeExamples(index)"
      >
        <img v-lazy="railTransitUrls[index].url" />
        <span :class="{ covered: index !== currentIndex }">{{
          railTransitUrls[index].text
        }}</span>
      </div>
    </div>
    <div class="details">
      <div class="contentWrap">
        <div class="subTitle">{{ carouselMap[currentIndex].name }}</div>
        <div class="content">{{ carouselMap[currentIndex].details }}</div>
      </div>
      <div class="carousel">
        <Banner
          :key="currentIndex"
          v-if="carouselMap[currentIndex].images"
          :images="carouselMap[currentIndex].images"
        ></Banner>
      </div>
    </div>
  </main>
</template>

<script>
import Banner from "../../components/banner";
import store from "@/store/warehouse";

export default {
  props: {
    urls: Object
  },
  data() {
    return {
      imgUrls: this.urls ? this.urls.successfulRailTransit : [],
      railTransitUrls: [],
      currentIndex: "0",
      carouselMap: [
        {
          name: "深圳地铁三号线"
        },
        {
          name: "广佛地铁列车"
        },
        {
          name: "广州黄埔有轨电车"
        },
        {
          name: "云南文山有轨电车"
        }
      ]
    };
  },
  mounted() {
    this.$axios.get("/api/exhibitions").then(res => {
      if (res.data.length > 0) {
        this.railTransitUrls = store.formatPaths(
          res.data[0].successful_rail_transit
        );
      }
    });

    this.$axios.get("/api/successful-rail-transits").then(res => {
      if (this._.size(res.data) > 0) {
        this._.forEach(res.data, (item, index) => {
          this.carouselMap[index].images = store.formatPathsWithoutSort(
            item.images
          );
        });
        this.currentIndex = 0;
      }
    });
  },
  components: {
    Banner
  },
  methods: {
    changeExamples(index) {
      this.currentIndex = index;
    }
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
  font-weight: @subTitleFontWeight;
}

.successfulRailTransit {
  width: 100%;
  font-size: @fontSizeMd;

  .banner,
  img {
    width: 100%;
  }
}

.examples {
  width: 56%;
  margin: 4rem 22% 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  color: white;
}

.example {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    height: 100%;
  }

  .covered {
    background-color: rgba(203, 74, 64, 0.8);
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }
}

.details {
  width: 60%;
  margin: 6rem 20% 4rem;

  .contentWrap {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 1.5rem;

    .subTitle {
      color: @redColor;
      margin: 0 1rem 0 0.5rem;
    }
  }
}

.carousel {
  width: 100%;
}
</style>
