// 导入 创建路由对象需要使用的函数
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入.vue组件
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Update from '../components/Update.vue'
import Add from '../components/Add.vue'

// 创建一个路由对象
const router = createRouter({
    // history属性用于记录路由的历史
    history: createWebHashHistory(),
    // 用于定义多个不同的路径和组件之间的对应关系
    routes: [
        {
            path: "/",
            components: {
                homeView: Home
            }
        },
        {
            path: "/home",
            components: {
                default: Home,
                homeView: Home
            }
        },
        {
            path: "/list",
            components: {
                listView: List
            }
        },
        {
            path: "/add",
            components: {
                addView: Add
            }
        },
        {
            path: "/update",
            components: {
                updateView: Update
            }
        },
        {
            path: "/showAll",
            redirect: "/list"
        }
    ]
})

// 向外暴漏router
export default router