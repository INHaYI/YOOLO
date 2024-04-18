<template>
  <div class="login-container">
    <div class="login-card">
      <div class="title_container">
        <img class="img" src="../img/logo.jpg" alt="显示错误">
        <p class="titled">登录您的凯配账户</p>
        <span class="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
      </div>
      <!-- <br> -->
      <form @submit.prevent="loginUser">
        <div class="inputGroupusername">
          <input v-model="username" type="text" required="" autocomplete="off">
          <label for="name">用户名</label>
        </div>
        <div class="inputGrouppassword">
          <input v-model="password" type="password" required="" autocomplete="off">
          <label for="name">密码</label>
        </div>
        <button type="submit" class="login">
          <span class="transition"></span>
          <span class="gradient"></span>
          <span class="label">登录</span>
        </button>
      </form>
      <!-- <br> -->
      <div class="signup-link">
        没有账户?
        <a href="">注册</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus'
const router = useRouter()

const username = ref('');
const password = ref('');

function loginUser() {
  // try {
  axios.post('http://47.109.74.143:8085/api/user/login', {
    username: username.value,
    password: password.value
  }).then((response) => {
    if (response.data.code === 20000) {

      // 存储 Token
      localStorage.setItem('token', response.data.data.token);
      router.push('/list');
      open1();
      console.log('登录成功');

    } else {
      open4();
    }
    // const shopData = response.data;
    console.log('Shop data:', response);
  })

  const open1 = () => {
    ElMessage({
      message: '登陆成功',
      type: 'success',
      plain: true,
    })
  }
  const open4 = () => {
    ElMessage({
      message: ' 登陆失败',
      type: 'error',
      plain: true,
    })
  }
  //   // 登录成功处理
  //   if (response.data.token) {
  //     // 存储 Token
  //     localStorage.setItem('token', response.data.token);

  //     // 跳转到首页或其他页面
  //     // 可以使用 Vue Router 来进行页面导航
  //     router.push('/list');
  //     console.log('登录成功');
  //   }
  // } catch (error) {
  //   // 登录失败处理
  //   console.error('登录失败:', error);
  // }
};




</script>

<style scoped>
.login-container {
  position: fixed;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: calc(100% - 5rem - 2px);
  z-index: 2;
}



.title_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 1em; */
}

.title_container .img {
  width: 15vh;
  /* 或者你希望的宽度 */
  height: auto;
  margin-bottom: 1em;
}

.titled {
  margin: 0;
  font-size: 1.45rem;
  font-weight: 400;
  color: #29327c;
}

.subtitle {
  font-size: 0.725rem;
  max-width: 80%;
  text-align: center;
  line-height: 1.1rem;
  color: #8B8E98
}

.login-card {
  float: right;
  margin-right: 100px;
  width: 24em;
  height: calc(100% - 5rem - 2px - 25%);
  background-color: white;

  padding-right: 3em;
  padding-left: 3em;
  padding-top: 4em;
  padding-bottom: 3em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  color: black;
  border-radius: 10px;
  box-shadow: 0rpx 0rpx 50rpx rgba(0, 0, 0, .2);
}

.inputGroupusername {
  font-family: 'Segoe UI', sans-serif;
  margin: 0.5em 0 0.5em 0;
  position: relative;
  width: 100%;
}

.inputGroupusername input {

  margin: 0.5em 0;
  font-size: 100%;
  padding: 0.8em;
  padding-left: 45px;
  /* 根据图标大小进行调整 */
  outline: none;
  border: 1.5px solid rgb(117, 117, 117);
  background-color: transparent;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  /* 使宽度包含内边距和边框 */
}

.inputGroupusername label {
  font-size: 100%;
  position: absolute;
  left: 25px;
  padding: 0.8em;
  top: 10%;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  font-weight: 250;
  color: rgb(121, 119, 119);
}

.inputGroupusername :is(input:focus, input:valid)~label {
  margin: 0em;
  margin-left: 0.4em;
  padding: 0.2em;
  transform: translateY(-14px) scale(.95);
  background-color: white;
  font-weight: 400;
  color: #e6312d;
}


.inputGroupusername :is(input:focus, input:valid) {
  border-color: #29327c;
}


.inputGroupusername::before {
  content: "";
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  background-image: url('../img/RectangleCopy.png');
  background-size: cover;
  pointer-events: none;
}



.inputGrouppassword {
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  position: relative;
  width: 100%;
}

.inputGrouppassword input {

  margin: 0.5em 0;
  font-size: 100%;
  padding: 0.8em;
  padding-left: 45px;
  /* 根据图标大小进行调整 */
  outline: none;
  border: 1.5px solid rgb(117, 117, 117);
  background-color: transparent;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  /* 使宽度包含内边距和边框 */
}

.inputGrouppassword label {
  font-size: 100%;
  position: absolute;
  left: 25px;
  padding: 0.8em;
  top: 10%;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  font-weight: 250;
  color: rgb(121, 119, 119);
}

.inputGrouppassword :is(input:focus, input:valid)~label {
  margin: 0em;
  margin-left: 0.4em;
  padding: 0.2em;
  transform: translateY(-14px) scale(.95);
  /* 向上移动10px并缩放 */
  background-color: white;
  font-weight: 400;
  color: #e6312d;
}


.inputGrouppassword :is(input:focus, input:valid) {
  border-color: #29327c;
}


.inputGrouppassword::before {
  content: "";
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  background-image: url('../img/RectangleCopy-2.png');
  background-size: cover;
  pointer-events: none;
}




.login {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 17px;
  padding: 0.8em 1.5em;
  width: 100%;
  font-weight: 500;
  background: #29327c;
  color: white;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  margin-top: 5px;
  box-sizing: border-box;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0.6em;
  margin-top: -0.25em;
  background-image: linear-gradient(rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3));
}

.label {
  position: relative;
  top: -1px;
}

.transition {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 400ms;
  background-color: #e6312d;
  border-radius: 9999px;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login:hover .transition {
  width: 100%;
  height: 14em;
}

.login:active {
  transform: scale(0.97);
}

.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 0.9rem;
  text-align: center;
  margin-top: 3vh;
}

.signup-link a {
  text-decoration: underline;
}


@media (max-width: 1024px) {
  .login-container {
    position: fixed;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    height: calc(100% - 4rem - 2px);
    z-index: 2;
  }

  .login-card {
    float: left;
    margin-right: 1.5em;
    margin-left: 1.5em;
    width: calc(100vw - 3em);
    height: calc(100% - 2px - 30%);
    background-color: white;

    padding-right: 1.5em;
    padding-left: 1.5em;
    padding-top: 4em;
    padding-bottom: 3em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    color: black;
    border-radius: 10px;
    box-shadow: 0rpx 0rpx 50rpx rgba(0, 0, 0, .2);
  }
}
</style>