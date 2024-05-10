<script setup>
import { ref, reactive, watch, watchEffect } from "vue"


let fullname = ref("")
let firstname = ref("李")
let lastname = reactive({
    name: "小花"
})

// watch函数监听一个ref的响应式数据
// watch(firstname, (newValue, oldValue) => {
//     console.log(oldValue + "--->" + newValue)
//     fullname.value = newValue + lastname.name
// })

// watch函数监听一个reactive的响应式数据  专门监听reactive响应式数据中的一个属性
// watch(函数返回要监听的响应式数据,处理函数)
// watch(() => {
//     return lastname.name
// }, (newValue, oldValue) => {
//     console.log(oldValue + "--->" + newValue)
//     fullname.value = firstname.value + newValue
// })

// watch(() => lastname.name, (newValue, oldValue) => {
//     // newValue和oldValue都一样,都是lastname
//     fullname.value = firstname.value + lastname.name
// }, { deep: true, immediate: true })

// 任何的响应式数据,如果想监听,直接监听即可,无需将要监听的响应式数据作为参数
watchEffect(() => {
    fullname.value = firstname.value + lastname.name
})

// 其实双向绑定也可以实现
let username = ref("")
let userPwd = ref("")
</script>

<template>
    <div>
        姓氏:<input type="text" v-model="firstname"> <br>
        名字:<input type="text" v-model="lastname.name"> <br>
        全名: {{ fullname }}

        <br> <br>
        <!-- 双向绑定实现 -->
        <input type="text" v-model="username"> <br>
        <input type="text" v-model="userPwd"> <br>
        {{ username + userPwd }}
    </div>
</template>

<style scoped></style>