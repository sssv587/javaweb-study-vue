<script setup>
import { reactive, ref } from 'vue';
let pro = ref("产品")

let items = reactive([
    {
        id: "item1",
        message: "薯片"
    },
    {
        id: "item2",
        message: "可乐"
    },
    {
        id: "item3",
        message: "炸鸡"
    }
])

let carts = reactive([
    {
        name: "可乐",
        price: 3,
        number: 10
    },
    {
        name: "薯片",
        price: 6,
        number: 12
    },
    {
        name: "炸鸡",
        price: 12,
        number: 2
    }
])

// 计算购物车总金额的函数
function compute() {
    let total = 0
    for (let index in carts) {
        total += carts[index].price * carts[index].number
    }
    return total
}
// 从购物车中移除购物项的方法
function removeCart(index) {
    carts.splice(index, 1)
}
// 清空购物车的方法
function clearCart() {
    // 调用API清除
    carts.splice(0, carts.length)
    // carts = reactive([]) // 这个是不可以的,下面的carts还是指向原先的carts
} 
</script>

<template>
    <div>
        <h1>您的购物车信息如下:</h1>
        <table border="1px">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
            </thead>
            <!-- 当购物车中有购物项的时候展示这个tbody -->
            <tbody v-if="carts.length > 0">
                <tr v-for="(cart, index) in carts" :key="index">
                    <td v-text="index + 1"></td>
                    <td v-text="cart.name"></td>
                    <td v-text="cart.price"></td>
                    <td v-text="cart.number"></td>
                    <td v-text="cart.price * cart.number"></td>
                    <td>
                        <button @click="removeCart(index)">删除</button>
                    </td>
                </tr>
            </tbody>
            <!-- 当购物车中没有购物项的时候展示这个tbody -->
            <tbody v-else>
                <tr>
                    <td colspan="6">
                        购物车空了
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="clearCart()">一键清空购物车</button>
        购物车总金额 {{ compute() }} 元


        <hr>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.message }}
            </li>
            <li v-for="(item, index) in items" :key="item.id">
                {{ pro }} {{ index }} {{ item.message }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>