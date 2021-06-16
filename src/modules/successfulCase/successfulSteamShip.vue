<template>
  <main class="successfulSteamShip">
    <div class="banner">
      <img v-lazy="imgUrls[0]" />
    </div>
    <div class="details">
      <div class="contentWrap">
        <div class="subTitle">广东英辉船厂</div>
      </div>
      <div class="imageWrap">
        <img v-lazy="imgUrls[1]" />
      </div>
      <div class="carousel">
        <Switch-button type="pre" />
        <div
          v-for="(item, index) in carouselMap"
          :key="index"
          class="carouselItem"
        >
          <img v-lazy="item.url" style="width: 100%; height: 100%;" />
          <span :class="{ covered: index > 0 }">{{ item.text }}</span>
        </div>
        <Switch-button type="next" />
      </div>
    </div>
  </main>
</template>

<script>
import SwitchButton from "../../components/switchButton";

export default {
  props: {
    urls: Object
  },
  data() {
    return {
      imgUrls: this.urls ? this.urls.successfulSteamShip : [],
      carouselMap: [
        {
          url: this.urls ? this.urls.successfulSteamShip[2] : ""
        },
        {
          url: this.urls ? this.urls.successfulSteamShip[3] : ""
        },
        {
          url: this.urls ? this.urls.successfulSteamShip[4] : ""
        }
      ]
    };
  },
  components: {
    "Switch-button": SwitchButton
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
}

.successfulSteamShip {
  width: 100%;
  font-size: @fontSizeMd;

  .banner,
  img {
    width: 100%;
  }
}

.examples {
  width: 50%;
  margin: 4rem 25% 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

  .imageWrap {
    width: 100%;
    margin-bottom: 1.5rem;
  }
}

.carousel {
  width: 60%;
  margin: 0 20%;
  display: flex;
  justify-content: space-between;
  position: relative;

  .switchButton {
    box-shadow: none;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.2rem;

    /deep/ img {
      width: 100%;
    }
  }

  .switchButtonLeft {
    position: absolute;
    left: -5%;
  }

  .switchButtonRight {
    position: absolute;
    left: 105%;
  }

  .carouselItem {
    width: 30%;
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
}
</style>
