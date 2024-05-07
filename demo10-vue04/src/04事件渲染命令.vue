<script setup>
import { ref } from 'vue'
/*
  v-on:事件名称="函数名()"
  v-on:事件名称可以简写 @事件名
  原生js的事件名是 on*** onclick ondbclick onblur onfocus
  vue中的时间名称去掉on   click     dbclick  blur  focus
*/
function fun1() {
  alert("hi")
}
let counter = ref(1)
function fun2() {
  counter.value++
}
function fun3(event) {
  let flag = confirm("确定要访问目标链接吗?")
  if (!flag) {
    // 原生js编码方式阻止组件的默认行为
    event.preventDefault()
  }
}
function fun4(event) {
  alert("超链接被点击了")
}
</script>

<template>
  <div>
    <!-- 时间的绑定函数 -->
    <button v-on:click="fun1()">hello</button>
    <!-- 内联事件处理器 -->
    <button v-on:click="fun2()">+</button>
    <button v-on:click="counter++">+</button>
    <!-- 时间的修饰符 .once 时间只绑定一次 prevent 修饰符阻止组件的默认行为 -->
    <button v-on:click.once="counter++">+</button>
    {{ counter }}
    <br>
    <a href="http://www.baidu.com" v-on:click="fun3($event)">百度</a> <br>
    <a href="http://www.baidu.com" v-on:click.prevent="fun4($event)">百度</a>
  </div>
</template>

<style scoped></style>