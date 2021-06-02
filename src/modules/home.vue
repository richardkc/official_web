<template>
  <div>
    <First-page v-if="isPC"></First-page>
    <Mobile-first-page v-else-if="!isPC"></Mobile-first-page>
  </div>
</template>

<script>
import FirstPage from "./PC/firstPage";
import MobileFirstPage from "./mobile/mobileFirstPage";

export default {
  name: "Home",
  props: {
    isPC: Boolean
  },
  components: {
    FirstPage,
    MobileFirstPage
  }
};
</script>

<style scoped></style>
