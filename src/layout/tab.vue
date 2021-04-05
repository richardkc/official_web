<template>
	<nav class="tabs">
		<div :class="{ cover: isScroll }"></div>
		<img class="logo" src="../assets/images/logo.png" />
		<div class="navList">
			<ul>
				<li
					v-for="list in tabInfo.tabs"
					:key="list.key"
					:style="{
						cursor: list.children.length > 0 ? 'pointer' : 'default',
					}"
					@click="
						() => {
							handleNavClick(list);
						}
					"
				>
					<div>{{ list.name }}</div>
					<ul
						class="menuList"
						:style="{
							display: selectedKey === list.key ? 'flex' : 'none',
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
export default {
	name: "Nav",
	props: {
		tabInfo: Object,
	},
	data() {
		return {
			isScroll: false,
			selectedKey: "",
		};
	},
	mounted() {
		window.onresize = () => {
			return (() => {
				this.RDcenterHeight = document.body.clientWidth * 0.387;
			})();
		};

		window.addEventListener("scroll", this.scrollChange, true);
	},
	unmounted() {
		window.removeEventListener("scroll", this.scrollChanges, true);
	},
	methods: {
		scrollChange() {
			const scrollTop = document.documentElement.scrollTop;

			this.isScroll = scrollTop > 0;
		},
		handleNavClick(list) {
			this.selectedKey = this.selectedKey === list.key ? "" : list.key;
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
	height: 100px;
	display: flex;
	justify-content: space-between;
	z-index: 999;
	color: white;

	.cover {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 900;
		width: 100%;
		height: 70%;
		background-color: rgba(0, 0, 0, 1);
	}

	.logo {
		display: block;
		width: 140px;
		height: 78px;
		z-index: 999;
		margin: 12px;
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
		margin-bottom: 12px;
	}

	.navList > ul > li {
		margin-right: 2.4%;
		white-space: nowrap;
		position: relative;
	}

	.tool {
		display: flex;
		justify-content: space-between;
		margin-bottom: 12px;
		height: 26px;
		margin-right: 1.8%;
	}

	.login {
		margin-right: 8px;
		width: 54px;
		line-height: 24px;
		text-align: center;
		border: 1px solid white;
		border-radius: 12px;
	}

	.language {
		height: 100%;
		width: 26px;
		line-height: 26px;
		text-align: center;
		border-radius: 50%;
		color: black;
		background-color: white;
	}

	.menuList {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translate(-50%, 0);
		padding: 8px 16px;
		text-align: center;
		background-color: rgba(0, 0, 0, 1);

		li {
			margin-bottom: 8px;
		}
	}
}
</style>
