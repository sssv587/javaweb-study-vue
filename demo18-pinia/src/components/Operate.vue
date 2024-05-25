<script setup>
// 导入pinia数据
import { definedPerson } from '../store/store.js'
let person = definedPerson()

</script>

<template>
    <div>
        <h1>用于修改pinia数据</h1>
        <hr>
        展示一下person中的数据 {{ person }}
    </div>
</template>

<style scoped></style>
