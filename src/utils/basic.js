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
  flag = true;

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
  const fontSize = (
    12 * ((!flag && documentWidth < 1270 ? 1270 : documentWidth) / 640) || 0
  ).toFixed(2);

  document.documentElement.style.fontSize = fontSize + "px";
  window.fontSize = Number(fontSize);

  if (!flag && viewport) {
    viewport.content = `width=device-width,initial-scale=${viewport / 1270}`;

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
