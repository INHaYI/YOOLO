<template>
    <el-container style="font-family: Arial, sans-serif;">
        <el-header height="50px" style="padding: 0;">
            <cpHeader></cpHeader>
        </el-header>

        <el-main style="margin: 0; padding: 0; height: calc(100vh - 4.5rem - 2px);">

            <div class="transaction_bill">
                <div class="enter_shop">
                    <div class="titleblock">
                        <div class="title_shop">{{ query.name }}</div>
                        <div class="logit">
                            物流信息:
                            <div class="titllogit">{{ query.logit }}</div>
                        </div>
                    </div>
                    <div class="titlereblock">
                        <div class="futitle_shop">{{ query.allname }}</div>
                        <div class="taxif">
                            是否含税:
                            <div class="taxvule">{{ query.tax === "1" ? "含" : "否" }}</div>
                        </div>
                    </div>

                </div>


                <el-form ref="formRef" :model="form" label-width="auto" :rules="rules" @submit.prevent
                    style="width: calc(100% - 100px); font-family: Arial, sans-serif;">
                    <div class="enter_group">
                        <div class="lables" for="quoteNumber">
                            <svg t="1709169283334" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4238" width="200" height="200">
                                <path
                                    d="M704 416H320a32 32 0 0 0 0 64h384a32 32 0 0 0 0-64zM704 608H320a32 32 0 0 0 0 64h384a32 32 0 0 0 0-64z"
                                    p-id="4239" fill="#2c2c2c"></path>
                                <path
                                    d="M832 32H192C139.072 32 96 75.072 96 128v768c0 52.928 43.072 96 96 96h640c52.928 0 96-43.072 96-96V128c0-52.928-43.072-96-96-96zM320 96h384v96H320V96z m544 800a32 32 0 0 1-32 32H192c-17.632 0-32-14.336-32-32V128c0-17.632 14.368-32 32-32h64v96c0 35.296 28.704 64 64 64h384c35.296 0 64-28.704 64-64V96h64c17.664 0 32 14.368 32 32v768z"
                                    p-id="4240" fill="#2c2c2c"></path>
                            </svg>
                        </div>
                        <el-form-item style="margin-bottom: 0;" label="报价单数:" prop="count">
                            <el-input v-model.number="form.count" :min="1" :autofocus="true">
                                <template #append>单</template>
                            </el-input>
                        </el-form-item>

                    </div>


                    <div class="enter_group">
                        <div class="lables" for="dealNumber">
                            <svg t="1709169305596" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4596" width="200" height="200">
                                <path
                                    d="M832 32H192C139.072 32 96 75.072 96 128v768c0 52.928 43.072 96 96 96h640c52.928 0 96-43.072 96-96V128c0-52.928-43.072-96-96-96zM320 96h384v96H320V96z m544 800a32 32 0 0 1-32 32H192c-17.632 0-32-14.336-32-32V128c0-17.632 14.368-32 32-32h64v96c0 35.296 28.704 64 64 64h384c35.296 0 64-28.704 64-64V96h64c17.664 0 32 14.368 32 32v768z"
                                    p-id="4597" fill="#2c2c2c"></path>
                                <path
                                    d="M719.072 367.04l-249.376 249.376-120.256-120.288a31.968 31.968 0 1 0-45.248 45.248l142.88 142.912a32 32 0 0 0 45.248 0l272-272a31.968 31.968 0 1 0-45.248-45.248z"
                                    p-id="4598" fill="#2c2c2c"></path>
                            </svg>
                        </div>
                        <el-form-item label="成交单数:" prop="dealcount" style="margin-bottom: 0;">
                            <el-input v-model.number="form.dealcount" :min="1">
                                <template #append>单</template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div style="display: flex; justify-content: end; margin-left: 22px;"
                        v-if="form.count > form.dealcount">
                        <el-form-item label="未成交原因:" style="margin-bottom: 0;" prop="diereson">
                            <el-input v-model="form.diereson" style="width: 240px" autosize type="textarea"
                                placeholder="请输入未成交原因" />
                        </el-form-item>
                    </div>


                    <div class="enter_group">
                        <div class="lables" for="totalDealAmount">

                            <svg t="1709169491643" class="icon" viewBox="0 0 1029 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4799" width="200" height="200">
                                <path
                                    d="M858.016 645.632c-30.496 24.992-68.512 42.944-117.12 58.144-14.048 4.384-28.544 8.448-46.272 13.056-6.56 1.696-34.656 8.8-41.632 10.624a32 32 0 0 1-16.224-61.92c7.328-1.92 35.52-9.024 41.792-10.656a897.6 897.6 0 0 0 43.264-12.192c41.44-12.96 72.576-27.648 95.68-46.56 84.16-68.96 160.224-55.52 203.552 38.592l8.48 18.432-13.024 15.52C872.288 840.576 748.128 928 640 928l-548.256 15.2a32 32 0 0 1 0-64L640 864c80.96 0 186.72-72.512 313.664-220.16-22.72-37.312-49.088-36.32-95.648 1.792zM93.12 790.208a32 32 0 1 1-64-1.088L32.224 608l8.416-8.96c85.152-90.944 169.44-131.904 252.416-118.624 62.72 10.016 98.176 29.568 147.424 71.584l6.944 5.952c21.312 18.208 32.736 26.784 47.616 34.688 11.264 6.016 26.016 9.6 45.888 11.52 9.024 0.928 15.808 1.28 33.536 2.016 73.28 3.104 102.4 13.056 102.4 65.824 0 72-47.36 117.696-132.32 132.032-55.936 9.44-137.024-12.32-246.56-63.616a32 32 0 1 1 27.168-57.952c98.56 46.176 169.248 65.12 208.736 58.464 55.296-9.344 78.016-30.336 78.944-66.56-6.848-2.24-17.184-3.2-41.056-4.224a602.56 602.56 0 0 1-37.056-2.24c-27.488-2.688-49.856-8.16-69.76-18.784-20.096-10.688-34.496-21.472-59.104-42.528l-6.912-5.888c-41.088-35.072-66.784-49.248-116-57.12-56.224-8.96-118.464 19.84-187.168 90.368l-2.656 156.256zM224 369.728a32 32 0 1 1-64 0V224a64 64 0 0 1 64-64h608a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64H489.44a32 32 0 1 1 0-64H832V224H224v145.728z"
                                    fill="#2c2c2c" p-id="4800"></path>
                            </svg>
                        </div>
                        <el-form-item style="margin-bottom: 0;" label="成交金额:" prop="money">
                            <el-input v-model="form.money"
                                :formatter="(value) => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                :parser="(value) => value.replace(/\¥\s?|(,*)/g, '')">
                                <template #append>元</template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <el-button @click="submitForm(formRef)" style=" width: calc(100%); margin-top: 5px; padding: 15px;"
                        color="#2b327c">提交</el-button>

                </el-form>

                <div class="enter_shop_footer">
                    <div class="fotter_a">
                        <div class="title">
                            <svg t="1709650751056" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7491" width="200" height="200">
                                <path
                                    d="M663.771429 591.506286l183.588571 214.235428A73.142857 73.142857 0 0 1 791.82019 926.47619H548.571429v-219.428571h-73.142858v219.428571H232.17981a73.142857 73.142857 0 0 1-55.53981-120.734476l183.612952-214.211047A291.206095 291.206095 0 0 0 512 633.904762c55.588571 0 107.52-15.481905 151.771429-42.398476zM512 97.52381c134.656 0 243.809524 109.153524 243.809524 243.809523s-109.153524 243.809524-243.809524 243.809524-243.809524-109.153524-243.809524-243.809524S377.344 97.52381 512 97.52381z"
                                    p-id="7492" fill="#2c2c2c"></path>
                            </svg>
                            联系人电话:
                        </div>

                        <div class="shop_contact_block">
                            <div class="contactname">{{ query.connect }}</div>
                            <div class="contactphone">{{ query.connectphone }}</div>
                        </div>
                    </div>

                    <div class="line"></div>

                    <div class="fotter_b">
                        <div class="title">
                            <svg t="1709650883559" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7857" width="200" height="200">
                                <path
                                    d="M398.652952 165.692952c-32.280381-46.006857-58.172952-61.318095-92.867047-54.808381-14.969905 2.80381-24.210286 7.850667-41.20381 22.528l-12.946285 11.361524-25.185524 20.894476-6.582857 5.753905c-3.705905 3.413333-6.38781 6.217143-9.825524 10.118095-64 72.46019-81.724952 185.782857-44.470857 292.327619 26.794667 76.55619 74.605714 152.624762 142.774857 228.644572 72.289524 80.62781 133.046857 131.364571 202.922666 168.374857 54.857143 29.013333 96.865524 41.74019 145.676191 43.227429 59.001905 1.828571 110.957714-11.50781 153.648762-39.15581a162.133333 162.133333 0 0 0 19.553524-15.189333l8.289523-7.558095 16.335239-15.213715 5.534476-4.924952 10.922666-9.435429c22.040381-19.651048 29.184-31.939048 30.646858-51.370666 2.194286-29.647238-11.215238-52.736-49.737143-85.699048l-26.063238-21.820952-12.117334-10.581334-11.459047-9.825524c-37.229714-30.744381-64.804571-40.69181-100.205715-35.35238-24.283429 3.632762-38.278095 12.141714-63.073523 38.107428l-10.947048 11.654095c-18.041905 19.017143-28.330667 26.258286-43.544381 29.305905-22.25981 4.461714-44.373333-7.046095-80.262095-36.205714-46.250667-37.546667-84.626286-80.676571-117.613715-131.949714-22.869333-35.766857-31.890286-62.902857-24.941714-87.600762 2.82819-9.99619 9.679238-17.042286 24.064-28.184381l14.994286-11.312762 2.413714-1.877334 22.747429-18.553904c20.114286-16.822857 28.281905-28.281905 32.572952-45.836191 8.899048-36.10819 0.487619-66.072381-32.426667-117.638095l-15.62819-24.234667-5.558857-8.533333-6.436572-9.435429z"
                                    p-id="7858"></path>
                            </svg>
                            公司电话:
                        </div>
                        <div class="shop_phone_block">
                            <div class="shop_phone">{{ query.phone }}</div>
                        </div>
                    </div>
                    <div class="line"></div>

                    <div class="fotter_c">
                        <div class="title">
                            <svg t="1709650848253" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7701" width="200" height="200">
                                <path
                                    d="M438.857143 536.380952v73.142858H207.238095a36.571429 36.571429 0 0 0 0 73.142857h609.52381a109.714286 109.714286 0 1 1 0 219.428571h-585.142857v-73.142857h585.142857a36.571429 36.571429 0 0 0 0-73.142857h-609.52381a109.714286 109.714286 0 1 1 0-219.428572H438.857143z m219.428571-438.857142c121.173333 0 219.428571 90.794667 219.428572 202.77638l-0.146286 7.14362c-2.706286 67.047619-42.788571 142.384762-108.592762 218.794666a900.096 900.096 0 0 1-77.360762 79.067429l-10.727619 9.557333-5.071238 4.412952-9.557333 8.118858L658.285714 633.904762l-7.972571-6.509714-9.557333-8.118858-10.361905-9.069714a900.096 900.096 0 0 1-82.797715-83.943619c-65.80419-76.434286-105.886476-151.79581-108.592761-218.819047a176.664381 176.664381 0 0 1-0.146286-7.14362c0-110.445714 95.573333-200.289524 214.454857-202.727619L658.285714 97.52381z m0 146.285714a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z"
                                    p-id="7702"></path>
                            </svg>
                            地址:
                        </div>

                        <div class="shop_adress">{{ query.adress }}</div>
                    </div>
                    <div class="line"></div>

                </div>
            </div>

        </el-main>

    </el-container>
