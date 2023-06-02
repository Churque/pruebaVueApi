import { createRouter, createWebHashHistory } from 'vue-router';

import PajarosDetalles from './pages/Pajaros';
import Home from './pages/Images';
import Reviews from './pages/Reviews'

const routes = [
  {
    name: 'pajaros_details',
    path: '/pajarosDetalles',
    component: PajarosDetalles,
  },
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'Reviews',
    path: '/Reviews/:id',
    component: Reviews,
    props : true,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;