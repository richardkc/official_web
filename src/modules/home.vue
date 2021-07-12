<template>
  <div>
    <First-page :urls="urls"></First-page>
    <!-- <Mobile-first-page v-else-if="!isPC" :urls="urls"></Mobile-first-page> -->
  </div>
</template>

<script>
import FirstPage from "./PC/firstPage";
import MobileFirstPage from "./mobile/mobileFirstPage";

export default {
  name: "Home",
  props: {
    isPC: Boolean,
    urls: Object
  },
  components: {
    FirstPage,
    MobileFirstPage
  }
};
</script>

<style scoped></style>
