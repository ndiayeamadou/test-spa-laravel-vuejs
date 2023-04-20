import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/pages/home.vue'
import About from '../components/pages//about.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
