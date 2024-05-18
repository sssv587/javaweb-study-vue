<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let router = useRouter()

let username = ref('')
let password = ref('')

function login() {
  //获取用户名和密码 校验 用户名如果是root并且密码是123456则登录成功
  //登录成功则自动跳转到 /home
  //登录失败不跳转页面 提示
  // 传参：1、路由传参 2、组件传参(父子关系) 3、sessionStorage localStorage
  if (username.value == 'root' && password.value == '123456') {
    // 将用户名保存在浏览器上 sessionStorage localStorage
    window.sessionStorage.setItem("username", username.value)
    // 路由跳转 /home
    router.push("/home")
  } else {
    alert("用户名或者密码有误")
  }
}
</script>

<template>
  <div>
    账号: <input type="text" v-model="username"> <br>
    账号: <input type="password" v-model="password"> <br>
    <button @click="login()">登录</button>
  </div>
</template>

<style scoped></style>
