import { createRouter, createWebHashHistory } from "vue-router";
import FirstPage from "@/modules/firstPage.vue";
import Other from "@/modules/other.vue";

const routes = [
	{
		path: "/",
		name: "FirstPage",
		component: FirstPage,
	},
	{
		path: "/other",
		name: "Other",
		component: Other,
	},
];

const router = createRouter({
	history: createWebHashHistory(),

	routes,
});

export default router;
