<template>
    <div class="navigationBar">
        <nav>
            <ul>
                <li><a @click="goSupplier_home" :class="{ active: isActive('supplier-home') }">
                        <svg t="1708878110241" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8592" width="200" height="200">
                            <path
                                d="M543.134476 112.176762l316.952381 149.162667A73.142857 73.142857 0 0 1 902.095238 327.509333v91.257905h-68.851809V694.125714H902.095238v133.36381a73.142857 73.142857 0 0 1-73.142857 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857v-133.36381h68.827428V418.767238H121.904762v-91.257905a73.142857 73.142857 0 0 1 42.008381-66.169904l316.952381-149.162667a73.142857 73.142857 0 0 1 62.268952 0zM828.952381 767.292952H195.047619v60.220953h633.904762v-60.220953zM374.320762 418.767238h-110.445714v275.139048h110.421333V418.767238z m73.142857 0l-0.024381 275.139048h133.388191V418.767238h-133.36381zM512 178.371048L195.047619 327.509333v18.115048h633.904762v-18.115048L512 178.371048z m141.970286 515.535238h106.130285V418.767238h-106.105904l-0.024381 275.139048z"
                                p-id="8593" fill="#ffffff"></path>
                        </svg>
                        凯配主页
                    </a></li>
                <li><a @click="goMy_home" :class="{ active: isActive('my-home') }">
                        <svg t="1708878110241" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8592" width="200" height="200">
                            <path
                                d="M543.134476 112.176762l316.952381 149.162667A73.142857 73.142857 0 0 1 902.095238 327.509333v91.257905h-68.851809V694.125714H902.095238v133.36381a73.142857 73.142857 0 0 1-73.142857 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857v-133.36381h68.827428V418.767238H121.904762v-91.257905a73.142857 73.142857 0 0 1 42.008381-66.169904l316.952381-149.162667a73.142857 73.142857 0 0 1 62.268952 0zM828.952381 767.292952H195.047619v60.220953h633.904762v-60.220953zM374.320762 418.767238h-110.445714v275.139048h110.421333V418.767238z m73.142857 0l-0.024381 275.139048h133.388191V418.767238h-133.36381zM512 178.371048L195.047619 327.509333v18.115048h633.904762v-18.115048L512 178.371048z m141.970286 515.535238h106.130285V418.767238h-106.105904l-0.024381 275.139048z"
                                p-id="8593" fill="#ffffff"></path>
                        </svg>
                        供应商主页
                    </a></li>
                <li><a @click="goBusiness_orders" :class="{ active: isActive('business-orders') }">
                        <svg t="1708878195446" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8806" width="200" height="200">
                            <path
                                d="M877.738667 658.285714l51.321904 52.102096-198.948571 195.974095L609.52381 787.382857l51.370666-52.077714 69.266286 68.339809L877.738667 658.285714zM268.190476 146.285714h48.761905v73.118476L268.190476 219.428571v609.52381h314.051048l74.118095 73.142857H268.190476a73.142857 73.142857 0 0 1-73.142857-73.142857V219.428571a73.142857 73.142857 0 0 1 73.142857-73.142857z m487.619048 0a73.142857 73.142857 0 0 1 73.142857 73.142857l-0.024381 418.450286-73.142857 72.070095L755.809524 219.428571h-48.761905V146.285714h48.761905z m-219.428572 414.476191v73.142857h-195.047619v-73.142857h195.047619z m146.285715-146.285715v73.142858H341.333333v-73.142858h341.333334zM585.142857 73.142857a73.142857 73.142857 0 0 1 73.142857 73.142857v48.761905a73.142857 73.142857 0 0 1-73.142857 73.142857h-146.285714a73.142857 73.142857 0 0 1-73.142857-73.142857V146.285714a73.142857 73.142857 0 0 1 73.142857-73.142857h146.285714z m0 73.142857h-146.285714v48.761905h146.285714V146.285714z"
                                p-id="8807" fill="#ffffff"></path>
                        </svg>
                        业务接单
                    </a></li>
                <li><a @click="goTrade_records" :class="{ active: isActive('trade-records') }">
                        <svg t="1708862126850" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7748" width="200" height="200">
                            <path
                                d="M707.047619 438.857143a219.428571 219.428571 0 1 1 0 438.857143 219.428571 219.428571 0 0 1 0-438.857143z m-238.933333 97.499428c-11.605333 22.698667-20.089905 47.299048-24.844191 73.142858L268.190476 609.52381v146.285714h188.952381a267.995429 267.995429 0 0 0 43.032381 73.142857H268.190476a73.142857 73.142857 0 0 1-73.142857-73.142857v-146.285714a73.142857 73.142857 0 0 1 73.142857-73.142858l199.92381-0.024381zM707.047619 512a146.285714 146.285714 0 1 0 0 292.571429 146.285714 146.285714 0 0 0 0-292.571429z m32.889905 64.633905L739.913143 633.904762h57.295238v73.142857h-57.295238v57.270857h-73.142857V707.047619H609.52381v-73.142857h57.246476v-57.270857h73.142857zM755.809524 146.285714a73.142857 73.142857 0 0 1 73.142857 73.142857v146.285715c0 17.432381-6.095238 33.426286-16.262095 46.006857A267.142095 267.142095 0 0 0 707.047619 390.095238c-57.417143 0-110.616381 18.041905-154.233905 48.761905H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V219.428571a73.142857 73.142857 0 0 1 73.142857-73.142857h585.142857z m0 73.142857H170.666667v146.285715h585.142857V219.428571z"
                                p-id="7749" fill="#ffffff"></path>
                        </svg>
                        录入交易记录
                    </a></li>
                <li><a @click="goTrade_general" :class="{ active: isActive('trade-general') }">
                        <svg t="1708878021449" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8378" width="200" height="200">
                            <path
                                d="M649.679238 146.285714c38.034286 0 68.85181 30.72 68.85181 68.583619l-0.024381 525.702096h-68.827429V214.844952H190.756571v594.310096h642.486858v-457.142858l-68.827429-0.02438v-68.559239h68.827429c38.034286 0 68.85181 30.72 68.851809 68.583619v457.142858A68.705524 68.705524 0 0 1 833.243429 877.714286H190.756571A68.705524 68.705524 0 0 1 121.904762 809.130667V214.893714A68.705524 68.705524 0 0 1 190.756571 146.285714h458.922667z m-206.506667 342.869334v68.559238h-183.588571v-68.583619h183.588571z m137.679239-137.142858v68.559239H259.584v-68.583619h321.26781z"
                                p-id="8379" fill="#ffffff"></path>
                        </svg>
                        交易记录总览
                    </a></li>
                <li><a @click="goRepair_shops" :class="{ active: isActive('repair-shops') }">
                        <svg t="1708862304167" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8168" width="200" height="200">
                            <path
                                d="M639.829333 75.580952l145.066667 145.066667a73.142857 73.142857 0 0 1 0 103.448381L670.086095 438.857143h-103.448381l166.521905-166.473143-145.066667-145.066667L343.771429 371.614476 411.014095 438.857143h-103.448381l-15.506285-15.506286a73.142857 73.142857 0 0 1 0-103.448381L536.380952 75.605333a73.142857 73.142857 0 0 1 103.448381 0zM536.380952 268.190476a48.761905 48.761905 0 1 1 0 97.52381 48.761905 48.761905 0 0 1 0-97.52381z m243.809524 219.428572a73.142857 73.142857 0 0 1 73.142857 73.142857v268.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H243.809524a73.142857 73.142857 0 0 1-73.142857-73.142857V560.761905a73.142857 73.142857 0 0 1 73.142857-73.142857h536.380952z m-536.380952 73.142857v268.190476h536.380952V560.761905H243.809524z"
                                p-id="8169" fill="#ffffff"></path>
                        </svg>
                        汽修厂名单
                    </a></li>
            </ul>
        </nav>
    </div>

