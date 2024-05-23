<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue';

let message = reactive({
  "code": 1,
  "content": "xxxx"
})

function getLoveMessage() {
  // 使用axios发送请求获取土味情话
  // axios({设置请求参数}) 请求三要素 1、请求的url 2、请求的方式 3、请求的参数 keyvalue...
  let promise = axios({
    method: "post",
    url: "https://api.uomg.com/api/rand.qinghua",
    data: { //如果请求方式是get,需要通过params进行发送
      //如果请求方式是post,并且使用data,数据会以JSON形式放入请求体
      // 这里的数据会放入请求体,前提是请求方式得是post
    },
    params: {
      // 都是以键值对方式将数据放入url后
      format: "json",
      username: "zhangsan"
    }
  })

  // let promise = axios({
  //   method: "post",
  //   url: "https://api.uomg.com/api/rand.qinghua",
  //   data : {
  //     format: "json",
  //     username: "zhangsan"
  //   }
  // })

  promise.then(
    function (response) {
      console.log(response)
      /* 响应结果对象 
        data 服务端响应回来的数据
        status 响应状态码 200
        statusText 响应状态描述文字 OK
        headers 本次响应的所有响应头
        config 本次请求的配置信息
        request 本次请求发送时所使用的XMLHttpRequest对象
      */
      console.log(response.data)
      console.log(response.data.code)
      console.log(response.data.content)
      // Object.assign(对象,对象)  将后面的对象属性值赋值给前一个对象属性值
      Object.assign(message, response.data)
    }
  ).catch(
    function (error) {
      console.log(error)
    }
  )
}
</script>

<template>
  <div>
    <h1 v-text="message.content"></h1>
    <button @click="getLoveMessage()">变</button>
  </div>
</template>

<style scoped></style>
