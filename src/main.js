import { createRouter , createWebHistory } from "vue-router"
import routes from "./routes"
import { createApp } from 'vue'
import App from './App.vue'
import "../src/routes"


 const router = createRouter({
     history: createWebHistory(),
     routes,
 });





createApp(App).use(router).mount('#app') 
