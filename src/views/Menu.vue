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
              Sair
            </a>
          </b-navbar-nav>
        </b-collapse>
      </template>
    </b-navbar>
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
