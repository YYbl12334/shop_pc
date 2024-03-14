import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import layout from '@/layout/Index.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: layout
        },
        {
            path: '/HomeView',
            name: 'HomeView',
            component: HomeView
        },

    ]
})

export default router
