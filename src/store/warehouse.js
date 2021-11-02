import _ from "lodash";

const transport = [
  {
    name: "航空标识",
    English: "Airline",
    router: "/aviation",
    key: 1
  },
  {
    name: "物流车队",
    English: "Train",
    router: "/logistics",
    key: 2
  },
  {
    name: "轨道交通",
    English: "Truck",
    router: "/railTransit",
    key: 3
  },
  {
    name: "大型商超",
    English: "Supermarket",
    router: "/supermarket",
    key: 4
  },
  {
    name: "船舶标识",
    English: "Ship",
    router: "/steamShip",
    key: 5
  },
  {
    name: "建筑装饰",
    English: "Building",
    router: "/building",
    key: 6
  },
  {
    name: "3M全系列贴膜特约经销商",
    English: "3m Film",
    router: "",
    key: 7
  }
];

// const originPath = "http://8.210.247.224:1337";
// const originPath = "http://szdkl.oss-cn-beijing.aliyuncs.com";
const originPath = location.origin;

const formatAllPaths = data => {
  const arrs = [];

  _.forEach(_.keys(data), key => {
    arrs[key] = formatPaths(data[key]);
  });

  return arrs;
};

const formatPaths = data => {
  return _.sortBy(_.isArray(data) ? data : [], (item, index) => {
    item.url = originPath + item.url;
    item.text = item.alternativeText;
    item.index = index;

    return Number(item.name.match(/[0-9]+/)[0]);
  });
};

const formatPathsWithoutSort = data => {
  return _.map(_.isArray(data) ? data : [], (item, index) => {
    item.url = originPath + item.url;
    item.text = item.alternativeText;
    item.index = index;

    return item;
  });
};

export default {
  transport,
  originPath,

  formatPaths,
  formatAllPaths,
  formatPathsWithoutSort
};
