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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
