<template>
  <div class="container-fluid" style="padding:0; margin:0; position: relative; 
  min-height: 100vh;">
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Menu from './views/Menu'
import Footer from './views/Footer'

export default {
  name: 'App',
  components: { Menu, Footer},
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  created () {
    this.check()
  },
  updated () {
    this.check()
  },
  methods: {
    check () {
      if (this.$router.currentRoute.name != 'home' && this.$router.currentRoute.name != 'login' && this.$router.currentRoute.name != 'not-found') {
        this.$store.dispatch('auth/check')
      }
    },
  }
}
</script>
