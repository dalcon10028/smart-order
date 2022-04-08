export default [
  {
    path: '/home',
    component: () => import('@/views/ProductListPage/ProductListPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/product/:productNo',
    component: () => import('@/views/ProductPage/ProductPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/cart',
    component: () => import('@/views/CartPage/CartPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/payment',
    component: () => import('@/views/PaymentPage/PaymentPage.vue'),
    meta: { auth: true },
  },
];
