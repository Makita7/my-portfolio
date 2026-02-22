import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      children:[
        {
          path: '/projects/:slug',
          name: 'UxUiCases',
          component: () => import('../views/UxUiCases.vue'),
        },
      ]
    },
  ],
  scrollBehavior(to) {
    return {
      el: to.hash,
      behavior: 'smooth',
    }
  }
})

export default router
