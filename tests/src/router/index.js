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
            children: [
                {
                    path: '',
                    name: 'dashboard.index',
                    component: () => import('../views/DashboardIndex.vue')
                },
                {
                    path: 'table',
                    name: 'dashboard.table',
                    component: () => import('../views/DashboardTable.vue')
                },
                {
                    path: 'template',
                    name: 'dashboard.template',
                    children: [
                        {
                            path: 'test',
                            name: 'dashboard.template.test',
                            component: () => import('../views/DashboardTemplateTest.vue')
                        }
                    ]
                }
            ]
        }
    ]
})

export default router
