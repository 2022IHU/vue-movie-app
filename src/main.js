import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' //index.js 는 생략가능
import store from './store' //index.js 는 생략가능
import loadImage from './plugins/loadImage'

createApp(App)
.use(router) // $router
.use(store) // $store
.use(loadImage) // $loadImage
.mount('#app')