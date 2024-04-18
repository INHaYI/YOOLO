<script setup>

</script>

<template>
    <div class="headers">
        <div class="logos">
            <img src="../img/logo.jpg" alt="加载失败">
            <p>CAAPA</p>
        </div>

        <el-menu default-active="/login" class="el-menu-demo menu1" mode="horizontal" :ellipsis="false"
            @select="handleSelect" router>
            <el-menu-item style="font-size: 18px; " index="/ours">关于我们</el-menu-item>
            <el-menu-item style="font-size: 18px;" index="/team">加盟伙伴</el-menu-item>
            <el-menu-item style="font-size: 18px;" index="/register">凯配注册</el-menu-item>
            <el-menu-item style="font-size: 18px;" index="/login">凯配登陆</el-menu-item>
        </el-menu>

        <el-menu default-active="/login" class="el-menu-demo menu2" mode="horizontal" :ellipsis="true"
            @select="handleSelect" style="width: 20px;" router>
            <el-menu-item style="font-size: 18px; " index="/ours">关于我们</el-menu-item>
            <el-menu-item style="font-size: 18px;" index="/team">加盟伙伴</el-menu-item>
            <el-menu-item style="font-size: 18px;" index="/register">凯配注册</el-menu-item>
            <el-menu-item style="font-size: 18px;" index="/login">凯配登陆</el-menu-item>
        </el-menu>
        <!-- <navbtn title="关于我们"></navbtn>
            <navbtn title="加盟伙伴"></navbtn>
            <navbtn title="凯配注册"></navbtn>
            <navbtn title="凯配登陆"></navbtn> -->
    </div>

    <div class="dlines"></div>
</template>



<style>
.el-menu-demo {
    background-color: #29327c;
    border-color: #29327c;
}

.el-menu--horizontal.el-menu {
    border-bottom: 0px solid var(--el-menu-border-color);
}

:root {
    --el-menu-active-color: #fff;
    --el-menu-text-color: #fff;
    --el-menu-hover-text-color: #ff0000;
    --el-menu-bg-color: #29327c;
    --el-menu-hover-bg-color: #29327c;
    --el-menu-item-height: 46px;
    --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
    --el-menu-horizontal-height: 50px;
    --el-menu-horizontal-sub-item-height: 26px;
    --el-menu-item-font-size: var(--el-font-size-base);
    --el-menu-item-hover-fill: #000;
    --el-menu-border-color: var(--el-border-color);
    --el-menu-base-level-padding: 20px;
    --el-menu-level-padding: 20px;
    --el-menu-icon-width: 24px;
}

.menu2 {
    display: none;
}


.headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #29327c;
    padding: 0px 50px;
    /* padding-top: 10px; */
    color: black;
    height: 5rem;
    font-family: Arial, sans-serif;
}

.dlines {
    height: 2px;
    background-color: #ffffff;
    width: 100%;
}

.logos {
    display: flex;
    justify-content: center;
    align-items: center;

}

.logos p {
    font-size: 35px;
    letter-spacing: 3px;
    position: absolute;
    color: #ffffff;
    margin-left: 250px;
    display: flexbox;
}

.logos img {
    /* border: 1px solid rgb(255, 255, 255); */
    filter: drop-shadow(0px 0px 3px #fff);
    width: 75px;
    /* 或者你希望的宽度 */
    height: auto;
    /* 高度自适应保持图片比例 */
}


@media (max-width: 1024px) {
    .menu1 {
        display: none;
        padding-inline-end: 0;
    }

    .el-icon svg {
        height: 80px;
        width: 80px;
    }

    .menu1 .icon {
        font-size: 40px;
    }

    .el-menu:not(.el-menu--collapse) .el-sub-menu__title {
        padding-right: 10px;
    }
}

@media (max-width: 1024px) {

    .logos img {
        /* border: 1px solid rgb(255, 255, 255); */
        filter: drop-shadow(0px 0px 3px #fff);
        width: 60px;
        /* 或者你希望的宽度 */
        height: auto;
        /* 高度自适应保持图片比例 */
    }

    .logos p {
        font-size: 28px;
        letter-spacing: 3px;
        position: absolute;
        color: #ffffff;
        margin-left: 200px;
        display: flexbox;
    }


    .headers {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #29327c;
        padding: 0px 50px;
        /* padding-top: 10px; */
        color: black;
        height: 4rem;
        font-family: Arial, sans-serif;
    }

    .menu2 {
        display: flex;
    }
}
</style>