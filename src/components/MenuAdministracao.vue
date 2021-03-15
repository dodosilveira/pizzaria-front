<template>
  <div class="col-md-2" style="min-height:600px;">
    <router-link
      to="/administracao-perfil"
      class="badge badge-secondary mb-2" style="padding:5px 10px;">
      <span>Adicionar perfil</span>
    </router-link>
    <router-link
      to="/administracao-usuario"
      class="badge badge-secondary mb-2" style="padding:5px 10px;">
      <span>Adicionar usuário</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuAdministracao',
  components: {}
}
</script>