// src/router/index.js

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import axios from 'axios'

const router = createRouter({
    // history: createWebHashHistory(),  // hash 模式
    history: createWebHistory(),  // history 模式
    routes: [
        {
            path: '/',
            name: 'home',
            component: defineAsyncComponent(() => import(`../views/login.vue`)),
            meta: {
                title: '登陆',
            },
            children: [
                {
                    path: '/ours',
                    name: 'ours',
                    component: () => import(`../page/caapa_vue/home/components/repair-shops/czmainpage.vue`),

                },
                {
                    path: '/team',
                    name: 'team',
                    component: () => import(`../page/caapa_vue/home/components/repair-shops/czmainpage2.vue`),

                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import(`../page/caapa_vue/login/page/pageregister.vue`),
                    children: [
                        {
                            path: '/register/select',
                            name: 'reselect',
                            component: () => import(`../page/caapa_vue/login/page/pageregsed.vue`),

                        },
                        {
                            path: '/register/info',
                            name: 'reinfo',
                            component: () => import(`../page/caapa_vue/login/page/pagereginfo.vue`),

                        },
                    ]
                },
                {
                    path: '/login',
                    name: 'login',
                    component: () => import(`../page/caapa_vue/login/page/pagelogin.vue`),

                },
            ]
        },
        {
            path: '/list',
            name: 'list',
            component: defineAsyncComponent(() => import(`../views/home.vue`)),
            meta: {
                title: '凯配',
                requiresAuth: true
            },
            children: [
                {
                    path: '/list/home',
                    name: 'lhome',
                    component: () => import(`../page/caapa_vue/home/page/supplier-home.vue`),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/list/my',
                    name: 'myhome',
                    component: () => import(`../page/caapa_vue/home/page/my-home.vue`),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/list/business',
                    name: 'lbusiness',
                    component: () => import(`../page/caapa_vue/home/page/business-orders.vue`),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/list/trade',
                    name: 'ltrade',
                    component: () => import(`../page/caapa_vue/home/page/trade-records.vue`),
                    meta: { requiresAuth: true },
                    children: [
                        {
                            path: '/list/trade/add',
                            name: 'add',
                            component: () => import(`../page/caapa_vue/home/components/trade-records/czmainpage.vue`),
                            meta: { requiresAuth: true },
                        },
                        {
                            path: '/list/trade/tax',
                            name: 'tax',
                            component: () => import(`../page/caapa_vue/home/components/trade-records/czmainpage2.vue`),
                            meta: { requiresAuth: true },
                        }
                    ]
                },
                {
                    path: '/list/general',
                    name: 'lgeneral',
                    component: () => import(`../page/caapa_vue/home/page/trade-general.vue`),
                    meta: { requiresAuth: true },

                },
                {
                    path: '/list/shops',
                    name: 'lshops',
                    component: () => import(`../page/caapa_vue/home/page/repair-shops.vue`),
                    children: [
                        {
                            path: '/list/shops/add',
                            name: 'shopadd',
                            component: () => import(`../page/caapa_vue/home/components/repair-shops/czmainpage.vue`),
                            meta: { requiresAuth: true },
                        },
                        {
                            path: '/list/shops/page',
                            name: 'shoppage',
                            component: () => import(`../page/caapa_vue/home/components/repair-shops/czmainpage2.vue`),
                            meta: { requiresAuth: true },
                        },
                        {
                            path: '/list/shops/tax',
                            name: 'shoptax',
                            component: () => import(`../page/caapa_vue/home/components/repair-shops/czmainpage3.vue`),
                            meta: { requiresAuth: true },
                        },
                    ]
                },
            ]
        },
        {
            path: '/*',
            redirect: '/',
        },
    ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // 检查路由是否需要认证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 检查是否存在 token，这里假设 token 存储在 localStorage 中
        const token = localStorage.getItem('token');

        if (!token) {
            // 如果没有 token，跳转到登录页
            next('/login');
        } else {
            // 如果有 token，允许访问
            axios.get('http://47.109.74.143:8085/api/user/info', {
                headers: {
                    Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
                }
            }).then((response) => {
                if (response.data.code === 20000) {
                    next();

                } else {
                    next('/login');
                }


            })

        }
    } else {
        // 如果路由不需要认证，直接允许访问
        next();
    }
});


router.afterEach((to, from) => {
    // console.log(to, from)
    console.log('afterEach')
})

export default router