<template>
    <el-container :style="{ width: vw_value }" class="trade-recordscontrolContent">
        <slot></slot>

    </el-container>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    vw_value: {
        type: String,
        required: true, // 如果需要这个 prop 必须被传递，则设置为 true
        default: "40%", // 设置默认值，如果未提供该 prop，将使用默认值
    },
});
</script>

<style scoped>
.trade-recordscontrolContent {
    /* 高度设置为视窗高度减去期望的上下边距 */
    height: calc(100vh - 4.5rem - 30px);

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