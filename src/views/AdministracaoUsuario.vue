<template>
  <div v-if="checkAuth() == true"
       class="dashboard">
    <loading :active.sync="isLoading"
             :can-cancel="false" />
    <b-container class="mt-3">
      <b-row>
        <h4 class="mt-2 mr-3 mb-4">
          <i class="fa fa-cogs mr-2" />ADMINISTRAÇÃO
        </h4>
      </b-row>

      <div v-if="users" class="row" style="margin-left:-20px;">
        <MenuAdministracao />
        <div class="col-md-10">
          <table id="example" class="table table-striped table-bordered" style="width:100%; font-size:11px;">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Perfil</th>
                <th style="text-align:center!important; width:100px;">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user[0]">
                <td>{{ user.nome }} {{ user.sobreNome }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.ddd }} {{ user.telefone }}</td>
                <td>{{ user.perfil.descricao }}</td>
                <td style="text-align:center!important;">
                  <a class="btn btn-primary btn-sm mr-2 text-white"><i class="fa fa-edit" /></a>
                  <a class="btn btn-danger btn-sm text-white"><i class="fa fa-trash-alt" /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="edit == 1" class="row" style="margin-left:-20px;">
        <MenuAdministracao />
        <div class="col-md-10">
          <table id="example" class="table table-striped table-bordered" style="width:100%; font-size:11px;">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Perfil</th>
                <th style="text-align:center!important; width:100px;">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user[0]">
                <td>{{ user.nome }} {{ user.sobreNome }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.ddd }} {{ user.telefone }}</td>
                <td>{{ user.perfil.descricao }}</td>
                <td style="text-align:center!important;">
                  <a class="btn btn-primary btn-sm mr-2 text-white"><i class="fa fa-edit" /></a>
                  <a class="btn btn-danger btn-sm text-white"><i class="fa fa-trash-alt" /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters } from 'vuex'
import MenuAdministracao from '../components/MenuAdministracao'
import { returnUsers } from '../services/users'

export default {
  name: 'Dashboard',
  components: { Loading, MenuAdministracao },
  data () {
    return {
      isLoading: false,
      users: [],
      edit: null
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
      this.isLoading = true
      const users = await returnUsers()
      this.users = users.data
      this.isLoading = false
    }
  }
}
</script>
