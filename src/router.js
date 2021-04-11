import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/modules/home";
import Other from "@/modules/other";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
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
