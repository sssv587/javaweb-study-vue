<script setup>

</script>

<template>
    <div>
        App 开头的内容 <br>
        <router-link to="/home">home</router-link> <br>
        <router-link to="/list">list</router-link> <br>
        <router-link to="/update">update</router-link> <br>
        <router-link to="/add">add</router-link> <br>
        <!-- a标签不可以用 -->
        <!-- <a href="add">add</a> <br>
        <a href="home">home</a> <br>
        <a href="update">update</a> <br>
        <a href="list">list</a> <br> -->
        <hr>
        <!-- 该标签会被替换成具体的.vue -->
        <router-view></router-view>
        <hr>
        App 结尾的内容
    </div>
</template>

<style scoped></style>
