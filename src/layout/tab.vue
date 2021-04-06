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
	height: 4rem;
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
		background-color: rgba(0, 0, 0, 1);

		li {
			margin-bottom: 0.32rem;
		}
	}
}
</style>
