export default [
  {
    path: '/home',
    component: () => import('@/views/ProductListPage/ProductListPage.vue'),
  },
  {
    path: '/product/:id',
    component: () => import('@/views/ProductPage/ProductPage.vue'),
  },
];
