<template>
    <el-container :style="{ width: vw_value }">
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

<style scoped></style>