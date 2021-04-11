<template>
	<Mobile-tab v-if="!isPC" :tabInfo="tabInfo"></Mobile-tab>
	<Tab v-if="isPC" :tabInfo="tabInfo"></Tab>
	<router-view :isPC="isPC"></router-view>
</template>

<script>
import Tab from "@/layout/tab";
import MobileTab from "./layout/mobileTab";
import store from "@/store/warehouse";
import methods from "@/utils/basic";

const fontSizeChange = () => {
	document.documentElement.style.fontSize =
		12 * (document.documentElement.clientWidth / 640) + "px";
};

export default {
	name: "App",
	data() {
		return {
			tabInfo: {
				tabs: store.tabs,
			},
			isPC: methods.isPC(),
		};
	},
	components: {
		Tab: Tab,
		MobileTab: MobileTab,
	},
	methods: {
		documentScroll(isScroll) {
			console.log("isScroll?", isScroll);
		},
	},
	mounted() {
		document.dispatchEvent(new Event("render-event"));

		fontSizeChange();
		window.addEventListener("resize", fontSizeChange, false);
		window.addEventListener("orientationchange", fontSizeChange, false);
	},
	unmounted() {
		window.removeEventListener("resize", fontSizeChange);
		window.removeEventListener("orientationchange", fontSizeChange);
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
}

body {
	text-rendering: geometricPrecision;
	-webkit-font-smoothing: subpixel-antialiased;
	min-height: 100vh;
	font-size: 0.5rem;
	cursor: default;
}

ul,
li {
	list-style: none;
}

button {
	background-color: transparent;
}

#app {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;
}

.btn-primary {
	font-size: 0.6rem;
	color: white;
	width: 4.32rem;
	border-radius: 0.72rem;
	height: 1.44rem;
	background-color: rgb(203, 74, 64);
}
</style>
