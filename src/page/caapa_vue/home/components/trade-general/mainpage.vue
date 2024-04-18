<template>
    <el-container>
        <el-header height="50px" style="padding: 0;">
            <cpHeader titled="交易记录总揽"></cpHeader>
        </el-header>
        <el-container>
            <el-header height="auto" class="ctrlshop">
                <div class="searchblock">
                    <form class="search">
                        <button type="submit">
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-labelledby="search">
                                <path
                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                    stroke="currentColor" stroke-width="1.333" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <input class="input" placeholder="查询交易记录" type="text">
                        <button class="reset" type="reset">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </form>
                    <div class="searchbutton">
                        <svg t="1709534413125" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8609" width="200" height="200">
                            <path
                                d="M465.334857 146.285714c176.201143 0 319.024762 145.091048 319.024762 324.096a325.973333 325.973333 0 0 1-65.560381 196.827429L877.714286 828.611048 829.366857 877.714286l-157.647238-160.182857a314.855619 314.855619 0 0 1-206.384762 76.921904C289.133714 794.453333 146.285714 649.386667 146.285714 470.381714S289.133714 146.285714 465.334857 146.285714z m0 69.436953c-138.459429 0-250.684952 114.029714-250.684952 254.659047 0 140.629333 112.225524 254.634667 250.684952 254.634667 138.435048 0 250.660571-114.005333 250.660572-254.634667 0-140.629333-112.225524-254.659048-250.660572-254.659047z"
                                p-id="8610"></path>
                        </svg>
                        查询
                    </div>
                </div>
                <div class="tool_block">
                    <div class="tools">
                        <button @click="() => orderLoad(1)" :class="{ selected: isActive(1) }">
                            <svg t="1711633389969" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1429" width="200" height="200">
                                <path
                                    d="M839.2 85H185.3c-37.7 0-71.3 26.9-71.3 61.5v730.3c0 34.6 33.5 61.5 71.3 61.5h653.9c37.7 0 71.3-26.9 71.3-61.5V146.5c-0.1-34.6-33.6-61.5-71.3-61.5zM635.8 688.9h-28.3v-29.5H423.9v29.9H396V350.5h239.8v338.4z"
                                    fill="#68E261" p-id="1430"></path>
                                <path d="M423.9 377.7h183.5v110.6H423.9zM423.9 515.4h183.5v116.8H423.9z" fill="#68E261"
                                    p-id="1431"></path>
                            </svg>
                            日交易
                        </button>
                        <button @click="() => orderLoad(3)" :class="{ selected: isActive(3) }">
                            <svg t="1711633455773" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1717" width="200" height="200">
                                <path
                                    d="M839.2 85H185.3c-37.7 0-71.3 26.9-71.3 61.5v730.3c0 34.6 33.5 61.5 71.3 61.5h653.9c37.7 0 71.3-26.9 71.3-61.5V146.5c-0.1-34.6-33.6-61.5-71.3-61.5zM633.4 653.9c0 22.1-11.3 33.4-33 33.4h-50.1l-7.8-27.5c17.8 0.8 34.1 1.6 48.9 1.6 8.9 0 13.6-5.8 13.6-17.1V567H437.9c-4.7 50.4-19.4 92-44.6 124.9L372 672.5c25.6-34.9 38.4-79.2 39.2-132.7V350.5h222.3v303.4z"
                                    fill="#69B3FA" p-id="1718"></path>
                                <path d="M439.4 377.3h165.7v67.9H439.4zM439.4 471.2h165.7V541H439.4z" fill="#69B3FA"
                                    p-id="1719"></path>
                            </svg>
                            月交易
                        </button>
                    </div>
                    <div class="shuaxin">
                        <svg t="1709534177267" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8449" width="200" height="200">
                            <path
                                d="M899.072 463.238095c1.999238 15.969524 3.023238 32.256 3.023238 48.761905 0 215.454476-174.640762 390.095238-390.095238 390.095238-103.862857 0-198.265905-40.594286-268.190476-106.788571V902.095238H170.666667l0.024381-170.666667L170.666667 658.285714h243.809523v73.142857h-131.169523c57.685333 60.123429 138.825143 97.52381 228.693333 97.52381 175.055238 0 316.952381-141.897143 316.952381-316.952381a319.390476 319.390476 0 0 0-3.730286-48.761905h73.874286zM853.333333 121.904762l-0.024381 170.666667L853.333333 365.714286H609.52381v-73.142857h131.193904A316.025905 316.025905 0 0 0 512 195.047619C336.944762 195.047619 195.047619 336.944762 195.047619 512c0 16.579048 1.26781 32.889905 3.730286 48.761905h-73.874286A393.947429 393.947429 0 0 1 121.904762 512c0-215.454476 174.640762-390.095238 390.095238-390.095238 103.862857 0 198.290286 40.618667 268.190476 106.812952V121.904762h73.142857z"
                                p-id="8450"></path>
                        </svg>
                        刷新
                    </div>
                </div>
            </el-header>
            <el-main style="margin: 0; padding: 0px;">
                <div class="tradespage">
                    <div class="content-wrapper">
                        <cporder v-for="(ordergroup, index) in orderData" :ordergroup="ordergroup"></cporder>
                    </div>
                    <div class="tradeinfo">111</div>
                </div>
            </el-main>
        </el-container>
    </el-container>

