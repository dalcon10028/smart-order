export default [
  {
    path: '/home',
    component: () => import('@/views/ProductListPage/ProductListPage.vue'),
  },
  {
    path: '/product/:id',
    component: () => import('@/views/ProductPage/ProductPage.vue'),
  },
  {
    path: '/cart',
    component: () => import('@/views/CartPage/CartPage.vue'),
  },
];
