<template>
  <div class="container-fluid"
       style="padding:0; margin:0px;">
    <b-navbar
      type="light"
      variant="light"
      right 
      class="navbar navbar-light bg-lightnavbar-expand-md">
      <template>
        <b-navbar-brand
          href="#"
          to="/dashboard">
          <img src="@/assets/images/logo.png" width="120" class="ml-3">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse
          id="nav-collapse"
          is-nav>
          <b-navbar-nav class="ml-auto">
            <a v-if="checkAuth()"
               href="#"
               class="dropdown-item text-right"
               @click="logout">
              <i class="fa fa-power-off mr-1" />Sair
            </a>
          </b-navbar-nav>
        </b-collapse>
      </template>
    </b-navbar>
    <b-container v-if="checkAuth()" class="mt-4">
      <b-row>
        <div class="col-md pl-0 text-left">
          <router-link
            href="#"
            to="/dashboard"
            class="btn btn-outline-secondary mr-4">
            <span>Dashboard</span>
          </router-link>
          <router-link
            href="#"
            to="/pedido"
            class="btn btn-outline-secondary mr-4">
            <span>Pedidos</span>
          </router-link>
          <router-link
            href="#"
            to="/produtos"
            class="btn btn-outline-secondary mr-4">
            <span>Produtos</span>
          </router-link>
          <router-link
            href="#"
            to="/clientes"
            class="btn btn-outline-secondary mr-4">
            <span>Clientes</span>
          </router-link>
          <router-link
            href="#"
            to="/fila"
            class="btn btn-outline-secondary mr-4">
            <span>Preparo</span>
          </router-link>
          <router-link
            href="#"
            to="/administracao"
            class="btn btn-outline-secondary mr-4">
            <span>Administração</span>
          </router-link>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Menu',
  data: function () {
    return {
      auth: null
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  mounted () {
    this.init()
  },
  methods: {
    checkAuth () {
      return this.isLoggedIn
    },
    async init () {


    },
    logout: function () {
      localStorage.clear()
      window.location.href = '/'
    }
  }
}
</script>
