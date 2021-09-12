<template>
  <div class="bannerComponent">
    <div class="imageWrap">
      <img
        v-if="get(expandImage, 'url')"
        v-lazy="get(expandImage, 'url')"
        :key="get(expandImage, 'id')"
      />
    </div>
    <div class="banner">
      <div class="bannerLeft" @click="() => handleBtn(-1)">
        <Switch-button type="pre" />
      </div>
      <div
        v-for="(item, index) in showImages"
        :key="index"
        class="carouselItem"
        @click="() => changeImage(index)"
      >
        <img v-lazy="item.url" style="width: 100%; height: 100%;" />
        <span :class="{ covered: item.id !== expandImage.id }"></span>
      </div>
      <div class="bannerRight" @click="() => handleBtn(1)">
        <Switch-button type="next" />
      </div>
    </div>
  </div>
</template>

<script>
import SwitchButton from "./switchButton";

export default {
  name: "banner",
  props: {
    images: Array
  },
  data() {
    return {
      currentIndex: 0,
      chunkIndex: 0,
      expandImage: {},
      showImages: [],
      chunkedImages: []
    };
  },
  mounted() {
    this.chunkedImages = this._.chunk(this.images, 3) || [];
    this.showImages = this.chunkedImages[0] || [];
    this.expandImage = this.showImages[0];
  },
  components: {
    "Switch-button": SwitchButton
  },
  methods: {
    get(parent, key, pre) {
      return this._.get(parent, key) || pre || "";
    },
    changeImage(index) {
      this.currentIndex = index;
      this.expandImage = this.showImages[index] || {};
    },
    handleBtn(value) {
      const newIndex = value + this.chunkIndex;

      if (newIndex < 0 || newIndex > this._.size(this.chunkedImages) - 1) {
        return;
      }

      this.chunkIndex = newIndex;
      this.showImages = this.chunkedImages[this.chunkIndex];
    }
  }
};
</script>

<style lang="less" scoped>
.bannerComponent {
  width: 100%;

  .banner {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 60%;
    margin: 0 20%;

    .carouselItem:nth-child(-n + 3) {
      margin-right: 5%;
    }
  }

  .bannerLeft,
  .bannerRight {
    box-shadow: none;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.2rem;
    overflow: hidden;

    /deep/ img {
      width: 100%;
    }
  }

  .bannerLeft {
    position: absolute;
    left: -5%;
  }

  .bannerRight {
    position: absolute;
    left: 105%;
  }

  .carouselItem {
    max-width: 30%;
    max-height: 4rem;
    position: relative;
  }

  .covered {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(153, 153, 153, 0.75);
  }

  .imageWrap {
    width: 100%;
    margin-bottom: 1.5rem;
    height: 21rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
      max-width: 100%;
    }
  }
}
</style>
