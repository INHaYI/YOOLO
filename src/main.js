import { createApp } from 'vue'

import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
import store from './store'


import * as ElIconModules from '@element-plus/icons-vue'



// axios.defaults.baseURL = 'http://localhost:8080/api'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'


const app = createApp(App)


Object.keys(ElIconModules).forEach(function (key) {
    app.component(ElIconModules[key].name, ElIconModules[key])
})

app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')