const isPC = () => {
	const userAgentInfo = navigator.userAgent;
	const Agents = [
		"Android",
		"iPhone",
		"SymbianOS",
		"Windows Phone",
		"iPad",
		"iPod",
	];
	let flag = true;

	for (let v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}

	return flag;
};

const fontSizeChange = () => {
	document.documentElement.style.fontSize =
		12 * (document.documentElement.clientWidth / 640) + "px";
};

export default {
	isPC,
	fontSizeChange,
};
