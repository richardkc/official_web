<template>
	<nav class="tabs">
		<img class="logo" src="../assets/images/logo.png" />
		<div class="navList">
			<ul>
				<li
					v-for="(list, listIndex) in tabInfo.tabs"
					:key="list.key"
					:style="{
						cursor: list.children.length > 0 ? 'pointer' : 'default',
					}"
					@click="
						() => {
							handleNavClick(list, listIndex);
						}
					"
				>
					<div
						class="listName"
						:class="{ selectedTab: selectedKey === listIndex }"
					>
						{{ list.name }}
					</div>
					<ul
						class="menuList"
						:style="{
							display:
								selectedKey === listIndex &&
								showList &&
								list.children &&
								list.children.length > 0
									? 'flex'
									: 'none',
						}"
					>
						<li v-for="item in list.children" :key="item.key">
							{{ item.name }}
						</li>
					</ul>
				</li>
			</ul>
			<div class="tool">
				<div class="login">登录</div>
				<div class="language">CN</div>
			</div>
		</div>
	</nav>
</template>

<script>
import $ from "jquery";

const tabHeightRange = [
	{
		min: 6,
		max: 20,
	},
	{
		min: 20,
		max: 32,
	},
	{
		min: 32,
		max: 41,
	},
	{
		min: 41,
		max: 53,
	},
	{
		min: 53,
		max: 65,
	},
	{
		min: 65,
		max: 77,
	},
	{
		min: 77,
		max: 84,
	},
	{
		min: 84,
		max: 100,
	},
];
let disableSelected = false;

export default {
	name: "Nav",
	props: {
		tabInfo: Object,
	},
	data() {
		return {
			selectedKey: "",
			showList: false,
		};
	},
	mounted() {
		window.onresize = () => {
			return (() => {
				this.RDcenterHeight = document.body.clientWidth * 0.387;
			})();
		};

		this.scrollChange();

		window.addEventListener("scroll", this.scrollChange, true);
	},
	unmounted() {
		window.removeEventListener("scroll", this.scrollChanges, true);
	},
	methods: {
		scrollChange() {
			const scrollTop = document.documentElement.scrollTop;
			const offsetHeight = document.documentElement.offsetHeight;
			this.showList = false;

			if (disableSelected) {
				return;
			}

			tabHeightRange.forEach((item, index) => {
				const heightPercent = (scrollTop * 100) / offsetHeight;

				if (item.min < heightPercent && item.max > heightPercent) {
					this.selectedKey = index;
				}
			});
		},
		handleNavClick(list, index) {
			this.showList =
				this.selectedKey === index && this.showList ? false : true;
			this.selectedKey = index;

			// disableSelected = true;
			// $(document.documentElement).animate(
			// 	{
			// 		scrollTop:
			// 			(document.documentElement.offsetHeight *
			// 				(tabHeightRange[index].min + 5)) /
			// 			100,
			// 	},
			// 	500
			// );

			// setTimeout(() => {
			// 	disableSelected = false;
			// }, 500);
		},
	},
};
</script>

<style scoped lang="less">
.tabs {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: space-between;
	z-index: 999;
	color: white;

	.listName {
		position: relative;

		// &:hover {
		// 	&::before {
		// 		background-color: rgb(235, 74, 64);
		// 	}
		// }
	}

	.listName::before {
		content: "";
		box-sizing: content-box;
		display: block;
		width: 100%;
		height: 1rem;
		padding: 0 0.5rem;
		border-radius: 0.5rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -100;
	}

	.selectedTab::before {
		background-color: rgb(235, 74, 64);
	}

	.cover {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 900;
		width: 100%;
		height: 70%;
	}

	.logo {
		display: block;
		width: 5.6rem;
		height: 3.12rem;
		z-index: 999;
		margin: 0.5rem;
	}

	.navList {
		z-index: 999;
		flex: 1;
		display: flex;
		align-items: center;
	}

	.navList > ul {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 0.5rem;
	}

	.navList > ul > li {
		margin-right: 2.4%;
		white-space: nowrap;
		position: relative;
	}

	.tool {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		height: 1rem;
		margin-right: 1.8%;
	}

	.login {
		margin-right: 0.32rem;
		width: 2.16rem;
		line-height: 1rem;
		text-align: center;
		border: 1px solid white;
		border-radius: 0.5rem;
	}

	.language {
		height: 100%;
		width: 1rem;
		line-height: 1rem;
		text-align: center;
		border-radius: 50%;
		color: black;
		background-color: white;
	}

	.menuList {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0.8rem;
		left: 50%;
		transform: translate(-50%, 0);
		padding: 0.32rem 0.64rem;
		text-align: center;

		li {
			margin-bottom: 0.32rem;
		}
	}
}
</style>
