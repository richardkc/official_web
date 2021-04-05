<template>
	<div class="switchButton">
		<img :src="require(`../assets/images/button/button_${type}.png`)" />
	</div>
</template>

<script>
export default {
	name: "switch-button",
	props: {
		type: String,
	},
};
</script>

<style scoped>
.switchButton {
	width: 32px;
	height: 32px;
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 3px 0px 6px #dddddd;
	cursor: pointer;
}
</style>
