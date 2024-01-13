import { createRouter, createWebHashHistory } from 'vue-router'
import UploadPage from '../views/UploadPage/index.vue'
import HomePageLayout from '../layouts/HomePageLayout.vue'
import SocialStats from '../views/SocialStats/index.vue'
import Financial from '../views/Financial/index.vue'

const routes = [
  {
    path: '/',
    component: HomePageLayout,
    redirect: '/uploadpage',
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
      },
      {
        path: '/financial',
        name: 'Financial',
        component: Financial
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
