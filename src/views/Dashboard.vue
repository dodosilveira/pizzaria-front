<template>
  <div v-if="checkAuth() == true"
       class="dashboard">
    <b-container class="mt-3">
      <b-row>
        <h4 class="mt-2 mr-3 mb-4">
          <i class="fa fa-chart-line mr-2" />DASHBOARD
        </h4>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {},
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  methods: {
    checkAuth () {
      return this.isLoggedIn
      console.log(this.isLoggedIn)
    }
  }
}
</script>
