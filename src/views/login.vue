<script setup>
import cpHeaderd from '../page/caapa_vue/login/components/header.vue'
import cpMain from '../page/caapa_vue/login/components/background.vue'
import page_login from '../page/caapa_vue/login/page/pagelogin.vue'
</script>

<template>
    <div class="common-layout">
        <el-container>

            <!-- 头部 -->
            <el-header class="header">
                <cpHeaderd></cpHeaderd>
            </el-header>

            <!-- 页面 -->
            <cpMain>
                <router-view></router-view>
            </cpMain>

        </el-container>
    </div>
</template>

<style scoped>
.common-layout {
    height: 100vh;
}

.header {
    padding: 0px;
    height: calc(5rem + 2px);
}

@media (max-width: 1024px) {
    .header {
        padding: 0px;
        height: calc(4rem + 2px);
    }
}
</style>