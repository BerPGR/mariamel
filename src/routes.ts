import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue';
import Uxui from './pages/Uxui.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/uxui', component: Uxui }
];

export const router = createRouter({
  routes,
  history: createWebHistory()
})
