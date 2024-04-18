<template>

    <button @click="pushlogin" class="Btn">

        <div class="sign"><svg viewBox="0 0 512 512">
                <path
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                </path>
            </svg></div>

        <div class="text">退出账号</div>
    </button>


</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

function pushlogin() {
    router.push('/')
}
</script>

<style>
.Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: #ff4141;
}

.Btn .sign {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Btn .sign svg {
    width: 17px;
}

.Btn .sign svg path {
    fill: white;
}

.Btn .text {
    position: absolute;
    right: 0%;
    width: 0%;
    font-size: 14px;
    opacity: 0;
    color: white;
    /* font-size: 1.2em; */
    font-weight: 400;
    white-space: nowrap;
    transition-duration: .3s;
}

.Btn:hover {
    width: 130px;
    border-radius: 40px;
    transition-duration: .3s;
}

.Btn:hover .sign {
    width: 30%;
    transition-duration: .3s;
    padding-left: 15px;
}

.Btn:hover .text {
    white-space: nowrap;
    opacity: 1;
    width: 40%;
    transition-duration: .3s;
    padding-right: 26px;
}

.Btn:active {
    transform: translate(2px, 2px);
}
</style>