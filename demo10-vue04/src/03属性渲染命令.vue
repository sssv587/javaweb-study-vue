<script setup>
/*
  属性渲染命令
  v-bind 将数据绑定到元素的属性上
  v-bind 属性名="数据名"
  :属性名="数据名"
*/
const data = {
  logo: "https://www2.jiumodiary.com/images/front/eleps.png",
  name: "好看的图片",
  url: "http://www.baidu.com"
}
</script>

<template>
  <div>
    <a :href="data.url">
      <img v-bind:src="data.logo" v-bind:title="data.name">
    </a>
  </div>
</template>

<style scoped></style>