import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
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

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters['user/isLogin']) {
    next('/login');
    return;
  }
  next();
});

export default router;