</template>

<script lang="ts" setup>
import cpHeader from './czhead1.vue'
import { ref, reactive, watch } from 'vue'
import { useRoute } from "vue-router"
import { toRefs } from "vue"
import axios from 'axios';
import { ElMessage } from 'element-plus'

const route = useRoute()
const { query } = toRefs(route)
//

import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const dealfailcheck = ref(1)
const form = reactive({
    count: '',      // 必须为数字，不能小于等于0，必填
    dealcount: '',  // 必须为数字，不能小于等于0，且必须小于等于count，必填
    diereson: '',   // 非必填，当dealcount小于count时才显示
    money: '',      // 必填，必须为数字，如果有小数点，只能有一个小数点，小数点后只能有两位数字
});

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            const token = localStorage.getItem('token');
            axios.get('http://47.109.74.143:8085/api/user/info', {
                headers: {
                    Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
                }
            }).then((response) => {
                if (response.data.code === 20000) {
                    if (response.data.data.info.position === 1 || response.data.data.info.position === 2) {
                        axios.post('http://47.109.74.143:8085/api/transaction/add', {
                            shopId: route.query.shopid,
                            quotationsCount: form.count,
                            dealCount: form.dealcount,
                            amount: form.money,
                            transactionDate: formattedDate,
                            dealfailReasons: form.diereson
                        }, {
                            headers: {
                                Authorization: `Bearer ${token}`
                            },
                        })
                            .then((response) => {
                                if (response.data.code === 20000) {
                                    open1();
                                    resetFormdata();
                                } else {
                                    open4();
                                }
                            })
                            .catch(() => {
                                open4();
                            });
                    } else {
                        open5();
                    }

                } else {
                    open5();
                }
            })

        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

