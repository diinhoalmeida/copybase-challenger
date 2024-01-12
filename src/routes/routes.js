import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/Login/index.vue'
import FinancialPage from '../views/Financial/index.vue'
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
        path: '/financial',
        name: 'Financial',
        component: FinancialPage
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
