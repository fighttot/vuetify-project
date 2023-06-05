// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/ViewHome.vue'),
    meta: {
      title: '校長'
    }
  },
  {
    path: '/guitar',
    component: () => import('@/views/ViewGuitar.vue'),
    meta: {
      title: '吉他'
    },
    afterEnter() { }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
