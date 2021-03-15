<template>
  <div v-if="checkAuth() == true"
       class="dashboard">
    <b-container class="mt-3">
      <b-row>
        <h4 class="mt-2 mr-3 mb-4">
          <i class="fa fa-cogs mr-2" />ADMINISTRAÇÃO
        </h4>
      </b-row>

      <div class="row" style="margin-left:-20px;">
        <MenuAdministracao />
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuAdministracao from '../components/MenuAdministracao'

export default {
  name: 'Dashboard',
  components: {MenuAdministracao},
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  methods: {
    checkAuth () {
      return this.isLoggedIn
    }
  }
}
</script>
