const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");
const webpack = require("webpack");

module.exports = {
	publicPath: "./",
	// 输出文件目录
	outputDir: "dist",
	lintOnSave: true,
	// compiler: false,
	transpileDependencies: ["vue-router"],
	chainWebpack: () => {},
	configureWebpack: () => {
		if (process.env.NODE_ENV !== "production") {
			return;
		}

		return {
			plugins: [
				new PrerenderSPAPlugin({
					staticDir: path.join(__dirname, "dist"),
					routes: ["/"],
					renderer: new Renderer({
						inject: {
							foo: "bar",
						},
						headless: false,
						renderAfterDocumentEvent: "render-event",
					}),
				}),
				new webpack.ProvidePlugin({
					$: "jquery",
					jQuery: "jquery",
					"windows.jQuery": "jquery",
				}),
			],
		};
	},
	productionSourceMap: true,
	css: {
		extract: true,
		sourceMap: false,
		loaderOptions: {
			less: {
				globalVars: {
					primary: "#fff",
				},
			},
		},
	},
	parallel: require("os").cpus().length > 1,
	// webpack-dev-server 相关配置
	devServer: {
		// open: process.platform === "darwin",
		// disableHostCheck: true,
		// host: "192.168.31.157", //如果是真机测试，就使用这个IP
		// port: 8080,
		// https: false,
		// hotOnly: false,
		// before: () => {},
	},
};
