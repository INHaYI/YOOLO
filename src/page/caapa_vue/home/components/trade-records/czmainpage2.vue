<template>
    <div>
        <img src="../../img/logo.jpg">
    </div>
</template>

<script setup>
import { ref, onMounted, watch, toRefs, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios';

//声明路由
const router = useRoute()

//路由传值-接收
// const { query } = toRefs(router)

//路由传值-发送
// const props = defineProps({
//     shops: {
//         type: Array,
//         required: true,
//     },
// });



//变量检测
//watch(query, (newQuery) => {
//});

//组件注册
onMounted(() => {

})

</script>

<style scoped>
div {
    background-color: #2a327c;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}

img {
    width: 120px;
    height: auto;
    filter: drop-shadow(0px 0px 3px #fff);
}
</style>