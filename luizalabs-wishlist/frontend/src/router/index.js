import { createRouter, createWebHistory } from 'vue-router';
import ProductsPage from '../pages/ProductsPage.vue';
import WishlistPage from '../pages/WishlistPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductsPage,
    meta: { breadcrumb: 'Home' }
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: WishlistPage,
    meta: { breadcrumb: 'Wishlist' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
