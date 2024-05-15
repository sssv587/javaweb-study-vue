<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
let myPath = ref("")

function showList() {
  // 编程式路由实现页面的跳转
  // router.push("/list")
  router.push({ path: "/list" })
}

function goMyPage() {
  router.push(myPath.value)
}
</script>

<template>
  <div>
    <!-- 声明式路由 -->
    <router-link to="/home">home</router-link> <br>
    <router-link to="/add">add</router-link> <br>
    <router-link to="/list">list</router-link> <br>
    <router-link to="/update">update</router-link> <br>
    <!-- 编程式路由 -->
    <!-- <button @click="showList">list</button> -->
    <button @click="goMyPage()">Go</button>
    <input type="text" v-model="myPath">
    <hr>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
