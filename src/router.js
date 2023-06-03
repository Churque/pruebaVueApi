import { createRouter, createWebHashHistory } from 'vue-router';

import PajarosDetalles from './pages/Pajaros';
import Home from './pages/Images';
import Reviews from './pages/Reviews'
import perfilUsuario from './pages/perfilUsuario'

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
  {
    name: 'Perfil',
    path: '/perfilusuario/:id',
    component: perfilUsuario,
    props : true,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;