//
watch(query, (newQuery) => {
    // if (newQuery) {
    // 清空表单内容
    // resetForm(formRef);
    // formEL.resetFields()
    resetFormdata()
    // }
});



const resetFormdata = () => {
    form.count = '';
    form.dealcount = '';
    form.diereson = '';
    form.money = '';
};




const open1 = () => {
    ElMessage({
        message: '交易记录添加成功',
        type: 'success',
        plain: true,
    })
}
const open4 = () => {
    ElMessage({
        message: '网络错误',
        type: 'error',
        plain: true,
    })
}
const open5 = () => {
    ElMessage({
        message: '无权限',
        type: 'error',
        plain: true,
    })
}



// 创建验证规则
const rules = {
    count: [
        { required: true, message: '请输入报价单数', trigger: 'blur' },
        { type: 'number', message: '必须为数字', trigger: 'blur' },
        { validator: validateCount, trigger: 'blur' }
    ],
    dealcount: [
        { required: true, message: '请输入成交单数', trigger: 'blur' },
        { type: 'number', message: '必须为数字', trigger: 'blur' },
        { validator: validateDealCount, trigger: 'blur' }
    ],
    money: [
        { required: true, message: '请输入成交金额', trigger: 'blur' },
        { validator: validateMoney, trigger: 'blur' }
    ]
};