</template>

<script setup>

import { ref } from 'vue';
const nayigationselect = ref('supplier-home');

import { useRouter } from 'vue-router';
const router = useRouter()

function goSupplier_home() {
    router.push('/list/home')
    nayigationselect.value = "supplier-home"
}

function goMy_home() {
    router.push('/list/my')
    nayigationselect.value = "my-home"
}

function goBusiness_orders() {
    router.push('/list/business')
    nayigationselect.value = "business-orders"
}

function goTrade_records() {
    router.push('/list/trade/tax')
    nayigationselect.value = "trade-records"
}

function goTrade_general() {
    router.push('/list/general')
    nayigationselect.value = "trade-general"
}

function goRepair_shops() {
    router.push('/list/shops/page')
    nayigationselect.value = "repair-shops"
}


function isActive(routeName) {
    return nayigationselect.value === `${routeName}`;
}

import { onMounted } from 'vue'

onMounted(() => {
    goSupplier_home();
})
</script>

<style>
.navigationBar {
    width: 246px;
    height: calc(100vh - 4.5rem - 2px - 28px);
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.navigationBar nav ul {
    list-style-type: none;
    padding: 0;
}

.navigationBar nav ul li {
    padding: 10px;
}

.navigationBar nav ul li a {
    position: relative;
    /* 允许:before伪元素正确定位 */
    text-decoration: none;
    color: #565656;
    font-size: 15px;
    padding: 15px 5px 15px 25px;
    /* 更新左侧padding以留出空间给红色矩形 */
    display: block;
    border-radius: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
}

.navigationBar nav ul li a:before {
    content: '';
    display: block;
    position: absolute;
    left: 12px;
    top: 50%;
    width: 5px;
    height: 70%;
    background-color: #e6302de7;
    border-radius: 5px;
    transform: translateY(-50%) translateX(-10px);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.navigationBar nav ul li a.active:before {
    content: '';
    /* 伪元素需要content属性，即使没有内容 */
    display: block;
    position: absolute;
    left: 12px;
    /* 定位到a元素的最左侧 */
    top: 50%;
    /* 垂直居中 */
    width: 5px;
    /* 圆角矩形的宽度 */
    height: 70%;
    /* 圆角矩形的高度，根据需要调整 */
    background-color: #e6302de7;
    /* 圆角矩形的颜色 */
    border-radius: 5px;
    /* 轻微的圆角效果 */
    transform: translateY(-50%) translateX(-10px);
    /* 向左偏移，准备滑入 */
    opacity: 0;
    /* 初始不可见 */
    transition: opacity 0.3s ease, transform 0.3s ease;
    /* 过渡动画 */
}

.navigationBar nav ul li a .icon {
    width: auto;
    height: 20px;
    padding-right: 8px;
}

.navigationBar nav ul li a .icon path {
    fill: #565656;
    /* 红色 */
}

.navigationBar nav ul li a:hover {
    background-color: #2a327c;
    color: #fff;
    font-weight: 500;
    transition: background-color 0.2s ease, color 0.3s ease;
}

.navigationBar nav ul li a:hover .icon path {
    fill: #ffffff;
    /* 红色 */
}

.navigationBar nav ul li a.active {
    background-color: #2a327c;
    /* 被选中的选项背景色 */
    color: #fff;
    font-weight: 500;
}

.navigationBar nav ul li a.active .icon path {
    fill: #ffffff;
    /* 红色 */
}

.navigationBar nav ul li a.active:before {
    opacity: 1;
    /* 使伪元素可见 */
    transform: translateY(-50%) translateX(0);
    /* 取消偏移，完成滑入 */
}
</style>