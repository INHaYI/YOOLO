<template>
    <div class="liorder">
        <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: start;">
            <div>
                <div class="name">{{ orders.shopname }}</div>
                <div class="allname">{{ orders.shopallname }}</div>
            </div>
            <div class="taxIncluded">
                含税: {{ orders.shoptax === "1" ? "含" : "否" }}
                <div class="logisticsTitle">物流信息:
                    <div class="logistics">顺丰</div>
                </div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; justify-content: center; align-items: end;">
            <div class="date">{{ orders.transactionDate }}</div>
            <div class="order">
                <div class="order_q">
                    交易单数
                    <span>{{ orders.quotationsCount }}</span>
                    单
                </div>
                <div class="order_d">
                    成交单数
                    <span>{{ orders.dealCount }}</span>
                    单
                </div>
            </div>
            <div class="money">¥<span>{{ orders.amount }}</span></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, toRefs, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios';

//声明路由
const router = useRoute()

//路由传值-接收
// const { query } = toRefs(router)

//路由传值-发送
const propsd = defineProps({
    orders: {
        type: Array,
        required: true,
    },
});



//变量检测
// watch(query, (newQuery) => {
// });

//组件注册
onMounted(() => {

})

</script>

<style scoped>
.liorder {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
    justify-content: space-between;
    font-family: Arial, sans-serif;
}

.name {
    font-size: 17px;
    font-weight: 900;
    color: #29327c;
}

.allname {
    font-size: 12px;
    color: #b6b6b6;
    font-weight: 400;
    white-space: nowrap;
}

.date {
    font-size: 12px;
    color: #b6b6b6;
    font-weight: 400;
    white-space: nowrap;
}

.taxIncluded {
    font-size: 11px;
    font-weight: 200;
    color: #a13938;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}

.taxIncluded .logisticsTitle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.taxIncluded .logisticsTitle .logistics {
    padding: 1px 10px;
    background-color: #20a920;
    color: #fff;
    font-size: 9px;
    border-radius: 15px;
    margin-left: 5px;
}

.order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    margin: 6px 0;
}

.order_q {
    font-size: 10px;
    font-weight: 200;
    color: #e1a77d;

}

span {
    font-size: 15px;
    font-weight: 300;
    color: #9f1811;
}

.order_d {
    font-size: 10px;
    font-weight: 200;
    color: #6fcb63;
}

.money {
    font-size: 13px;
    font-weight: 200;
    color: #e05252;
}

.money span {
    font-size: 18px;
    font-weight: 500;
    color: #e60808;
    margin-left: 2px;
}
</style>