import { createRouter, createWebHashHistory } from 'vue-router';

import PajarosDetalles from './pages/Pajaros';
import Home from './pages/Images';

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
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;