import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Clientes from './views/Clientes.vue'
import Produtos from './views/Produtos.vue'
import Pedido from './views/Pedido.vue'
import Administracao from './views/Administracao.vue'
import AdministracaoPerfil from './views/AdministracaoPerfil.vue'
import AdministracaoUsuario from './views/AdministracaoUsuario.vue'
import Fila from './views/Fila.vue'

import NotFound from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: Produtos
    },
    {
      path: '/pedido',
      name: 'pedido',
      component: Pedido
    },
    {
      path: '/administracao',
      name: 'administracao',
      component: Administracao
    },
    {
      path: '/administracao-perfil',
      name: 'administracao-perfil',
      component: AdministracaoPerfil
    },
    {
      path: '/administracao-perfil/:id',
      name: 'perfil-editar',
      component: AdministracaoPerfil
    },
    {
      path: '/administracao-usuario',
      name: 'administracao-usuario',
      component: AdministracaoUsuario
    },
    {
      path: '/fila',
      name: 'fila',
      component: Fila
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
