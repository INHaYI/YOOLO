<template>
    <el-table :data="tableData" :table-layout="auto" stripe
        style="width: 100%; margin: 5px 20px; font-family: Arial, sans-serif;">
        <el-table-column prop="name" label="姓名" min-width="40" />
        <el-table-column prop="position" label="职位" min-width="40" :formatter="formatPosition" />
        <el-table-column label="操作" min-width="60">
            <template #default>
                <el-button type="primary" size="small" @click="handleClick">权限</el-button>
                <el-button type="danger" link size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>



</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue';
const handleClick = () => {
    console.log('click')
}
function infos() {
    const token = localStorage.getItem('token');
    axios.get('http://47.109.74.143:8085/api/user/userlist', {
        headers: {
            Authorization: `Bearer ${token}` // 将 token 添加到 Authorization 字段中
        }
    }).then((response) => {
        tableData.value = response.data.data.info
        console.log(response.data.data.info)
    })
}

const tableData = ref([]);
import { onMounted } from 'vue'

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
    infos();
})






</script>