import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    // eslint-disable-next-line import/extensions
    component: () => import('../views/backStage/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // eslint-disable-next-line import/extensions
    component: () => import('../views/backStage/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/backStage/ProductsView.vue'),
      },
      {
        path: 'orders',
        name: 'orders',
        // eslint-disable-next-line import/extensions
        component: () => import('../views/backStage/OrdersView.vue'),
      },
      {
        path: 'coupons',
        name: 'coupons',
        // eslint-disable-next-line import/extensions
        component: () => import('../views/backStage/CouponsView.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/frontDesk/UserboardView.vue'),
    children: [
      {
        path: '/',
        name: 'HomeView',
        // eslint-disable-next-line import/extensions
        component: () => import('../views/frontDesk/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'AboutView',
        // eslint-disable-next-line import/extensions
        component: () => import('../views/frontDesk/AboutView.vue'),
      },
      {
        path: 'faq',
        name: 'FaqView',
        // eslint-disable-next-line import/extensions
        component: () => import('../views/frontDesk/FaqView.vue'),
      },
      {
        path: 'favorite',
        name: 'FavoriteView',
        // eslint-disable-next-line import/extensions
        component: () => import('../views/frontDesk/UserFavoriteView.vue'),
      },
      {
        path: 'productslist',
        name: 'productslist',
        component: () => import('../views/frontDesk/UserProductsListView.vue'),
      },
      {
        path: 'product/:productId',
        name: 'product/:productId',
        component: () => import('../views/frontDesk/UserProductView.vue'),
      },
      {
        path: 'searchorder',
        name: 'SearchOrderView',
        component: () => import('../views/frontDesk/SearchOrderView.vue'),
      },
    ],
  },
  {
    path: '/cart',
    component: () => import('../views/frontDesk/CartboardView.vue'),
    children: [
      {
        path: '',
        name: 'cart',
        component: () => import('../views/frontDesk/UserCartView.vue'),
      },
      {
        path: 'customerinfo',
        name: 'customerInfo',
        component: () => import('../views/frontDesk/CustomerInfoView.vue'),
      },
      {
        name: 'confirm',
        path: 'confirm',
        component: () => import('../views/frontDesk/UserConfirmView.vue'),
      },
      {
        name: 'ordersuccess',
        path: 'ordersuccess/:orderId',
        component: () => import('../views/frontDesk/UserOrderSuccessView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
