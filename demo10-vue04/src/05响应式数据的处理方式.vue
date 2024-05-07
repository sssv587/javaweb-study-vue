<script setup>
import { ref, reactive, toRef, toRefs } from 'vue'
/*
  让一个普通数据转换为响应式数据 两种方式
  1、ref函数      更适合单个的变量
    在script标签中操作ref响应式数据要通过.value
    在template中操作ref响应式数据则无需.value
  2、reactive函数 更适合对象
    在script、template标签中操作reactive响应式数据都直接使用对象名.属性名的方式即可
*/
let counter = ref(10)

let person = reactive({
  name: "",
  age: 10
})
function incr() {
  counter.value++
}
function incrAge() {
  person.age++
  // alert(person.age)
}

// toRef函数    将reactive响应式数据中的某个属性转换为ref响应式数据
let pAge = toRef(person, 'age')
function incrPAge() {
  pAge.value++
}

// toRefs函数   同时将reactive响应式数据中的多个属性转换为ref响应式数据
let { name, age } = toRefs(person)
function incrPAge2() {
  age.value++
}
</script>

<template>
  <div>
    <button @click="incr()">+</button>
    <button @click="counter++">+</button>
    {{ counter }}
    <hr>
    <button @click="incrAge()">+</button>
    <button @click="person.age++">+</button>
    <button @click="incrPAge()">+</button>
    <button @click="incrPAge2()">+</button>
    {{ person.age }}
    {{ pAge }}
    {{ age }}
  </div>
</template>

<style scoped></style>