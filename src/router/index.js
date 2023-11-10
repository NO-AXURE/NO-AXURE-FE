import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue"
import DetailView from "@/views/DetailView.vue"
import TodayView from "@/views/TodayView.vue"
import AllView from "@/views/AllView.vue"
import CanvusView from "@/views/CanvusView.vue"
const router = createRouter({
    history : createWebHistory(),
    routes : [
        { path: "/", name: "homeView", component: HomeView },
        { path: "/detail", name : "detail", component: DetailView},
        { path: "/all", name : "all", component: AllView},
        { path: "/today", name: "today", component: TodayView },
        { path: "/canvus", name: "canvus", component: CanvusView },
    ]
});

export default router;