import { createRouter, createWebHashHistory } from 'vue-router';

import PajarosDetalles from './pages/Pajaros';
import Home from './pages/Images';
import usuariosPagina from './pages/usuariosPagina'

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
    name:'usuariosReview',
    path:'/usuariosReview/:id',
    component: usuariosPagina,
    props : true,
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;