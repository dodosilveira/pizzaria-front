<template>
  <div class="col-md-2" style="min-height:600px;">
    <router-link
      to="/administracao-perfil"
      class="btn btn-secondary mb-2" style="padding:5px 10px; min-width:140px; font-weight:normal;">
      <span>Perfil</span>
    </router-link>
    <router-link
      to="/administracao-usuario"
      class="btn btn-secondary mb-2" style="padding:5px 10px; min-width:140px; font-weight:normal;">
      <span>Usuários</span>
    </router-link>
    <router-link
      to="/administracao-categoria"
      class="btn btn-secondary mb-2" style="padding:5px 10px; min-width:140px; font-weight:normal;">
      <span>Categorias</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuAdministracao',
  components: {}
}
</script>