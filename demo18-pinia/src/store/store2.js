/* 定义共享的pinia数据 */
import { defineStore } from 'pinia'



// 定义一个Person共享
export const definedPerson = defineStore(
    {
        id: "" // 当前数据的id 必须 全局唯一
    }
)