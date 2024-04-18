<template>
    <!-- 网格视图 -->
    <ul class="griditenList" id="griditenList">
        <li @click="() => tax(shop, index)" v-for="(shop, index) in shops" :class="{ selected: isActive(index) }"
            :key="shop.shopId" class="item">
            <div class="headn">
                <div>
                    <div class="shoptitle">{{ shop.name }}</div>
                    <div class="subtitle">{{ shop.allname }}</div>
                </div>

            </div>
            <div class="contents">
                <div class="taxIncluded">含税: {{ shop.tax === "1" ? "含" : "否" }}
                    <div class="logisticsTitle">物流信息: <div class="logistics">{{ shop.logisticsContent }}</div>
                    </div>
                </div>

            </div>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter()

const props = defineProps({
    shops: {
        type: Array,
        required: true,
    },
    nayigationselect: {
        type: String,
        required: true,
    },
});
const nayigationselect = ref("0");
function isActive(routeName) {
    return nayigationselect.value === routeName;
}

function tax(shop, index) {
    nayigationselect.value = index

    router.push({
        path: '/list/shops/tax', query: {
            name: shop.name,
            allname: shop.allname,
            tax: shop.tax,
            logit: shop.logistics_name,
            connect: shop.connectName,
            connectphone: shop.connectPhone
        }
    })
}

watch(() => props.nayigationselect, (newValue) => {
    nayigationselect.value = newValue; // 更新子组件中的值
});
</script>

<style scoped>
.griditenList {
    display: grid;
    list-style-type: none;
    /* 移除列表项的默认标记 */
    padding: 15px 30px;
    /* 移除默认的padding */
    margin-top: 5px;
    padding-bottom: 200px;
    gap: 20px;
    font-family: Arial, sans-serif;
    grid-template-columns: repeat(5, 1fr);
}

.griditenList .item {
    background-color: #fffbfb;
    /* 设置背景色为白色 */
    border: 0.1px solid #e0e0e0;
    /* 设置边框为黑色 */
    padding: 15px 15px;
    /* 在列表项内部添加一些空间 */
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s ease-in-out;
}

.griditenList .item .headn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
}

.griditenList .item .headn .shoptitle {
    font-size: 18px;
    font-weight: 900;
    color: #29327c;
}

.griditenList .item .headn .subtitle {
    font-size: 10px;
    color: #b6b6b6;
    font-weight: 400;
    white-space: nowrap;
}

.griditenList .item .contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.griditenList .item .contents .taxIncluded {
    font-size: 11px;
    font-weight: 200;
    color: #a13938;
}

.griditenList .item .contents .taxIncluded .logisticsTitle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.griditenList .item .contents .taxIncluded .logisticsTitle .logistics {
    padding: 1px 10px;
    background-color: #20a920;
    color: #fff;
    font-size: 9px;
    border-radius: 15px;
    margin-left: 5px;
}

.griditenList .item:hover {
    transform: scale(1.02);
    border: 0.5px solid #29327c;
    /* 设置边框为黑色 */
    background-color: #fff8f8;
}

.griditenList .item.selected {
    transform: scale(1.03);
    background-color: #fff1f1;
    /* 选中项的背景色 */
    border: 0.5px solid #29327c;
}
</style>