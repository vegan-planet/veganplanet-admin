import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入element-plus插件和样式
import ElementPlus from 'element-plus'
//引入国际化插件
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入element-plus,css样式
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
//引入模版的全局样式
import '@/styles/index.scss'
//获取应用实例对象
const app = createApp(App)
//安装element-plus插件  一定要在use(router)之前挂载
app.use(ElementPlus, { locale: zhCn })
//安装自定义插件
app.use(gloalComponent)
//将应用实例挂载到#app上
app.mount('#app')
