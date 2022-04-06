import { createRouter, createWebHistory } from 'vue-router'
import pages from './routes/pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...pages,
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

export default router
