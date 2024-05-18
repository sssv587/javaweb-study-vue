<script setup>
import { useRouter } from 'vue-router'

let username = window.sessionStorage.getItem('username')

const router = useRouter()

function logout() {
  // 1、清除sessionStorage中的用户登录的信息
  window.sessionStorage.removeItem('username')
  // 2、跳转到login视图
  router.push("/login")
}
</script>

<template>
  <div>
    <h1>home页面</h1>
    <h3>欢迎 {{ username }} 登录</h3>
    <button @click="logout()">退出登录</button>
  </div>
</template>

<style scoped></style>
