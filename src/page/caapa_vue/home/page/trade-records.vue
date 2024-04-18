<template>
    <el-container>
        <maincard>
            <mainpage></mainpage>
        </maincard>
        <czmaincard class="side" vw_value="600px">
            <router-view></router-view>
        </czmaincard>
    </el-container>

</template>

<script setup>
import maincard from '../components/maincard.vue'
import czmaincard from '../components/czmain.vue'
import mainpage from '../components/trade-records/mainpage.vue'
</script>

<style scoped>
@media (max-width: 1024px) {
    .side {
        display: none;
    }
}
</style>