<script setup>
// 引入多个.vue组件
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Content from './components/Content.vue'
</script>

<template>
    <div>
        <Header class="header"></Header>
        <Navigator class="navigator"></Navigator>
        <Content class="content"></Content>
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
