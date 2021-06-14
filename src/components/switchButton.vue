<template>
  <div
    class="switchButton"
    :class="{
      switchButtonLeft: type === 'pre',
      switchButtonRight: type === 'next'
    }"
  >
    <img :src="require(`../assets/images/button/button_${type}.png`)" />
  </div>
</template>

<script>
export default {
  name: "switch-button",
  props: {
    type: String
  }
};
</script>

<style scoped>
.switchButton {
  width: 1.28rem;
  height: 1.28rem;
  border-radius: 0.64rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 0px 6px #dddddd;
  cursor: pointer;
}
</style>
