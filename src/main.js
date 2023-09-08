/*
 * @Description: 
 * @Date: 2023-09-06 13:39:36
 * @LastEditTime: 2023-09-06 15:08:31
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'


const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')

