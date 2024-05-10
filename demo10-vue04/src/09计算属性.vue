<script setup>
import { reactive, computed } from "vue";

/*
 计算属性
*/
const author = reactive({
    name: "张三",
    books: ["java从入门到精通", "算法", "Mysql"]
})
// 通过方法返回数据 每使用一次 执行一次
function hasBooks() {
    console.log("hasbooks")
    return author.books.length > 0 ? "是" : "否"
}
// 通过计算属性获得数据 每次使用时,如果和上次使用时,数据没有变化,则直接使用上一次的结果
let bookMessage = computed(() => {
    console.log("bookMessage")
    return author.books.length > 0 ? "是" : "否"
})
</script>

<template>
    <div>
        <p>作者:{{ author.name }}</p>
        <!-- 会调用5次 -->
        是否出版过图书:{{ hasBooks() }} <br>
        是否出版过图书:{{ hasBooks() }} <br>
        是否出版过图书:{{ hasBooks() }} <br>
        是否出版过图书:{{ hasBooks() }} <br>
        是否出版过图书:{{ hasBooks() }} <br>
        <!-- 只会调用一次,适用于缓存复杂计算的结果 -->
        是否出版过图书:{{ bookMessage }} <br>
        是否出版过图书:{{ bookMessage }} <br>
        是否出版过图书:{{ bookMessage }} <br>
        是否出版过图书:{{ bookMessage }} <br>
        是否出版过图书:{{ bookMessage }} <br>
        
        是否出版过图书:{{ author.books.length > 0 ? "是" : "否" }} <br>
    </div>
</template>

<style scoped></style>