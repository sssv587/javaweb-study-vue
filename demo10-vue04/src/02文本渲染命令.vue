<script setup>
/*
  v-text v-text 不识别html结构的文本 innerText
  v-html 识别文本中的html代码的命令 innerHTML
  {{}} 插值表达式
  v-*** vue的指令
1、命令必须依赖标签,在开始标签中使用
*/
let msg = "hello vue3"
/* 命令支持字符串模板 */
let haha = "haha"
let msg2 = `hello ${haha}`
/* 命令中支持常见的运算符 */
let age = 19
/* 命令中支持常见对象的API的调用 */
let bee = "蜜 蜂"
/* 命令中支持常见函数的调用 */
let getMsg = () => {
  return "hello"
}
let fontMsg = "<font color='red'>你好</font>"
</script>

<template>
  <div>
    <h1 v-text="msg"></h1>
    <h1 v-text="msg2"></h1>
    <h1 v-text="`nihao ${msg2}`"></h1>
    <h1 v-text="age >= 18 ? '成年' : '未成年'"></h1>
    <h1 v-text="bee.split(' ').reverse().join('-')"></h1>
    <h1 v-text="getMsg()"></h1>
    <h1 v-html="fontMsg"></h1>
    <font color="red">你好</font>
  </div>
</template>

<style scoped></style>