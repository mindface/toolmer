import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from "./store";
import router from './router'
import './lib/firebase'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(store,key)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
