<script setup>

</script>

<template>
    <el-main class="bg">
        <div class="bgs">
            <img src="../img/backstyle.jpg" alt="">
        </div>
        <slot></slot>
    </el-main>
</template>

<style>
.bg {
    margin: 0;
    padding: 0;
    height: calc(100vh - 5rem - 2px);
    font-family: Arial, sans-serif;
    background-color: #e6312d;
    background-image: radial-gradient(rgba(216, 28, 28, 0.743) 2px, transparent 0);
    background-size: 30px 30px;
    background-position: -5px -5px;
}

.bgs {
    position: fixed;
    /* 或 absolute，视需求而定 */
    top: 15vh;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}

.bg img {
    width: 115%;
    height: 85vh;
}
</style>
