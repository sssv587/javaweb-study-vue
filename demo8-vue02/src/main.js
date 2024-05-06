// 从vue框架中导入了一个createApp函数
import { createApp } from 'vue'
// 导入全局的css样式文件,该文件中的样式会作用到所有的.vue元素上
import './style.css'
// 导入全局的css样式文件
import './style/test.css';
// 导入了一个App.vue的组件,并起了一个别名 App
import App from './App.vue'

// 使用导入的App组件生成一个对象
let app = createApp(App)
// 将app对象挂载到id值为app的元素上
app.mount('#app')
