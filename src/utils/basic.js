let flag = true;
const isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];

  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }

  return flag;
};

const fontSizeChange = () => {
  const documentWidth = document.documentElement.clientWidth;
  const viewport = document.getElementById("viewport");

  document.documentElement.style.fontSize =
    12 * ((!flag && documentWidth < 1080 ? 1080 : documentWidth) / 640) + "px";

  if (!flag && viewport) {
    viewport.content = `width=device-width,initial-scale=${viewport / 1080}`;

    return;
  }

  if (viewport) {
    viewport.content = "width=device-width,initial-scale=1.0";
  }
};

export default {
  isPC,
  fontSizeChange
};