</template>

<script setup>
import cpHeader from "../guheader.vue"
import cporder from './orderlist.vue'

import { ref, onMounted, watch, toRefs, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios';

//声明路由
const router = useRoute();

const orderData = ref([]);

const nayigationselect = ref(1);

function isActive(routeName) {
    return nayigationselect.value === routeName;
}

function orderLoad(index) {
    const token = localStorage.getItem('token');
    nayigationselect.value = index
    axios.post('http://47.109.74.143:8085/api/transaction/cx', {
        mode: index
    }, {
        headers: {
            Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
        }
    }).then((response) => {
        orderData.value = response.data
    })
}

//组件注册
onMounted(() => {
    orderLoad(1);
})
</script>

<style scoped>
.tradespage {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    box-sizing: border-box;
}

.tradespage .tradeinfo {
    border: 0.1px solid #e0e0e0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
    width: 35%;
    height: calc(100vh - 278px);
    top: 0;
    background-color: #fff1f1;
    margin: 20px 30px;
    box-sizing: border-box;
}

.content-wrapper {
    width: calc(65% - 60px);
    height: calc(100vh - 235px);
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    overflow-y: scroll;
    /* 允许Y轴滚动 */
    scrollbar-width: none;
    /* 对Firefox隐藏滚动条 */
    -ms-overflow-style: none;
}



.content-wrapper::-webkit-scrollbar {
    display: none;
    /* 对Webkit浏览器隐藏滚动条 */
}

.trade-generalitemList {
    list-style-type: none;
    /* 移除列表项的默认标记 */
    padding: 0;
    /* 移除默认的padding */
    margin-top: 25px;
    padding-bottom: 100px;
}

.trade-generalitemList .item {
    background-color: #fffbfb;
    /* 设置背景色为白色 */
    border: 0.1px solid #e0e0e0;
    /* 设置边框为黑色 */
    padding: 10px 30px;
    /* 在列表项内部添加一些空间 */
    margin: 20px 35px;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
}

.trade-generalitemList .item .headn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
}

.trade-generalitemList .item .headn .shoptitle {
    font-size: 18px;
    font-weight: 900;
    color: #29327c;
}

.trade-generalitemList .item .headn .subtitle {
    font-size: 12px;
    color: #b6b6b6;
    font-weight: 400;
}

.trade-generalitemList .item .headn .owner {
    font-size: 10px;
    color: #d5d5d5;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    height: 25px;
}

.trade-generalitemList .item .contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.trade-generalitemList .item .contents .taxIncluded {
    font-size: 11px;
    font-weight: 200;
    color: #a13938;
}

.trade-generalitemList .item .contents .taxIncluded .logisticsTitle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.trade-generalitemList .item .contents .taxIncluded .logisticsTitle .logistics {
    padding: 1px 10px;
    background-color: #20a920;
    color: #fff;
    font-size: 9px;
    border-radius: 15px;
    margin-left: 5px;
}

.trade-generalitemList .item .contents .contact {
    font-size: 10px;
    font-weight: 200;
    color: #adadad;
    display: flex;
}

.trade-generalitemList .item .contents .contact .contact_title {
    margin-top: 5px;
}

.trade-generalitemList .item .contents .contact .contactcontent {
    background-color: #f8fff0;
    border-radius: 5px;
    padding: 5px 15px;
    text-align: right;
    margin-left: 8px;
    box-shadow: 0px 0px 2px rgba(44, 44, 44, 0.1);
    /* 给导航栏添加一点阴影，增加立体感 */
}

.trade-generalitemList .item .contents .contact .contactcontent div {
    margin-bottom: 3px;
}

.trade-generalitemList .item:hover {
    transform: scale(1.01);
    border: 0.5px solid #29327c;
    /* 设置边框为黑色 */
    background-color: #fff8f8;
}

