import { createRouter, createWebHistory } from 'vue-router';
import UserRoutes from './user';
import ProductRoutes from './product';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  ...ProductRoutes,
  ...UserRoutes,
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/ErrorPage/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
