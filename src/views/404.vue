<template>
  <b-container>
    <div class="text-center">
      <h1 class="notfound pt-5 mb-0 pb-0">
        404
      </h1>
      <h5 class="pl-2 mt-0 pt-0 mb-5">
        Página não encontrada
      </h5>
      <router-link
        href="#"
        to="/"
        class="btn btn-outline-secondary">
        <span>Home</span>
      </router-link>
      <router-link
        href="#"
        to="/login"
        class="ml-3 btn btn-outline-success">
        <span>Login</span>
      </router-link>
    </div>
  </b-container>
</template>

<script>
export default {
  name: '404',
  components: {}
}
</script>