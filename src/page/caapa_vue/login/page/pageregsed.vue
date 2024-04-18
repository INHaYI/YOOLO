<template>
    <div class="page">
        <el-card class="card" style="max-width: 480px; padding: 20px;" shadow="hover">
            <svg t="1712854396168" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3163" width="200" height="200">
                <path
                    d="M0 102.4v921.6h665.6V102.4l-153.6-102.4z m384 808.96h-307.2V819.2l307.2-5.12z m0-204.8l-307.2 5.12v-92.16l307.2-20.48z m0-220.16l-307.2 20.48V414.72l307.2-35.84z m0-225.28l-307.2 40.96V204.8l307.2-61.44zM921.6 921.6V102.4l-153.6-102.4h-76.8L768 51.2v972.8h256v-102.4h-102.4z"
                    fill="#333333" p-id="3164"></path>
            </svg>
            <h2>供应商注册</h2>
        </el-card>
        <div class="delv"></div>
        <el-card class="card" style="max-width: 480px; padding: 20px;" shadow="hover">
            <svg t="1712854446082" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3306" width="200" height="200">
                <path
                    d="M512 512a204.8 204.8 0 0 0 204.8-204.8V204.8a204.8 204.8 0 0 0-409.6 0v102.4a204.8 204.8 0 0 0 204.8 204.8zM665.6 563.2H358.4a256 256 0 0 0-256 256v204.8h819.2v-204.8a256 256 0 0 0-256-256z m-102.4 307.2H460.8v-204.8h102.4z"
                    fill="#333333" p-id="3307"></path>
            </svg>
            <h2>用户注册</h2>
        </el-card>

    </div>
</template>

<script setup>
import { ref, onMounted, watch, toRefs, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios';

//声明路由
const router = useRoute()

function card1() {
    router.push('/register/info');
}

function card2() {
    router.push('/register/info');
}

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
.page {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.delv {
    width: 90px;
}

.card:hover {
    background-color: rgb(250, 215, 215);
    transform: scale(1.01);
}

svg {
    width: 180px;
    margin-top: 3px;
}

.icon path {
    fill: #c71717;
}
</style>