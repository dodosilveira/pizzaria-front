<template>
  <div v-if="checkAuth() == true"
       class="dashboard">
    <b-container class="mt-3">
      <b-row>
        <div class="col-md pl-0 text-left">
          <h4 class="mt-2 mr-3">
            DASHBOARD
          </h4>
        </div>
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
    }
  }
}
</script>
