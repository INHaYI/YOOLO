<template>
    <el-container>
        <maincard>
            <mainpage></mainpage>
        </maincard>
        <czmaincard class="side" vw_value="30%">
            <czmainpage></czmainpage>
        </czmaincard>
    </el-container>
</template>

<script setup>
import maincard from '../components/maincard.vue'
import czmaincard from '../components/czmain.vue'
import mainpage from '../components/supplier-home/mainpage.vue'
import czmainpage from '../components/supplier-home/czmainpage.vue'

</script>

<style scoped>
@media (max-width: 1024px) {
    .side {
        display: none;
    }
}
</style>