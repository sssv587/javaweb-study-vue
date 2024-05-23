<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue';

let message = reactive({
  "code": 1,
  "content": "xxxx"
})

function getLoveWords() {
  // 发送get请求的方法
  // axios.get(url)
  // axios.get(url,{请求的其他信息})
  // axios.get(url,{params:{键值对参数},headers:{设置一些特殊的请求头}})
  // return axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
  // return axios.get(
  //   "https://api.uomg.com/api/rand.qinghua",
  //   {
  //     params: {
  //       format: "json",
  //       username: "zhangsan",
  //       userpwd: "lisi"
  //     },
  //     headers: {
  //       Accept: "application/json, text/plain, text/html/, */*"
  //     }
  //   }
  // )

  // axios.post(url,{要放入请求体中的JSON串},{请求的其他信息})
  // return axios.post(
  //   "https://api.uomg.com/api/rand.qinghua",
  //   {
  //     username: "zhangsan",
  //     userpwd: "lisi"
  //   },
  //   {
  //     params: {
  //       format: "json"
  //     },
  //     headers: {
  //       Accept: "application/json, text/plain, text/html/, */*"
  //     }
  //   }
  // )

  return axios.post(
    "https://api.uomg.com/api/rand.qinghua?format=json"
  )
}

async function getLoveMessage() {
  let { data } = await getLoveWords()
  Object.assign(message, data)
}
</script>

<template>
  <div>
    <h1 v-text="message.content"></h1>
    <button @click="getLoveMessage()">变</button>
  </div>
</template>

<style scoped></style>
