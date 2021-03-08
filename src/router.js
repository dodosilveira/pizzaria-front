import Vue from 'vue'
import Router from 'vue-router'
/*import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Recharge from './views/Recharge.vue'
import UserProfile from './views/UserProfile.vue'
import Buscas from './views/buscas/Busca.vue'
import NotFound from './views/404.vue'*/

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /*{
      path: '/login',
      name: 'login',
      component: Login
    },
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
      path: '/buscas',
      name: 'buscas',
      component: Buscas
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: Recharge
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: UserProfile
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }*/
  ]
})
