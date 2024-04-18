<template>
    <el-container class="trade-recordsviewContent">
        <slot></slot>
    </el-container>
</template>

<script setup>

</script>

<style scoped>
.trade-recordsviewContent {

    /* 高度设置为视窗高度减去期望的上下边距 */
    height: calc(100vh - 4.5rem - 30px);
    width: 100%;
    background-color: #ffffff;
    overflow-y: auto;

    /* margin-right: 30vw; */

    box-sizing: border-box;

    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 0 7px;
}
</style>