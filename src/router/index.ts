/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import AboutVue from '@/pages/About.vue';
import RegisterVue from '@/pages/Register.vue';
import index from '@/pages/index.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  { path: "/:catchAll(.*)", redirect: "/" },
  { path: '/', component: index},
  { path: '/about', component: AboutVue},
  { path: '/register', component: RegisterVue},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
