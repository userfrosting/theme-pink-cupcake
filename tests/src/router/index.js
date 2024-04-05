import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'page.index',
            component: () => import('../views/PageIndex.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard.index',
            component: () => import('../views/DashboardIndex.vue')
        },
        {
            path: '/dashboard/table',
            name: 'dashboard.table',
            component: () => import('../views/DashboardTable.vue')
        }
    ]
})

export default router
