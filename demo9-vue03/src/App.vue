<script setup>
import { ref } from 'vue'
// 定义一些要展示到html上的一些数据  变量/对象
/*
  响应式数据:在数据变化时,vue框架会将变量最新的值更新到dom树中,页面数据就是实时最新的
  非响应式数据:在数据变化时,vue框架不会将变量最新的值更新到dom树中,页面数据就不是实时最新的

  vue2中,数据不做特殊处理,默认就是响应式的
  vue3中,数据要经过ref /reactive函数的处理才是响应式的
          ref reactive函数是vue框架中给我们提供的方法,导入进来即可使用
  
  ref处理的响应式数据,在操作时需要注意
    在script标签中,操作ref的响应式数据需要通过.value的形式操作
    在template标签中,操作ref的响应式数据,无需使用.value的形式
*/

let counter = ref(1) // {value:1}

// 让counter 自增的方法
function counterIncr() {
  counter.value++
}
// 让counter 自减的方法
function counterDecr() {
  counter.value--
}
// 显式counter值的方法
function showCounter() {
  alert(counter.value)
}
</script>

<template>
  <div>
    <button @click="counterDecr">-</button>
    <span v-text="counter"></span>
    <button @click="counterIncr">+</button>
    <button @click="showCounter">showCounter</button>
  </div>
</template>

<style scoped></style>
