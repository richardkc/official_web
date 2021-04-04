const tabs = [
	{
		name: "关于大昆仑",
		router: "",
		key: 1,
		children: [
			{
				name: "公司简介",
				router: "/profile",
				key: "1-1",
			},
			{
				name: "企业文化",
				router: "/culture",
				key: "1-2",
			},
			{
				name: "发展历程",
				router: "/expirence",
				key: "1-3",
			},
			{
				name: "荣誉资质",
				router: "/qualification",
				key: "1-4",
			},
		],
	},
	{
		name: "行业解决方案",
		router: "",
		key: "2",
		children: [
			{
				name: "航空标识工程及贴膜工艺解决方案",
				router: "/profile",
				key: "2-1",
			},
			{
				name: "物流车队标识及贴膜工艺解决方案",
				router: "/culture",
				key: "2-2",
			},
			{
				name: "轨道交通标识工程及贴膜工艺解决方案",
				router: "/expirence",
				key: "2-3",
			},
			{
				name: "船舶标识工程及贴膜工艺解决方案",
				router: "/qualification",
				key: "2-4",
			},
			{
				name: "建筑装饰贴膜解决方案",
				router: "/culture",
				key: "2-5",
			},
			{
				name: "大型商超标识系统解决方案",
				router: "/expirence",
				key: "2-6",
			},
			{
				name: "3M全系列贴膜产品经销商",
				router: "/qualification",
				key: "2-7",
			},
		],
	},
	{
		name: "研发中心",
		router: "",
		key: "3",
		children: [],
	},
	{
		name: "成功案例",
		router: "",
		key: "4",
		children: [
			{
				name: "航空飞机标识成功案例",
				router: "/",
				key: "4-1",
			},
			{
				name: "轨道交通标识成功案例",
				router: "/",
				key: "4-2",
			},
			{
				name: "物流车队标识成功案例",
				router: "/",
				key: "4-3",
			},
			{
				name: "大型商超标识系统案例",
				router: "/",
				key: "4-4",
			},
			{
				name: "船舶标识工程成功案例",
				router: "/",
				key: "4-5",
			},
		],
	},
	{
		name: "设计服务",
		router: "",
		key: "5",
		children: [
			{
				name: "品牌视觉包装解决方案",
				router: "/",
				key: "5-1",
			},
			{
				name: "商业广告宣传设计",
				router: "/",
				key: "5-2",
			},
			{
				name: "航空媒体资源广告投放洽谈",
				router: "/",
				key: "5-3",
			},
		],
	},
	{
		name: "新闻公告",
		router: "",
		key: "6",
		children: [
			{
				name: "公司新闻举措",
				router: "/",
				key: "6-1",
			},
			{
				name: "行业动态",
				router: "/",
				key: "6-2",
			},
		],
	},
	{
		name: "合作伙伴",
		router: "",
		key: "7",
		children: [
			{
				name: "合作商家",
				router: "/",
				key: "7-1",
			},
			{
				name: "合作交流",
				router: "/",
				key: "7-2",
			},
		],
	},
	{
		name: "联系我们",
		router: "",
		key: "8",
		children: [],
	},
];

export default {
	tabs,
};
