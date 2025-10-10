import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ArticleList from '@/views/ArticleList.vue'
import CategoryList from '@/views/CategoryList.vue'
import TagList from '@/views/TagList.vue'

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
    path: '/article',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/category',
    name: 'CategoryList',
    component: CategoryList
  },
  {
    path: '/tag',
    name: 'TagList',
    component: TagList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
