<template>
    <div class="title">{{ titled }}</div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    titled: {
        type: String,
        required: true, // 如果需要这个 prop 必须被传递，则设置为 true
        default: "标题",
    },
});
</script>

<style scoped>
.title {
    width: 100%;
    /* 设置宽度为100% */
    background-color: #2a327c;
    /* 设置背景颜色为深蓝色 */
    text-align: left;
    /* 文字靠左边 */
    color: white;
    /* 设置文字颜色为白色，以便在深蓝色背景上能看清楚 */
    padding: 15px 30px;
    height: 50px;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Arial, sans-serif;
}
</style>