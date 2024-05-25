/* 定义共享的pinia数据 */
import { defineStore } from 'pinia'

// 定义一个Person共享
export const definedPerson = defineStore(
    {
        id: "personPinia", // 当前数据的id 必须 全局唯一
        state: () => {
            return {//状态 其实就是响应式数据
                username: "zhangsan",
                age: 0,
                hobbies: ["唱歌", "跳舞"]
            }
        },
        getters: { // 专门定义一个获得数据 或者是 使用数据计算结果的一些函数,这里的函数不要修改数据
            getAge() {
                return this.age
            },
            getHobbiesCount() {
                return this.hobbies.length
            }
        },
        actions: { // 专门定义一些修改数据的函数
            doubleAge() {
                this.age = this.age * 2
            }
        }
    }
)