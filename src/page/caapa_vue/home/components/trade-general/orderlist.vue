<template>
    <ul class="trade-generalul">
        <div class="lineul"></div>
        <div class="contentul">
            <div class="datetitle">{{ ordergroup.date }}</div>
            <li v-for="(orders, index) in ordergroup.transactionsAlls">
                <cporder :orders="orders"></cporder>
            </li>
        </div>
    </ul>
</template>

<script setup>
import cporder from './order.vue'
import { ref, onMounted, watch, toRefs, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios';

//声明路由
const router = useRoute()




//路由传值-接收
// const { query } = toRefs(router)

// 路由传值 - 发送
const props = defineProps({
    ordergroup: {
        type: Array,
        required: true,
    },
});



//变量检测
//watch(query, (newQuery) => {
//});

//组件注册
onMounted(() => {

})

</script>

<style scoped>
.trade-generalul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    width: 100%;
    height: auto;
    padding: 0;
    /* 移除默认的padding */
    margin-bottom: 30px;
    position: relative;
    font-family: Arial, sans-serif;
}

.trade-generalul .lineul {
    height: 100%;
    position: absolute;
    left: 0;
    width: 8px;
    background-color: #2c399d;
    margin-left: 40px;
    margin-right: 15px;
    border-radius: 8px;
}

.trade-generalul .contentul {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-left: 63px;
    margin-right: 10px;
}

.trade-generalul .contentul .datetitle {
    width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 900;
    color: #2c399d;
}

.trade-generalul .contentul li {
    width: 100%;
    height: 110px;
    background-color: #fffbfb;
    /* 设置背景色为白色 */
    border: 0.1px solid #e0e0e0;
    /* 设置边框为黑色 */
    padding: 15px 30px;
    /* 在列表项内部添加一些空间 */
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    box-sizing: border-box;
}

@media (max-width: 1024px) {
    .trade-generalul .lineul {
        height: 100%;
        position: absolute;
        left: 0;
        width: 8px;
        background-color: #2c399d;
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 8px;
    }

    .trade-generalul .contentul {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 100%;
        margin-left: 35px;
        margin-right: 10px;
    }
}
</style>