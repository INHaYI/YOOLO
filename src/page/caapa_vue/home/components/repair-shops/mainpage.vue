<template>
    <el-container>
        <el-header height="50px" style="padding: 0;">
            <cpHeader v-model="selectedValue" @change="handleHeaderChange"></cpHeader>
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
                        <input class="input" placeholder="查询汽修厂" type="text">
                        <button class="reset" type="reset">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12">
                                </path>
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
                <div class="tools">

                    <button @click="add">
                        <svg t="1709463151775" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7491" width="200" height="200">
                            <path
                                d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m0 73.142857C323.486476 170.666667 170.666667 323.486476 170.666667 512s152.81981 341.333333 341.333333 341.333333 341.333333-152.81981 341.333333-341.333333S700.513524 170.666667 512 170.666667z m36.571429 89.697523v229.86362h160.865523v73.142857H512a36.571429 36.571429 0 0 1-36.571429-36.571429V260.388571h73.142858z"
                                p-id="7492" fill="#2c2c2c"></path>
                        </svg>
                        录入修理厂
                    </button>
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
                <div v-if="selectedValue === 'value-1'" class="content-wrapper">
                    <cpList :nayigationselect="nayigationselect" :shops="shopData"></cpList>
                </div>
                <div v-else-if="selectedValue === 'value-2'" class="content-wrapper">
                    <cpItem :shops="shopData"></cpItem>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import cpHeader from './mainhead.vue'
import cpList from './list.vue'
import cpItem from './item.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const selectedValue = ref('value-1');
const nayigationselect = ref("0");
import { ElMessage } from 'element-plus'

import axios from 'axios'
function shopLoad() {
    const token = localStorage.getItem('token');
    axios.post('http://47.109.74.143:8085/api/shop/shopcx', {
        mode: 1
    }, {
        headers: {
            Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
        }
    }).then((response) => {
        shopData.value = response.data
        // const shopData = response.data;
        console.log('Shop data:', response);
    })
}
const shopData = ref([]);


function handleHeaderChange(event) {
    selectedValue.value = event.target.value;
}

function add() {
    const token = localStorage.getItem('token');
    axios.get('http://47.109.74.143:8085/api/user/info', {
        headers: {
            Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
        }
    }).then((response) => {
        if (response.data.code === 20000) {
            if (response.data.data.info.position === 6) {
                router.push('/list/shops/add');
                nayigationselect.value = String(Number(nayigationselect.value) + 1);
            } else {
                open4();
            }

        } else {
            open4();
        }
    })
}

const open1 = () => {
    ElMessage({
        message: '登陆成功',
        type: 'success',
        plain: true,
    })
}
const open4 = () => {
    ElMessage({
        message: '无权限',
        type: 'error',
        plain: true,
    })
}

import { onMounted } from 'vue'

onMounted(() => {
    shopLoad();
})

</script>

<style>
.content-wrapper {
    width: 100%;
    height: calc(100vh - 155px);
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

.search:focus-within {
    border-radius: var(--after-border-radius);
}

input:focus {
    outline: none;
}

.search:focus-within:before {
    transform: scale(1);
}

.reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
}

input:not(:placeholder-shown)~.reset {
    opacity: 1;
    visibility: visible;
}

.search svg {
    width: 17px;
    margin-top: 3px;
}

.ctrlshop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
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

.ctrlshop .tools button .icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.ctrlshop .tools button .icon path {
    fill: #5c5c5c;
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

.ctrlshop .tools .shuaxin .icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.ctrlshop .tools .shuaxin .icon path {
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