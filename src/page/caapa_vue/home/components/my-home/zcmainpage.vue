<template>
    <el-container direction="vertical">
        <el-container style="height: calc(100vh - 4.5rem - 30px - 330px - 14px);" class="trade-recordscontrolContent">
            <company></company>
        </el-container>
        <el-container style="margin-top: 14px; height: 330px;" class="trade-recordscontrolContent">
            <el-header height="50px" style="padding: 0;">
                <cpHeader titled="成员列表"></cpHeader>
            </el-header>
            <member></member>
        </el-container>
    </el-container>
</template>

<script setup>
import member from './member.vue'
import company from './company.vue'
import cpHeader from "./guheader.vue"
</script>

<style scoped>
.trade-recordscontrolContent {
    /* 高度设置为视窗高度减去期望的上下边距 */

    /* width: 100%; */
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