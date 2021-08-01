<template>
  <div>
    <First-page :key="isPC" :urls="urls"></First-page>
    <!-- <Mobsile-first-page v-else-if="!isPC" :urls="urls"></Mobsile-first-page> -->
  </div>
</template>

<script>
import FirstPage from "./PC/firstPage";
// import MobileFirstPage from "./mobile/mobileFirstPage";

export default {
  name: "Home",
  props: {
    isPC: Boolean,
    urls: Object
  },
  components: {
    FirstPage
    // MobileFirstPage
  }
};
</script>

<style scoped></style>
