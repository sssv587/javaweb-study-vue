<script setup>
import { ref, reactive } from "vue";

/*
单项绑定 v-bind  响应式数据发生变化时,更新dom树 用户的操作如果造成页面内容的改变不会影响响应式数据
双向绑定 v-model 页面上的数据由于用户的操作造成了改变,也会同步修改对应的响应式数据
        双向绑定一般都用于表单标签
        双向绑定也有人称呼为收集表单信息的命令
        v-model:value="数据"  双向 绑定
        v-model:value 一般都省略 :value
*/
let message = ref("zhangsan")

let user = reactive({
    username: "",
    userPwd: "",
    intro: "",
    pro: ""
})
let hbs = ref([])

function clearForm() {
    user.username = ""
    user.userPwd = ""
    user.intro = ""
    user.pro = ""
    hbs.value.splice(0, hbs.value.length)
}
</script>

<template>
    <div>
        <!-- <input type="text" v-bind:value="message">
        <input type="text" v-model="message">
        {{ message }} -->

        <input type="text" v-model="user.username"> <br>
        <input type="password" v-model="user.userPwd"> <br>
        爱好:
        唱 <input type="checkbox" v-model="hbs" value="sing">
        跳 <input type="checkbox" v-model="hbs" value="dance">
        rap <input type="checkbox" v-model="hbs" value="rap">
        <br>
        简介:<textarea v-model="user.intro"></textarea>
        <br>
        籍贯:
        <select v-model="user.pro">
            <option value="1">京</option>
            <option value="2">津</option>
            <option value="3">冀</option>
        </select>
        <br>
        <button @click="clearForm()">清空</button>
        <br>
        {{ user }} <br>
        {{ hbs }}
    </div>
</template>

<style scoped></style>