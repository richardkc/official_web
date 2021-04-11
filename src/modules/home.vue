<template>
	<First-page v-if="isPC"></First-page>
	<Mobile-first-page v-if="!isPC"></Mobile-first-page>
</template>

<script>
import FirstPage from "./PC/firstPage";
import MobileFirstPage from "./mobile/mobileFirstPage";

export default {
	name: "Home",
	props: {
		isPC: Boolean,
	},
	components: {
		FirstPage,
		MobileFirstPage,
	},
};
</script>

<style scoped></style>
