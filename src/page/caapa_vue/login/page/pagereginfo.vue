<template>

    <div class="page">
        <el-card class="card">
            <template #header>
                <div class="card-header">
                    <span style="font-size: 24px;">用户注册</span>
                </div>
            </template>


            <el-form ref="ruleFormRef" inline-message :model="ruleForm" :rules="rules" label-width="auto"
                class="demo-ruleForm layout" @submit.prevent size="large" status-icon label-position="top">
                <el-form-item label="手机号" prop="username">
                    <el-input style="height: 40px;" v-model="ruleForm.username">
                        <template #prepend>+86</template>
                    </el-input>
                </el-form-item>

                <el-form-item label="姓名" prop="name">
                    <el-input style="height: 40px;" v-model="ruleForm.name" />
                </el-form-item>

                <el-form-item label="选择注册职业" prop="position">
                    <el-radio-group v-model="ruleForm.position" @change="handlePositionChange">
                        <el-radio border :label="2">供应商成员</el-radio>
                        <el-radio border :label="6">驻地业务员</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input style="height: 40px;" v-model="ruleForm.password" />
                </el-form-item>

                <el-form-item label="确认密码" prop="checkpassword">
                    <el-input style="height: 40px;" v-model="ruleForm.checkpassword" />
                </el-form-item>

                <el-form-item label="选择供应商" prop="company">
                    <el-select v-model="ruleForm.company" placeholder="请选择供应商" :disabled="isCompanyDisabled">
                        <el-option v-for="item in options" :key="item.companyId" :label="item.name"
                            :value="item.companyId" />
                    </el-select>
                </el-form-item>
                <el-button color="#29327c" style="width: 100%;" @click="submitForm(ruleFormRef)">注册</el-button>
            </el-form>

            <el-form ref="ruleFormRef" inline-message :model="ruleForm" :rules="rules" label-width="auto"
                class="demo-ruleForm layout1" @submit.prevent size="large" status-icon :label-position="formjg">
                <el-form-item label="手机号" prop="username">
                    <el-input style="height: 40px;" v-model="ruleForm.username">
                        <template #prepend>+86</template>
                    </el-input>
                </el-form-item>

                <el-form-item label="姓名" prop="name">
                    <el-input style="height: 40px;" v-model="ruleForm.name" />
                </el-form-item>

                <el-form-item label="选择注册职业" prop="position">
                    <el-radio-group v-model="ruleForm.position" @change="handlePositionChange">
                        <el-radio border :label="2">供应商成员</el-radio>
                        <el-radio border :label="6">驻地业务员</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input style="height: 40px;" v-model="ruleForm.password" />
                </el-form-item>

                <el-form-item label="确认密码" prop="checkpassword">
                    <el-input style="height: 40px;" v-model="ruleForm.checkpassword" />
                </el-form-item>

                <el-form-item label="选择供应商" prop="company">
                    <el-select v-model="ruleForm.company" placeholder="请选择供应商" :disabled="isCompanyDisabled">
                        <el-option v-for="item in options" :key="item.companyId" :label="item.name"
                            :value="item.companyId" />
                    </el-select>
                </el-form-item>
                <el-button color="#29327c" style="width: 100%;" @click="submitForm(ruleFormRef)">注册</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, toRefs, defineProps, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios';

// // 响应式变量用于控制表单的大小
// const formjg = computed(() => {
//     return window.innerWidth > 302 ? 'right' : 'top'
// })
const screenWidth = ref(document.documentElement.clientWidth)



//声明路由
const router = useRoute()

import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
    username: String
    name: String
    position: number
    password: String
    checkpassword: String
    company: number
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    username: '', //必填 必须为11位电话号
    name: '', //必填 字符串
    position: '', //必选 两个选项：要么2 要么6
    password: '', //必填
    checkpassword: '', //必填
    company: '' //如果position为6 则设置为3且不可改变 如果position为2 则需要选择自己的公司
})

