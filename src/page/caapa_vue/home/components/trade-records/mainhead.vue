<template>
    <div class="title">
        选择汽修厂
        <div class="radio-input">
            <label>

                <input v-model="selectedValue" value="value-1" name="value-radio" id="value-1" type="radio">
                <span>
                    <svg t="1709463493060" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="8077" width="200" height="200">
                        <path
                            d="M414.47619 121.904762a73.142857 73.142857 0 0 1 73.142858 73.142857v219.428571a73.142857 73.142857 0 0 1-73.142858 73.142858H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142858V195.047619a73.142857 73.142857 0 0 1 73.142857-73.142857h219.428571zM195.047619 195.047619v219.428571h219.428571V195.047619H195.047619z m219.428571 341.333333a73.142857 73.142857 0 0 1 73.142858 73.142858v219.428571a73.142857 73.142857 0 0 1-73.142858 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857v-219.428571a73.142857 73.142857 0 0 1 73.142857-73.142858h219.428571z m-219.428571 73.142858v219.428571h219.428571v-219.428571H195.047619zM536.380952 182.857143v73.142857h353.52381v-73.142857H536.380952zM536.380952 609.52381v73.142857h353.52381v-73.142857H536.380952z m0-268.190477v73.142857h353.52381v-73.142857H536.380952z m0 426.666667v73.142857h353.52381v-73.142857H536.380952z"
                            p-id="8078"></path>
                    </svg>
                </span>
            </label>
            <label>
                <input v-model="selectedValue" value="value-2" name="value-radio" id="value-2" type="radio">
                <span>
                    <svg t="1709463469631" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="7919" width="200" height="200">
                        <path
                            d="M414.47619 121.904762a73.142857 73.142857 0 0 1 73.142858 73.142857v633.904762a73.142857 73.142857 0 0 1-73.142858 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857V195.047619a73.142857 73.142857 0 0 1 73.142857-73.142857h219.428571zM195.047619 195.047619v633.904762h219.428571V195.047619H195.047619z m341.333333 414.476191a73.142857 73.142857 0 0 1 73.142858-73.142858h219.428571a73.142857 73.142857 0 0 1 73.142857 73.142858v219.428571a73.142857 73.142857 0 0 1-73.142857 73.142857h-219.428571a73.142857 73.142857 0 0 1-73.142858-73.142857v-219.428571z m73.142858 219.428571h219.428571v-219.428571h-219.428571v219.428571z m219.428571-707.047619a73.142857 73.142857 0 0 1 73.142857 73.142857v219.428571a73.142857 73.142857 0 0 1-73.142857 73.142858h-219.428571a73.142857 73.142857 0 0 1-73.142858-73.142858V195.047619a73.142857 73.142857 0 0 1 73.142858-73.142857h219.428571z m-219.428571 73.142857v219.428571h219.428571V195.047619h-219.428571z"
                            p-id="7920"></path>
                    </svg>

                </span>
            </label>
            <span class="selection"></span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('value-1');

</script>

<style scoped>
.title {
    width: 100%;
    /* 设置宽度为100% */
    background-color: #2a327c;
    /* 设置背景颜色为深蓝色 */
    text-align: left;
    /* 文字靠左边 */
    color: white;
    /* 设置文字颜色为白色，以便在深蓝色背景上能看清楚 */
    padding: 15px 30px;
    height: 50px;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.radio-input input {
    display: none;
}

.radio-input {
    --container_width: 100px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    color: #000000;
    width: var(--container_width);
    overflow: hidden;
    border: 1px solid rgba(53, 52, 52, 0.226);
}

.radio-input .icon {
    width: auto;
    height: 15px;
}

.radio-input .icon path {
    fill: #000000;
    /* 红色 */
}

.radio-input span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.radio-input label {
    width: 100%;
    padding: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.selection {
    display: none;
    position: absolute;
    height: 100%;
    width: calc(var(--container_width) / 2);
    z-index: 0;
    left: 0;
    top: 0;
    transition: .13s ease;
}

.radio-input label:has(input:checked) {
    color: #fff;
}

.radio-input label:has(input:checked) .icon path {
    fill: #ffffff;
    /* 红色 */
}

.radio-input label:has(input:checked)~.selection {
    background-color: #e6312d;
    display: inline-block;
}

.radio-input label:nth-child(1):has(input:checked)~.selection {
    transform: translateX(calc(var(--container_width) * 0/2));
}

.radio-input label:nth-child(2):has(input:checked)~.selection {
    transform: translateX(calc(var(--container_width) * 1/2));
}

@media (max-width: 1024px) {
    .radio-input {
        --container_width: 100px;
        position: relative;
        display: none;
        align-items: center;
        border-radius: 5px;
        background-color: #fff;
        color: #000000;
        width: var(--container_width);
        overflow: hidden;
        border: 1px solid rgba(53, 52, 52, 0.226);
    }
}
</style>