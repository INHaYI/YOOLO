<template>
    <el-container>
        <el-header height="50px" style="padding: 0;">
            <cpHeader titled="凯配主页"></cpHeader>
        </el-header>
        <el-main>
            <el-carousel class="mo2" interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 text="2xl" justify="center">广告位</h3>
                </el-carousel-item>
            </el-carousel>
            <el-carousel class="mo1" :interval="4000" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 text="2xl" justify="center">广告位</h3>
                </el-carousel-item>
            </el-carousel>
            <el-space fill wrap :size="20" :fill-ratio="30" style="width: 100%; margin-top: 30px;">
                <el-card shadow="hover"
                    style="width: 50px; background-color: #fff0f1; height: calc(100vh - 4.5rem - 2px - 28px - 50px - 30px - 200px - 45px); border-radius: 5px;">
                    <div
                        style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
                        广告位</div>
                </el-card>
                <el-card shadow="hover"
                    style="width: 50px; background-color: #fff0f1; height: calc(100vh - 4.5rem - 2px - 28px - 50px - 30px - 200px - 45px); border-radius: 5px;">
                    <div
                        style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
                        广告位</div>
                </el-card>
                <el-card shadow="hover"
                    style="width: 50px; background-color: #fff0f1; height: calc(100vh - 4.5rem - 2px - 28px - 50px - 30px - 200px - 45px); border-radius: 5px;">
                    <div
                        style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
                        广告位</div>
                </el-card>
            </el-space>
        </el-main>
    </el-container>
</template>

<script setup>
import cpHeader from "../guheader.vue"
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;


}

.mo1 {
    display: none;
}

@media (max-width: 1024px) {
    .mo2 {
        display: none;
    }

    .mo1 {
        display: block;
    }
}
</style>