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

      <div class="row" style="margin-left:-20px;">
        <MenuAdministracao />

        <div v-if="profiles" class="col-md-10">
          <table id="example" class="table table-striped table-bordered" style="width:100%; font-size:11px;">
            <thead>
              <tr>
                <th style="text-align:center!important; width:20px;">
                  ID
                </th>
                <th style="width:80%;">
                  Nome
                </th>
                <th style="text-align:center!important; width:100px;">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="profile in profiles" :key="profile.id">
                <td style="text-align:center!important;">
                  {{ profile.id }}
                </td>
                <td style="width:60%!important;">
                  {{ profile.descricao }}
                </td>
                <td style="text-align:center!important;">
                  <a class="btn btn-primary btn-sm mr-2 text-white" @click="getProfile(profile.id)"><i class="fa fa-edit" /></a>
                  <a class="btn btn-danger btn-sm text-white"><i class="fa fa-trash-alt" /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="getProf" class="col-md-10">
          <form>
            <div class="row">
              <div class="col-md-12 mb-2">
                <input type="text" class="form-control col-md-6" placeholder="Nome Perfil" :value="getProf.descricao">
              </div>
              
              <div class="col-md-12 mb-4">
                <span v-if="getProf.permissao[0]">
                  <div v-for="permissao in permissoes" :key="permissao.abreviacao" class="form-check">
                    <input class="form-check-input checkbox-inline" type="checkbox" checked
                           style="width:18px; height:18px; margin-top:1px;">
                    <div style="margin-top:10px; margin-left:5px;">
                      {{ permissao.descricao }}
                    </div>                  
                  </div>
                </span>
                <span v-else>
                  <span class="badge badge-danger">Nenhum privilégio selecionado</span>
                </span>
              </div>
              <div class="col-md-12 mb-4">
                <a class="btn btn-primary mr-3 text-white">Atualizar</a>
                <a href="/administracao-perfil" class="btn btn-secondary text-white">Voltar</a>
              </div>
            </div>
          </form>
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
import { profile, getProfile } from '../services/profile'

export default {
  name: 'Dashboard',
  components: { Loading, MenuAdministracao },
  data () {
    return {
      isLoading: false,
      profiles: [],
      getProf: null,
      permissoes: [],
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
      const profiles = await profile()
      this.profiles = profiles.data
      this.isLoading = false
    },
    async getProfile (id) {
      this.isLoading = true
      const getprofile = await getProfile(id)
      this.getProf = getprofile.data
      this.permissoes = getprofile.data.permissao
      this.profiles = null
      this.isLoading = false
    }
  }
}
</script>