const rules = reactive<FormRules<RuleForm>>({
    username: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^\d{11}$/, message: '手机号必须为11位数字', trigger: 'blur' }
    ],
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    position: [
        { required: true, message: '请选择注册职业', trigger: 'change' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 8, message: '密码长度不能少于8位', trigger: 'blur' },
        {
            validator: (rule, value) => {
                const regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
                if (!regex.test(value)) {
                    return Promise.reject('密码必须包含数字和字母，且不能有汉字');
                }
                return Promise.resolve();
            },
            trigger: 'blur'
        }
    ],
    checkpassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value !== ruleForm.password) {
                    return Promise.reject('两次输入的密码不一致');
                }
                return Promise.resolve();
            },
            trigger: 'blur'
        }
    ],
    company: [
        { required: true, message: '请选择供应商', trigger: 'change' }
    ]
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
            if (ruleForm.position === 2) {
                console.log('error submit!', ruleForm.position)
                if (ruleForm.company !== 3 && ruleForm.company !== 1) {
                    axios.post('http://47.109.74.143:8085/api/user/add', {
                        companyId: ruleForm.company,
                        name: ruleForm.name,
                        position: ruleForm.position,
                        phoneNumber: ruleForm.username,
                        username: ruleForm.username,
                        password: ruleForm.password,
                        creativetime: formattedDate,
                    }).then((response) => {
                        if (response.data.code === 20000) {
                            open1();

                        } else {
                            open4();
                        }
                    })
                } else {
                    open5();
                }
            } else {
                axios.post('http://47.109.74.143:8085/api/user/add', {
                    companyId: ruleForm.company,
                    name: ruleForm.name,
                    position: ruleForm.position,
                    phoneNumber: ruleForm.username,
                    username: ruleForm.username,
                    password: ruleForm.password,
                    creativetime: formattedDate,
                }).then((response) => {
                    if (response.data.code === 20000) {
                        open1();

                    } else {
                        open4();
                    }
                })
            }

        } else {
            console.log('error submit!', fields)
        }
    })
}

import { ElMessage } from 'element-plus'

const open1 = () => {
    ElMessage({
        message: '申请成功',
        type: 'success',
        plain: true,
    })
}
const open4 = () => {
    ElMessage({
        message: '申请失败',
        type: 'error',
        plain: true,
    })
}

const open5 = () => {
    ElMessage({
        message: '供应商成员不能选择凯配联盟和驻地业务员',
        type: 'error',
        plain: true,
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = ref()
const loadOptions = async () => {
    try {
        const token = localStorage.getItem('token');
        axios.get('http://47.109.74.143:8085/api/adm/company/cxop').then((response) => {


            options.value = response.data;
            console.log(response.data)
        })
    } catch (error) {
        console.error('Error loading position options:', error);
        ElMessage.error('加载职业选项失败');
    }
};

// 监听职业选择变化
const handlePositionChange = (value) => {
    if (value === 6) {
        ruleForm.company = 3;
    } else {
        ruleForm.company = ''; // 清空值，用户需要手动选择
    }
};

// 是否禁止选择供应商
const isCompanyDisabled = computed(() => {
    return ruleForm.position === 6;
});

//变量检测
//watch(query, (newQuery) => {
//});

//组件注册
onMounted(() => {
    loadOptions();
})

</script>

<style scoped>
.page {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.card {
    padding: 30px;
    margin-bottom: 80px;
    min-width: 580px;

}

.layout {
    display: none;
}

@media (max-width: 1024px) {
    .page {
        position: fixed;
        height: calc(100vh - 4rem - 2px);
        width: 100vw;
        z-index: 2;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .card {
        padding: 10px;
        min-width: 100%;
        margin-bottom: 0;
        height: 100%;
        box-sizing: border-box;

    }

    .demo-ruleForm {
        font-size: 12px;
    }

    .layout1 {
        display: none;
    }

    .layout {
        display: block;
    }
}
</style>