.trade-generalitemList .item.selected {
    transform: scale(1.03);
    background-color: #fff1f1;
    /* 选中项的背景色 */
    border: 0.5px solid #29327c;
}

.ctrlshop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border: 0.1px solid #e0e0e0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: #fbfff9;
    position: relative;
    z-index: 4;
}

.ctrlshop .tool_block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.ctrlshop .tools {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.ctrlshop .tools button {
    font-size: 12px;
    padding: 5px 15px;
    background-color: white;
    border-radius: 5px;
    margin-right: 8px;
    color: #5c5c5c;
    border: 1px solid #d2d2d2;
    display: flex;
    align-items: center;
}

.ctrlshop .tools .selected {
    font-size: 12px;
    padding: 5px 15px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    margin-right: 8px;
    color: #000000;
    border: 1px solid #3d3d3d;
    display: flex;
    align-items: center;
}

.ctrlshop .tools button:hover {
    font-size: 12px;
    padding: 5px 15px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    margin-right: 8px;
    color: #000000;
    border: 1px solid #3d3d3d;
    display: flex;
    align-items: center;
}

.ctrlshop .tools button .icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.ctrlshop .tools button .icon path {
    fill: #5c5c5c;
}

.ctrlshop .tools button:hover .icon path {
    fill: #000000;
}

.ctrlshop .tools .shuaxin {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 5;
    color: #fff;
    background-color: #e14848;
    margin-left: 10px;
    margin-right: 0px;
    border-radius: 5px;
    border: 1px solid #d2d2d2;
}

.ctrlshop .tools .shuaxin:active {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 5;
    color: #fff;
    background-color: #ea8b8b;
    margin-left: 10px;
    margin-right: 0px;
    border-radius: 5px;
    border: 1px solid #d2d2d2;
}

.ctrlshop .tools .shuaxin:hover {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 5;
    color: #fff;
    background-color: #e14848;
    margin-left: 10px;
    margin-right: 0px;
    border-radius: 5px;
    border: 1px solid #d2d2d2;
}

.ctrlshop .tools .shuaxin .icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.ctrlshop .tools .shuaxin .icon path {
    fill: #ffffff;
}

.ctrlshop .tools .shuaxin:hover .icon path {
    fill: #ffffff;
}

.ctrlshop .searchblock {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.ctrlshop .searchblock .searchbutton {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 5;
    color: #fff;
    background-color: #5fa75f;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #d2d2d2;
}

.ctrlshop .searchblock .searchbutton .icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.ctrlshop .searchblock .searchbutton .icon path {
    fill: #ffffff;
}

.ctrlshop .shuaxin {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 5;
    color: #fff;
    background-color: #e14848;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #d2d2d2;
}

.ctrlshop .shuaxin .icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.ctrlshop .shuaxin .icon path {
    fill: #ffffff;
}

.search {
    --timing: 0.3s;
    --width-of-input: 190px;
    --height-of-input: 30px;
    --border-height: 2px;
    --input-bg: #ffffff;
    --border-color: #2c399d;
    --border-radius: 5px;
    --after-border-radius: 5px;
    position: relative;
    width: var(--width-of-input);
    height: var(--height-of-input);
    display: flex;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: var(--border-radius);
    transition: border-radius 0.5s ease;
    background: var(--input-bg, #ffffff);
    border: 1px solid #d2d2d2;
}

.search button {
    border: none;
    background: none;
    color: #8b8ba7;
}

.search .input {
    font-size: 0.8rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
}

@media (max-width: 1024px) {
    .content-wrapper {
        width: calc(100% - 10px);
        height: calc(100vh - 235px);
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        overflow-y: scroll;
        /* 允许Y轴滚动 */
        scrollbar-width: none;
        /* 对Firefox隐藏滚动条 */
        -ms-overflow-style: none;
    }


    .tradespage .tradeinfo {
        display: none;
        border: 0.1px solid #e0e0e0;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        position: relative;
        width: 35%;
        height: calc(100vh - 278px);
        top: 0;
        background-color: #fff1f1;
        margin: 20px 30px;
        box-sizing: border-box;
    }

    .ctrlshop .tools {
        display: none;
        justify-content: space-around;
        align-items: center;
    }

    .ctrlshop .searchblock .searchbutton {
        display: none;
        align-items: center;
        padding: 5px 10px;
        font-size: 12px;
        font-weight: 5;
        color: #fff;
        background-color: #5fa75f;
        margin-left: 10px;
        border-radius: 5px;
        border: 1px solid #d2d2d2;
    }
}
</style>