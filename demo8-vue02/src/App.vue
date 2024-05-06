<script setup>
// 引入一个.vue组件
import Haha from './components/Haha.vue'
import Heihei from './components/Heihei.vue'

// import './style/test.css';
</script>

<template>
  <!-- 语法上,要求template只能有一个一级子标签 -->
  <div>
    <span class="s1">你好</span>
  </div>
</template>

/*
css 样式的导入方式
  1、在.vue文件中的style标签中
  2、将css样式保存到独立的css文件中,哪个.vue文件需要,就在哪里导入即可
     1.script标签中可以导入
     2.style标签中可以导入
  3、如果某个样式要在所有的.vue文件中生效,那么可以在main.js中导入
*/
<style scoped>
  /* @import './style/test.css'  */
</style>
