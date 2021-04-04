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
		</section>
		<section>
			<div class="RDCenter" :style="{ height: RDcenterHeight + 'px' }"></div>
		</section>
		<section class="section_3">
			<img class="coverImg" src="../assets/images/firstPage_3.jpg" />
		</section>
		<section class="section_4">
			<img class="coverImg" src="../assets/images/firstPage_4.jpg" />
		</section>
	</main>
</template>

<script>
window.onRe;
export default {
	name: "FirstPage",
	props: {
		radio: String,
	},
	data() {
		return {
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
.section_4 {
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
}

.RDCenter {
	width: 100%;
	background-color: black;
}
</style>
