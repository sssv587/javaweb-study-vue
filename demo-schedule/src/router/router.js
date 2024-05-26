import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './../components/Login.vue'
import Regist from './../components/Regist.vue'
import ShowSchedule from './../components/ShowSchedule.vue'

import pinia from '../pinia.js'
import { defineUser } from '../store/userStore.js'

let sysUser = defineUser(pinia)

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/showSchedule"
        },
        {
            path: "/showSchedule",
            component: ShowSchedule
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/regist",
            component: Regist
        }
    ]
})

// 路由的全局前置守卫 判断是否访问showSchedule
router.beforeEach((to, from, next) => {
    if (to.path == '/showSchedule') {
        // 登陆过放行
        if (sysUser.username == '') {
            next('/login')
        } else {
            next()
        }
        // 没登录回到登录页
    } else {
        next()
    }
})

export default router