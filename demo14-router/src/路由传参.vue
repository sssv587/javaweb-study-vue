<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function showDetail(id, language) {
  // router.push(`/showDetail/${id}/${language}`)
  router.push({ path: `/showDetail/${id}/${language}` })
}

function showDetail2(param_id, param_language) {
  // router.push(`/showDetail2?id=${id}&language=${language}`)
  router.push({ path: '/showDetail2', query: { id: param_id, language: param_language } })
}
</script>

<template>
  <div>
    <router-link to="/showDetail/1/java">声明式路由路径传参</router-link> <br>
    <button @click="showDetail(2, 'PHP')">编程式路由路径传参</button> <br>
    <hr>
    <router-link to="/showDetail2?id=1&language=java">声明式路由键值对传参</router-link> <br>
    <router-link v-bind:to="{ path: '/showDetail2', query: { id: 2, language: 'php' } }">声明式路由键值对传参</router-link> <br>
    <button @click="showDetail2(3, 'Python')">编程式路由键值对传参</button> <br>
    <router-view></router-view>
    <hr>
  </div>
</template>

<style scoped></style>