// 验证报价单数是否为数字且大于0
function validateCount(rule, value, callback) {
    if (isNaN(value) || Number(value) <= 0) {
        callback(new Error('报价单数必须为大于0的数字'));
    } else {
        callback();
    }
}

// 验证成交单数是否为数字且大于0且小于等于count
function validateDealCount(rule, value, callback) {
    if (isNaN(value) || Number(value) <= 0) {
        callback(new Error('成交单数必须为大于0的数字'));
    } else if (Number(value) > Number(form.count)) {
        callback(new Error('成交单数不能大于报价单数'));
    } else {
        callback();
    }
}

// 验证成交金额是否为数字且符合金额格式要求
function validateMoney(rule, value, callback) {
    const moneyRegex = /^\d+(\.\d{1,2})?$/;
    if (!moneyRegex.test(value)) {
        callback(new Error('成交金额必须为数字，且最多两位小数'));
    } else {
        callback();
    }
}


import { onMounted } from 'vue'

onMounted(() => {

    console.log('error submit!');
})

</script>

<style scoped>
.transaction_bill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fffbfb;
    width: 100%;
    height: calc(100vh - 4.5rem - 2px - 28px - 50px);


    /* 隐藏溢出内容，以保持圆角效果 */

}

.enter_shop_footer {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 30px 30px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff1f1;
    font-size: 11px;
    color: #7d7d7d;
}

.enter_shop_footer .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.enter_shop_footer .title .icon {
    height: 12px;
    width: 12px;
    margin-right: 10px;
}

