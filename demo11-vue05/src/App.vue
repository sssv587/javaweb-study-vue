<script setup>
import { ref } from 'vue';
// 引入多个.vue组件
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Content from './components/Content.vue'

let menu = ref("")

function recevicer(data) {
    menu.value = data
}
</script>

<template>
    <div>
        <hr>
        <Header class="header"></Header>
        <Navigator @sendMenu="recevicer" class="navigator"></Navigator>
        <Content class="content" :message="menu"></Content>
    </div>
</template>

<style scoped>
.header {
    height: 80px;
    border: 1px solid red;
}

.navigator {
    width: 15%;
    height: 800px;
    border: 1px solid green;
    float: left;
}

.content {
    width: 83%;
    height: 800px;
    border: 1px solid blue;
    float: right;
}
</style>
