/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import index from '@/pages/index.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  { path: "/:catchAll(.*)", redirect: "/" },
  { path: '/', component: index},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
