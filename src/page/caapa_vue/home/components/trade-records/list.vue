<template>
    <ul class="itemList" id="itemList">
        <li @click="() => add(shop, index)" v-for="(shop, index) in shops" :class="{ selected: isActive(index) }"
            :key="shop.shopId" class="item">
            <div class="headn">
                <div>
                    <div class="shoptitle">{{ shop.name }}</div>
                    <div class="subtitle">{{ shop.allname }}</div>
                </div>
                <div class="owner">录入员: {{ shop.username }}</div>
            </div>

            <div class="contents">
                <div class="taxIncluded">含税: {{ shop.tax === "1" ? "含" : "否" }}
                    <div class="logisticsTitle">物流信息: <div class="logistics">{{ shop.logisticsContent }}</div>
                    </div>
                </div>
                <div class="contact">
                    <div class="contact_title">联系人:</div>

                    <div class="contactcontent">
                        <div>{{ shop.connectName }}</div>
                        <div>{{ shop.connectPhone }}</div>
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
    }
});
const nayigationselect = ref("0");
function isActive(routeName) {
    return nayigationselect.value === routeName;
}

function add(shop, index) {
    nayigationselect.value = index
    router.push({
        path: '/list/trade/add', query: {
            shopid: shop.shopId,
            name: shop.name,
            allname: shop.allname,
            tax: shop.tax,
            logit: shop.logisticsContent,
            connect: shop.connectName,
            connectphone: shop.connectPhone,
            phone: shop.contactNumber,
            adress: shop.address
        }
    })

}

watch(() => props.nayigationselect, (newValue) => {
    nayigationselect.value = newValue; // 更新子组件中的值
});

</script>


<style scoped>
.itemList {
    list-style-type: none;
    /* 移除列表项的默认标记 */
    padding: 0;
    /* 移除默认的padding */
    margin-top: 5px;
    padding-bottom: 100px;
    /* overflow-y: scroll; */
    font-family: Arial, sans-serif;
}

.itemList .item {
    background-color: #fffbfb;
    /* 设置背景色为白色 */
    border: 0.1px solid #e0e0e0;
    /* 设置边框为黑色 */
    padding: 10px 30px;
    /* 在列表项内部添加一些空间 */
    margin: 20px 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
}

.itemList .item .headn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
}

.itemList .item .headn .shoptitle {
    font-size: 17px;
    font-weight: 900;
    color: #29327c;
}

.itemList .item .headn .subtitle {
    font-size: 12px;
    color: #b6b6b6;
    font-weight: 400;
    white-space: nowrap;
}

.itemList .item .headn .owner {
    font-size: 10px;
    color: #d5d5d5;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    height: 25px;
}

.itemList .item .contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.itemList .item .contents .taxIncluded {
    font-size: 11px;
    font-weight: 200;
    color: #a13938;
}

.itemList .item .contents .taxIncluded .logisticsTitle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.itemList .item .contents .taxIncluded .logisticsTitle .logistics {
    padding: 1px 10px;
    background-color: #20a920;
    color: #fff;
    font-size: 9px;
    border-radius: 15px;
    margin-left: 5px;
}

.itemList .item .contents .contact {
    font-size: 10px;
    font-weight: 200;
    color: #adadad;
    display: flex;
}

.itemList .item .contents .contact .contact_title {
    margin-top: 5px;
}

.itemList .item .contents .contact .contactcontent {
    background-color: #f8fff0;
    border-radius: 5px;
    padding: 5px 15px;
    text-align: right;
    margin-left: 8px;
    box-shadow: 0px 0px 2px rgba(44, 44, 44, 0.1);
}


.itemList .item:hover {
    transform: scale(1.01);
    border: 0.5px solid #29327c;
    /* 设置边框为黑色 */
    background-color: #fff8f8;
}

.itemList .item.selected {
    transform: scale(1.03);
    background-color: #fff1f1;
    /* 选中项的背景色 */
    border: 0.5px solid #29327c;
}

@media (max-width: 1024px) {
    .itemList .item {
        background-color: #fffbfb;
        /* 设置背景色为白色 */
        border: 0.1px solid #e0e0e0;
        /* 设置边框为黑色 */
        padding: 10px 10px;
        /* 在列表项内部添加一些空间 */
        margin: 15px 15px;
        border-radius: 8px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease-in-out;
    }
}
</style>