.enter_shop_footer .title .icon path {
    fill: rgb(96, 98, 102);
    /* 红色 */
}

.enter_shop_footer .fotter_a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.enter_shop_footer .fotter_b {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.enter_shop_footer .fotter_c {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 5px;
}

.enter_shop_footer .shop_contact_block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f7fff7;
    border-radius: 5px;
    color: #20a920;
    font-size: 10px;
    padding: 2px 15px;
}

.enter_shop_footer .shop_contact_block div {
    margin-left: 5px;
}

.enter_shop_footer .line {
    height: 0.5px;
    width: 100%;
    background-color: #d6d6d6;
    margin-bottom: 10px;
}

.enter_shop_footer .shop_phone_block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f7fff7;
    border-radius: 5px;
    color: #20a920;
    font-size: 10px;
    padding: 2px 15px;
}

.enter_shop_footer .shop_phone_block div {
    margin-left: 5px;
}

.enter_shop_footer .shop_adress {
    font-size: 11px;
}

.enter_shop {
    box-sizing: border-box;
    padding: 30px 30px;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff1f1;
}

.enter_shop .titleblock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.enter_shop .titleblock .title_shop {
    font-size: 17px;
    color: #29327c;
    font-weight: 600;
}

.enter_shop .titleblock .logit {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #7d7d7d;
}

.enter_shop .titleblock .logit .titllogit {
    font-size: 9px;
    padding: 1px 10px;
    background-color: #20a920;
    color: #fff;
    border-radius: 15px;
    margin-left: 5px;
}

.enter_shop .titlereblock {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.enter_shop .titlereblock .futitle_shop {
    font-size: 12px;
    color: #c4c4c4;
    font-weight: 300;
}

.enter_shop .titlereblock .taxif {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #7d7d7d;
}

.enter_shop .titlereblock .taxif .taxvule {
    color: #a13938;
    margin-left: 5px;
    margin-right: 25px;
}

form {
    width: calc(100% - 100px);
    display: grid;
    grid-gap: 20px;
    margin: 30px 20px;
    padding: 40px 30px;
    background-color: #edffed;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.lables {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    font-weight: 500;
    white-space: nowrap;
    color: #494949;
    margin-right: 7px;
}

.lables .icon {
    left: 1rem;
    fill: #494949;
    width: 0.9rem;
    height: 0.9rem;

}

input[type="number"] {
    width: 100%;
    height: 35px;
    line-height: 28px;
    padding: 0 1rem;
    border: 0.1px solid #d7d7d7;
    border-radius: 8px;
    outline: none;
    background-color: #ffffff;
    color: #0d0c22;
    transition: 0.3s ease;
    font-size: 100%;
}

.moneysd input[type="number"] {
    width: 100%;
    height: 35px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 30px;
    border: 0.1px solid #d7d7d7;
    border-radius: 8px;
    outline: none;
    background-color: #ffffff;
    color: #0d0c22;
    transition: 0.3s ease;
    font-size: 100%;
}

textarea {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border: 0.1px solid #d7d7d7;
    border-radius: 8px;
    outline: none;
    background-color: #ffffff;
    color: #0d0c22;
    transition: 0.3s ease;
    font-size: 100%;
    box-sizing: border-box;
}

.enter_group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.enter_group .groupinput {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    /* padding: 0px 30px; */
}

.enter_group .groupinput .dw {
    position: absolute;
    right: 50px;
    color: #7d7d7d;
    font-size: 15px;
}

.enter_group .groupinput .yjfh {
    position: absolute;
    left: 15px;
    color: #7d7d7d;
    font-size: 15px;
}

input[type="number"]:focus,
textarea:focus {
    outline: none;
    border-color: #29327c;
    background-color: #fff;
}

input[type="number"]:hover,
textarea:hover {
    outline: none;
    border-color: #29327c;
    background-color: #fff;
}

input[type="number"]::placeholder {
    color: #ffffff;
}

.enter_transaction {
    height: calc(100vh - 4.5rem - 2px - 28px - 50px);
}

textarea {
    resize: vertical;
    min-height: 60px;
}
</style>