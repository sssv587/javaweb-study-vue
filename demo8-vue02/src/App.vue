<script setup>
// 引入一个.vue组件
import Haha from './components/Haha.vue'
import Heihei from './components/Heihei.vue'
</script>

<template>
  <!-- 语法上,要求template只能有一个一级子标签 -->
  <div>
    <h1 class="h1cla">hello vue</h1>
    <Haha></Haha>
    <Heihei></Heihei>
  </div>
</template>

<style scoped>
  .h1cla {
    color: aqua;
  }
</style>
