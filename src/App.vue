<template>
	<Tab :tabInfo="tabInfo"></Tab>
	<router-view></router-view>
</template>

<script>
import Tab from "@/layout/tab";
import store from "@/store/warehouse";

export default {
	name: "App",
	data() {
		return {
			tabInfo: {
				tabs: store.tabs,
			},
		};
	},
	components: {
		Tab: Tab,
	},
	methods: {
		documentScroll(isScroll) {
			console.log("isScroll?", isScroll);
		},
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
	font-size: 12px;
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
</style>
