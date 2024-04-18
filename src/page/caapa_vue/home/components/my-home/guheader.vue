<template>
    <div class="header">
        <div class="title">{{ titled }}</div>
        <el-button color="#e6312d" size="small" type="primary" style="margin-left: 16px" @click="opens">
            新成员申请
        </el-button>
    </div>


    <el-drawer v-model="drawer" :direction="rtl">
        <template #header>
            <h4>成员注册列表</h4>
        </template>
        <template #default>
            <el-table :data="tableDataregister" :table-layout="auto" stripe
                style="width: 100%; margin: 5px 0; font-family: Arial, sans-serif;">
                <el-table-column prop="name" label="姓名" min-width="40" />
                <el-table-column prop="position" label="职位" min-width="40" :formatter="formatPosition" />
                <el-table-column label="操作" min-width="60">
                    <template #default="scope">
                        <el-button type="primary" size="small"
                            @click="handleEdit(scope.$index, scope.row)">通过</el-button>
                        <el-button type="danger" link size="small"
                            @click="handleDel(scope.$index, scope.row)">拒绝</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button @click="cancelClick">取消</el-button>
                <el-button type="primary" @click="confirmClick">全部通过</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue'
import axios from 'axios'
const opens = () => {
    const token = localStorage.getItem('token');
    axios.get('http://47.109.74.143:8085/api/user/info', {
        headers: {
            Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
        }
    }).then((response) => {
        if (response.data.code === 20000) {
            if (response.data.data.info.position === 1) {
                drawer.value = true;
            } else {
                open6();
            }

        } else {
            open6();
        }
    })
}

const handleEdit = (index: number, row) => {
    console.log(row);

    add(row.userId, row.name)
}

const handleDel = (index: number, row) => {


    axios.post('http://47.109.74.143:8085/api/user/useraddinfo', {
        userId: row.userId
    }).then((response) => {
        open2();
        infosss();
        console.log('Shop data:', response);
    })
}

const props = defineProps({
    titled: {
        type: String,
        required: true, // 如果需要这个 prop 必须被传递，则设置为 true
        default: "标题",
    },
});

const drawer = ref(false)
const companyid = ref(0)

function infosss() {
    const token = localStorage.getItem('token');
    axios.get('http://47.109.74.143:8085/api/user/userlistws', {
        headers: {
            Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
        }
    }).then((response) => {
        tableDataregister.value = response.data.data.info
        console.log(response.data.data.info)
    })
}
import { ElMessageBox } from 'element-plus'
const tableDataregister = ref([]);


function cancelClick() {
    drawer.value = false
}

function confirmClick() {
    ElMessageBox.confirm(`确定通过所有成员?`)
        .then(() => {
            drawer.value = false
        })
        .catch(() => {
            // catch error
        })
}

const formatPosition = (row, column, cellValue) => {
    const positionMap = {
        0: '管理员账号',
        1: '管理员',
        2: '成员',
        3: '占位',
        4: '占位',
        5: '占位',
        6: '驻地业务员'
    }
    return positionMap[cellValue] || ''
}

onMounted(() => {
    infosss();
})

function add(index, name) {
    const token = localStorage.getItem('token');
    axios.get('http://47.109.74.143:8085/api/user/info', {
        headers: {
            Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
        }
    }).then((response) => {
        if (response.data.code === 20000) {
            companyid.value = Number(response.data.data.info.companyId)
            if (response.data.data.info.position === 2) {
                axios.post('http://47.109.74.143:8085/api/user/useraddinfo', {
                    userId: index
                }).then((response) => {

                    // const shopData = response.data;
                    axios.post('http://47.109.74.143:8085/api/user/addss', {
                        companyId: companyid.value,
                        name: name,
                        position: response.data.data.info.position,
                        phoneNumber: response.data.data.info.username,
                        username: response.data.data.info.username,
                        password: response.data.data.info.password,
                        creativetime: response.data.data.info.creative,
                    }).then((response) => {
                        open1();
                        infosss();
                        console.log('Shop data:', response);
                    })
                    console.log('Shop data:', response);
                })
            } else {
                open4();
            }

        } else {
            open4();
        }
    })

}

import { ElMessage } from 'element-plus'
const open1 = () => {
    ElMessage({
        message: '已通过',
        type: 'success',
        plain: true,
    })
}
const open4 = () => {
    ElMessage({
        message: '通过失败',
        type: 'error',
        plain: true,
    })
}

const open6 = () => {
    ElMessage({
        message: '无权限',
        type: 'error',
        plain: true,
    })
}
const open2 = () => {
    ElMessage({
        message: '删除成功',
        type: 'success',
        plain: true,
    })
}
</script>

<style scoped>
.header {
    width: 100%;
    /* 设置宽度为100% */
    background-color: #2a327c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    height: 50px;
    box-sizing: border-box;
}

.title {

    /* 设置背景颜色为深蓝色 */
    text-align: left;
    /* 文字靠左边 */
    color: white;
    /* 设置文字颜色为白色，以便在深蓝色背景上能看清楚 */


    font-weight: 600;

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Arial, sans-serif;
}
</style>