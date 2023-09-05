import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import PruebaView from '@/PruebaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  // {
  //   path: '/prueba',
  //   name: 'prueba',
  //   component: PruebaView
  //   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
