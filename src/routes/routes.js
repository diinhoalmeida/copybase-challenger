import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/Login/index.vue'
import UploadPage from '../views/UploadPage/index.vue'
import HomePageLayout from '../layouts/HomePageLayout.vue'
import SocialStats from '../views/SocialStats/index.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/homepage',
    component: HomePageLayout,
    children: [
      {
        path: '/uploadpage',
        name: 'UploadPage',
        component: UploadPage
      },
      {
        path: '/socialstats',
        name: 'SocialStats',
        component: SocialStats
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
