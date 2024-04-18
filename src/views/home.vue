<template>
    <div class="common-layout">

        <el-container style="background-color: #efedf7;">

            <!-- 头部 -->
            <el-header height="calc(4.5rem + 2px)" style="padding: 0px;">
                <cpHeader></cpHeader>
            </el-header>

            <el-container class="layout">
                <el-aside class="side" width="260px" style="padding: 14px 7px;">
                    <cpNavigation></cpNavigation>
                </el-aside>

                <el-main style="height: calc(100vh - 4.5rem - 2px); padding: 14px 0;">
                    <router-view></router-view>
                </el-main>

            </el-container>
            <!-- 页面 -->


        </el-container>

    </div>
</template>

<script setup>
import router from '@/router';
import cpHeader from '../page/caapa_vue/home/components/header.vue'
import cpNavigation from '../page/caapa_vue/home/components/navigation.vue'
</script>

<style scoped>
.layout {
    padding: 0px 20px;
}

@media (max-width: 1024px) {
    .layout {
        padding: 0px 0;
    }

    .side {
        display: none;
    }
}
</style>