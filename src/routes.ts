import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue';
import Uxui from './pages/Uxui.vue';
import Illustration from './pages/Illustration.vue';
import Character from './pages/Character.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/uxui', component: Uxui },
  { path: '/illustration', component: Illustration },
  { path: '/characters', component: Character }
];

export const router = createRouter({
  routes,
  history: createWebHistory()
})
