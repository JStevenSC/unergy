import { createRouter,  createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'nosotros',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import( '../views/ProjectsView.vue')
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: () => import('../views/ContactView.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
