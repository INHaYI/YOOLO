<template>
    <div class="headersd">
        <div class="logo">
            <img src="../img/logo.jpg" alt="加载失败">
            <p>CAAPA</p>
            <el-menu class="el-menu-demo menu2" mode="horizontal" :ellipsis="true" @select="handleSelect"
                style="width: 20px;" router>
                <el-menu-item style="font-size: 20px; " index="/list/home">凯配主页</el-menu-item>
                <el-menu-item style="font-size: 20px;" index="/list/my">供应商主页</el-menu-item>
                <el-menu-item style="font-size: 20px;" index="/list/business">业务接单</el-menu-item>
                <el-menu-item style="font-size: 20px;" index="/list/trade/tax">录入交易记录</el-menu-item>
                <el-menu-item style="font-size: 20px;" index="/list/general">交易记录总览</el-menu-item>
                <el-menu-item style="font-size: 20px;" index="/list/shops/page">汽修厂名单</el-menu-item>

            </el-menu>
        </div>



        <tclogin></tclogin>

    </div>
    <div class="dline"></div>
</template>

<script setup>
import tclogin from './pushlogin.vue'
</script>

<style>
.el-menu-demo {
    background-color: #29327c;
    border-color: #29327c;
}

.el-menu--horizontal.el-menu {
    border-bottom: 0px solid var(--el-menu-border-color);
}

:root {
    --el-menu-active-color: #fff;
    --el-menu-text-color: #fff;
    --el-menu-hover-text-color: #ff0000;
    --el-menu-bg-color: #29327c;
    --el-menu-hover-bg-color: #29327c;
    --el-menu-item-height: 46px;
    --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
    --el-menu-horizontal-height: 50px;
    --el-menu-horizontal-sub-item-height: 26px;
    --el-menu-item-font-size: var(--el-font-size-base);
    --el-menu-item-hover-fill: #000;
    --el-menu-border-color: var(--el-border-color);
    --el-menu-base-level-padding: 20px;
    --el-menu-level-padding: 20px;
    --el-menu-icon-width: 24px;
}

.headersd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #29327c;
    padding: 0px 30px;
    /* padding-top: 10px; */
    color: black;
    height: 4.5rem;
    font-family: Arial, sans-serif;

}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo p {
    font-size: 35px;
    letter-spacing: 3px;
    position: absolute;
    color: #ffffff;
    margin-left: 250px;
    display: flexbox;
}

.logo img {
    /* border: 1px solid rgb(255, 255, 255); */
    filter: drop-shadow(0px 0px 3px #fff);
    width: 75px;
    /* 或者你希望的宽度 */
    height: auto;
    /* 高度自适应保持图片比例 */
}

.dline {
    height: 2px;
    background-color: #ffa1a1;
    width: 100%;
}

.menu2 {
    display: none
}

@media (max-width: 1024px) {
    .menu2 {
        display: flex;
    }

    .logo p {
        font-size: 35px;
        letter-spacing: 3px;
        position: absolute;
        color: #ffffff;
        margin-left: 250px;
        display: none;
    }
}
</style>