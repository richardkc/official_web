// import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

// const router = createRouter({
// 	history: createWebHashHistory(),
// 	routes: [
// 		{
// 			path: "/",
// 			name: "HelloWorld",
// 			component: HelloWorld,
// 		},
// 	],
// });

// export default router;

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "HelloWorld",
		component: HelloWorld,
	},
];

const router = createRouter({
	history: createWebHashHistory(),

	routes,
});

export default router;
