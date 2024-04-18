<template>
    <el-container>

        <maincard>
            <mainpage></mainpage>
        </maincard>
        <czmaincard>
            <czmainpage></czmainpage>
        </czmaincard>
    </el-container>

</template>

<script setup>
import maincard from '../components/maincard.vue'
import czmaincard from '../components/czmainzw.vue'
import mainpage from '../components/my-home/mainpage.vue'
import czmainpage from '../components/my-home/zcmainpage.vue'
</script>

<style scoped>
@media (max-width: 1024px) {
    .layout {
        display: block;
    }
}
</style>