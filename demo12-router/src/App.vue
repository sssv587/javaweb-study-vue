<script setup>

</script>

<template>
    <div>
        App 开头的内容 <br>
        <router-link to="/home">home</router-link> <br>
        <router-link to="/list">list</router-link> <br>
        <router-link to="/update">update</router-link> <br>
        <router-link to="/add">add</router-link> <br>
        <router-link to="/showAll">showAll</router-link> <br>
        <!-- a标签不可以用 -->
        <!-- <a href="add">add</a> <br>
        <a href="home">home</a> <br>
        <a href="update">update</a> <br>
        <a href="list">list</a> <br> -->
        <hr>
        <!-- 该标签会被替换成具体的.vue 
             一个视图上是可以同时存在多个router-view
             每个router-view都可以设置专门用于展示哪个组件
        -->

        <router-view></router-view>
        <!-- 一般来说,一个.vue几乎只会用一个router-view标签就可以满足99%的业务要求 -->
        <hr>
        home页<router-view name="homeView"></router-view>
        <hr>
        list页<router-view name="listView"></router-view>
        <hr>
        add页<router-view name="addView"></router-view>
        <hr>
        update页<router-view name="updateView"></router-view>
        <hr>
        App 结尾的内容
    </div>
</template>

<style scoped></style>
