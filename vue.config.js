const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");

module.exports = {
	// 基本路径 baseURL已经过时
	publicPath: "./",
	// 输出文件目录
	outputDir: "dist",
	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,
	// use the full build with in-browser compiler?
	// https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
	// compiler: false,
	// webpack配置
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	chainWebpack: () => {},
	configureWebpack: () => {
		if (process.env.NODE_ENV !== "production") return;
		return {
			plugins: [
				new PrerenderSPAPlugin({
					// 生成文件的路径，也可以与webpakc打包的一致。
					// 下面这句话非常重要！！！
					// 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
					staticDir: path.join(__dirname, "dist"),

					// 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
					routes: ["/", "/Login", "/Home"],

					// 这个很重要，如果没有配置这段，也不会进行预编译
					renderer: new Renderer({
						inject: {
							foo: "bar",
						},
						headless: false,
						// 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
						renderAfterDocumentEvent: "render-event",
					}),
				}),
			],
		};
	},
	// vue-loader 配置项
	// https://vue-loader.vuejs.org/en/options.html
	// vueLoader: {},
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: true,
	// css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {},
		// 启用 CSS modules for all css / pre-processor files.
		modules: false,
	},
	// use thread-loader for babel & TS in production build
	// enabled by default if the machine has more than 1 cores
	parallel: require("os").cpus().length > 1,
	// 是否启用dll
	// See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
	// dll: false,
	// PWA 插件相关配置
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {},
	// webpack-dev-server 相关配置
	// devServer: {
	// 	open: process.platform === "darwin",
	// 	disableHostCheck: true,
	// 	host: "www.test.com", //如果是真机测试，就使用这个IP
	// 	port: 8080,
	// 	https: false,
	// 	hotOnly: false,
	// 	before: () => {},
	// },
	// 第三方插件配置
	pluginOptions: {
		// ...
	},
};
