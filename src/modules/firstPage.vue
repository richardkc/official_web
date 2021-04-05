<template>
	<main class="firstPage" scroll>
		<section class="section_1">
			<img class="coverImg" src="../assets/images/firstPage_1.jpg" />
		</section>
		<section class="section_2">
			<img class="coverImg" src="../assets/images/firstPage_2.jpg" />
			<div class="companyInfo">
				<img class="about_1" src="../assets/images/about_1.jpg" />
				<img class="about_2" src="../assets/images/about_2.jpg" />
				<div class="infoDetail">
					<div class="title">“科技、灵感，一切皆可创新”</div>
					<div class="content">
						2005年，深圳市大昆仑数码科技有限公司成立，公司秉承特区精神，自觉担当时代赋予的使命，立足行业，不断创新，以推动中国绿色环保事业前行为己任。公司自创建以来，一路积累了大量丰富的行业管理经验和服务经营理念。通过提供全线设计、策划、制作和标示材料，与国内众多品牌企业建立了长效稳固的合作关系，在包括但不限于飞机、轨道交通、公交车身广告、大型商超装饰的应用上一直提供一流国际化水准的科技应用和服务系统。
					</div>
					<button class="more">查看更多</button>
				</div>
			</div>
			<div class="solution">
				<div v-for="item in transport" :key="item.key">
					<div class="imgWrap" :class="[`imgWrap_${item.key}`]">
						<div>
							<img
								:src="
									require(`../assets/images/transport/trans_${item.key}.png`)
								"
							/>
						</div>
					</div>
					<div class="transDetail">
						<div class="transName">{{ item.name }}</div>
						<div>{{ item.English }}</div>
					</div>
				</div>
			</div>
		</section>
		<section class="section_3">
			<div class="RDCenter" :style="{ height: RDcenterHeight + 'px' }">
				<div class="title">
					<div class="name">研发中心</div>
					<button class="more">更多详情</button>
				</div>
				<div class="detail">
					<img src="../assets/images/RDCenter.jpg" />
					<div class="content">
						<div>
							大昆仑通过与沃尔玛中国、顺丰集团、深圳地铁、东航、南航、海航、3M等各大公司的业务合作及促进，近年来，公司不断加大投入，通过自主开发、设备改造、技术升级等方式，升级研发设备。
						</div>
						<div>
							同时，为确保研发的投入规模、规范中心建设，特别制定了《研发中心管理制度》，从制度层面提升研发中心的管理水平和发展后劲。
						</div>
						<div>
							大昆仑以客户需求、行业发展趋势为方向，逐步从传统制作行业过渡到研发、创新的科研型智能企业。
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="section_4">
			<img class="coverImg" src="../assets/images/firstPage_3.jpg" />
		</section>
		<section class="section_5">
			<img class="coverImg" src="../assets/images/firstPage_4.jpg" />
		</section>
	</main>
</template>

<script>
import store from "../store/warehouse";

export default {
	name: "FirstPage",
	props: {
		radio: String,
	},
	data() {
		return {
			transport: store.transport,
			coverWidth: document.body.clientWidth,
			coverHeight: document.body.clientWidth * 0.6,
			RDcenterHeight: document.body.clientWidth * 0.387,
		};
	},
};
</script>

<style scoped lang="less">
.firstPage {
	position: relative;
	flex: 1 0 auto;
	width: 100%;
	overflow-x: hidden;
	position: relative;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	section {
		width: 100%;
		position: relative;
		overflow: hidden;
	}
}
.section_1 {
	min-height: 100vh;
}

.section_1,
.section_2,
.section_3,
.section_4,
.section_5 {
	.coverImg {
		display: block;
		width: 100%;
		height: 100%;
		z-index: -100;
	}
}

.section_2 {
	position: relative;

	.companyInfo {
		position: absolute;
		top: 14%;
		left: 37.5%;
		width: 56.25%;
		height: 20%;
		background-color: rgba(203, 74, 64, 0.86);
	}

	.about_1 {
		width: 42.6%;
		position: absolute;
		bottom: 88%;
		right: 10%;
	}

	.about_2 {
		width: 58.6%;
		position: absolute;
		right: 72%;
		bottom: 11%;
	}

	.infoDetail {
		position: absolute;
		right: 9%;
		bottom: 11%;
		width: 60%;
		height: 59%;
		color: white;
		word-break: break-all;
	}

	.title {
		width: 100%;
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 6px;
	}

	.content {
		width: 100%;
		font-weight: lighter;
	}

	.more {
		color: white;
		font-size: 12px;
		position: absolute;
		bottom: 0;
		right: 0;
		height: 30px;
		width: 92px;
		line-height: 30px;
		border: 1px solid white;
		border-radius: 30px;
		cursor: pointer;
	}

	.solution {
		position: absolute;
		width: 74%;
		height: 10%;
		min-height: 200px;
		bottom: 13%;
		left: 50%;
		transform: translate(-50%, 0);
		display: flex;
		justify-content: space-around;
		color: rgb(102, 102, 102);
	}

	.transDetail {
		text-align: center;
		position: absolute;
		top: 160px;
		left: 50%;
		transform: translateX(-50%);
	}

	.transName {
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 4px;
		width: 7rem;
	}

	.solution > div {
		width: calc(100% / 7);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;

		.imgWrap {
			border-radius: 52px;
			height: 104px;
			width: 104px;
			background-color: rgba(203, 74, 64);
			margin-bottom: 24px;

			div {
				height: 48px;
				display: flex;
				align-items: flex-end;
			}
		}

		.imgWrap_1 {
			padding: 24px 28px;
		}

		.imgWrap_2 {
			padding: 20px 28px;
		}

		.imgWrap_3 {
			padding: 16px 26px;
		}

		.imgWrap_4 {
			padding: 18px 28px;
		}

		.imgWrap_5 {
			padding: 20px 28px;
		}

		.imgWrap_6 {
			padding: 22px 28px;
		}

		.imgWrap_7 {
			padding: 17px 28px;
		}

		img {
			width: 48px;
		}
	}
}

.section_3 {
	.RDCenter {
		width: 100%;
		background-color: black;
		display: flex;
		justify-content: center;
		color: white;
	}

	.title {
		height: 100%;
		width: 18%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.name {
			font-size: 40px;
		}

		.more {
			font-size: 16px;
			color: white;
			width: 108px;
			border-radius: 18px;
			height: 36px;
			background-color: rgb(203, 74, 64);
		}
	}

	.detail {
		height: 100%;
		width: 50%;
		padding: 72px 0;

		img {
			width: 58%;
			min-height: 190px;
		}

		.content {
			font-size: 12px;
			line-height: 20px;
			margin-top: 66px;
			color: rgb(153, 153, 153);
		}
	}
}
</style>
