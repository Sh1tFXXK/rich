import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ArticleList from '@/views/ArticleList.vue'
import Portfolio from '@/views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: ArticleList
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
