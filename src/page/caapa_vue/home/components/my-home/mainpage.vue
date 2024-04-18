<template>
    <el-container>
        <el-header height="50px" style="padding: 0;">
            <cpHeader titled="我的公司"></cpHeader>
        </el-header>
        <el-main style="font-family: Arial, sans-serif;">
            <el-card shadow="hover" style="width: 100%; height: 80px; border-radius: 5px; background-color: #fbfff9;">
                <p v-for="o in 1" :key="o" class="text item">{{ 'List item ' + o }}</p>
            </el-card>

            <div
                style="margin: 20px 0px; width: 100%; display: flex; flex-direction: row; align-items: center; justify-content: center;">
                <div style="margin-right: 20px;">

                    <el-card shadow="hover" body-style="height: calc(100% - 40px);"
                        style="margin-bottom: 20px; width: 230px; height: calc((100vh - 4.5rem - 30px - 50px - 80px - 80px - 130px - 20px) / 2); border-radius: 15px;">
                        <div class="demo-progress"
                            style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                            <el-progress type="dashboard" :stroke-width="15" :percentage="70" :color="colors" />
                            <div></div>
                        </div>
                    </el-card>

                    <el-card shadow="hover" body-style="height: calc(100% - 40px);"
                        style="width: 230px; height: calc((100vh - 4.5rem - 30px - 50px - 80px - 80px - 130px - 20px) / 2); border-radius: 15px;">
                        <div class="demo-progressd">
                            <div>月交易额比对</div>
                            <el-progress :text-inside="true" :stroke-width="15" :percentage="70" />
                            <el-progress :text-inside="true" :stroke-width="15" :percentage="100" status="success" />
                            <el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="warning" />
                            <el-progress :text-inside="true" :stroke-width="15" :percentage="50" status="exception" />
                        </div>
                    </el-card>
                </div>
                <el-card shadow="hover"
                    style="width: 900px; height: calc(100vh - 4.5rem - 30px - 50px - 80px - 80px - 130px); border-radius: 15px;">
                    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
                </el-card>
            </div>

            <el-space fill wrap :size="20" :fill-ratio="20" style="width: 100%;">
                <el-card shadow="hover" style="background-color: #fff0f1; height: 120px; border-radius: 5px;">
                    <p v-for="o in 2" :key="o" class="text item">{{ 'List item ' + o }}</p>
                </el-card>
                <el-card shadow="hover" style="background-color: #fff0f1; height: 120px; border-radius: 5px;">
                    <p v-for="o in 2" :key="o" class="text item">{{ 'List item ' + o }}</p>
                </el-card>
                <el-card shadow="hover" style="background-color: #fff0f1; height: 120px; border-radius: 5px;">
                    <p v-for="o in 2" :key="o" class="text item">{{ 'List item ' + o }}</p>
                </el-card>
                <el-card shadow="hover" style="background-color: #fff0f1; height: 120px; border-radius: 5px;">
                    <p v-for="o in 2" :key="o" class="text item">{{ 'List item ' + o }}</p>
                </el-card>
            </el-space>
        </el-main>
    </el-container>
</template>

<script setup>
import cpHeader from "../guheader.vue"
import { ref } from 'vue'
import { onMounted } from 'vue'


const percentage2 = ref(0)

const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]

onMounted(() => {
    setInterval(() => {
        percentage2.value = (percentage2.value % 100) + 10
    }, 500)
})


</script>

<style scoped>
.demo-progress .el-progress--line {
    /* margin-bottom: 15px; */
    max-width: 600px;
}

.demo-progressd {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.demo-progressd .el-progress--line {


    max-width: 600px;
}
</style>