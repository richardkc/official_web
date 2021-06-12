const tabs = [
  {
    name: "关于大昆仑",
    router: "",
    key: 1,
    children: [
      {
        name: "公司简介",
        router: "/",
        key: "1-1"
      },
      {
        name: "企业文化",
        router: "/",
        key: "1-2"
      },
      {
        name: "发展历程",
        router: "/",
        key: "1-3"
      },
      {
        name: "荣誉资质",
        router: "/",
        key: "1-4"
      }
    ]
  },
  {
    name: "行业解决方案",
    router: "",
    key: "2",
    children: [
      {
        name: "航空标识贴膜工艺解决方案",
        router: "/aviation",
        key: "2-1"
      },
      {
        name: "轨道交通标识贴膜工艺解决方案",
        router: "/railTransit",
        key: "2-2"
      },
      {
        name: "物流车队标识贴膜工艺解决方案",
        router: "/logistics",
        key: "2-3"
      },
      {
        name: "船舶标识贴膜工艺解决方案",
        router: "/steamShip",
        key: "2-4"
      },
      {
        name: "大型商超标识系统解决方案",
        router: "/supermarket",
        key: "2-5"
      },
      {
        name: "建筑装饰贴膜解决方案",
        router: "/building",
        key: "2-6"
      }
      // {
      //   name: "3M全系列贴膜产品经销商",
      //   router: "/qualification",
      //   key: "2-7"
      // }
    ]
  },
  {
    name: "研发中心",
    router: "",
    key: "3",
    children: []
  },
  {
    name: "成功案例",
    router: "",
    key: "4",
    children: [
      {
        name: "航空飞机标识",
        router: "/",
        key: "4-1"
      },
      {
        name: "轨道交通标识",
        router: "/",
        key: "4-2"
      },
      {
        name: "物流车队标识",
        router: "/",
        key: "4-3"
      },
      {
        name: "大型商超标识",
        router: "/",
        key: "4-4"
      },
      {
        name: "船舶标识工程",
        router: "/",
        key: "4-5"
      }
    ]
  },
  {
    name: "设计服务",
    router: "",
    key: "5",
    children: [
      {
        name: "品牌视觉包装解决方案",
        router: "/",
        key: "5-1"
      },
      {
        name: "商业广告宣传设计",
        router: "/",
        key: "5-2"
      },
      {
        name: "航空媒体资源广告投放洽谈",
        router: "/",
        key: "5-3"
      }
    ]
  },
  {
    name: "新闻公告",
    router: "",
    key: "6",
    children: [
      {
        name: "公司新闻举措",
        router: "/",
        key: "6-1"
      },
      {
        name: "行业动态",
        router: "/",
        key: "6-2"
      }
    ]
  },
  {
    name: "合作伙伴",
    router: "",
    key: "7",
    children: [
      {
        name: "合作商家",
        router: "/",
        key: "7-1"
      },
      {
        name: "合作交流",
        router: "/",
        key: "7-2"
      }
    ]
  },
  {
    name: "联系我们",
    router: "",
    key: "8",
    children: []
  }
];

const transport = [
  {
    name: "航空标识",
    English: "Airline",
    key: 1
  },
  {
    name: "物流车队",
    English: "Train",
    key: 2
  },
  {
    name: "轨道交通",
    English: "Truck",
    key: 3
  },
  {
    name: "大型商超",
    English: "Supermarket",
    key: 4
  },
  {
    name: "船舶标识",
    English: "Ship",
    key: 5
  },
  {
    name: "建筑装饰",
    English: "Building",
    key: 6
  },
  {
    name: "3M全系列贴膜特约经销商",
    English: "3m Film",
    key: 7
  }
];

const works = ["航空飞机", "轨道交通", "物流车队", "大型商超", "船舶标识"];

const logosSize = [
  {
    width: "7.2rem"
  },
  {
    width: "12.8rem"
  },
  {
    width: "6.4rem"
  },
  {
    width: "6.4rem"
  },
  {
    width: "6.4rem"
  },
  {
    width: "3.6rem"
  },
  {
    width: "6.4rem"
  },
  {
    width: "6.4rem"
  }
];

export default {
  tabs,
  transport,
  works,
  logosSize
};
