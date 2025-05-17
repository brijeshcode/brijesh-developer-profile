import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resume-color',
      name: 'Resume-color',
      component: () => import('../views/ResumeColored.vue')
    },
    {
      path: '/resume-plain',
      name: 'Resume-plain',
      component: () => import('../views/ResumePlain.vue')
    },
    {
      path: '/resume-plain-tab',
      name: 'Resume-plain-tab',
      component: () => import('../views/ResumePlainWithTab.vue')
    }
  ]
})

export default router
