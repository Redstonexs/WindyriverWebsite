import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/main.css'

// 路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
