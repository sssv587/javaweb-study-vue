<script setup>
import request from './axios'
import { reactive, ref } from 'vue';

let message = reactive({
  "code": 1,
  "content": "xxxx"
})

function getLoveWords() {
  return request.post(
    "api/rand.qinghua?format=json"
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
