import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/Login/index.vue'

const routes = [
  {
    path: '/',
    name: 'Public',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
