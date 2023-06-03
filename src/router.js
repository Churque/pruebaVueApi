import { createRouter, createWebHashHistory } from 'vue-router';

import Productos from './pages/Productos';
import Reviews from './pages/Reviews'
import perfilUsuario from './pages/perfilUsuario'


const routes = [
  {
    name: 'productos',
    path: '/',
    component: Productos,
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