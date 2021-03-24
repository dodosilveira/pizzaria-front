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
        
        <div class="col-md-10">
          <form @submit.prevent="addUser">
            <div class="col-md-12">
              <div class="row">
                <div class="form-group col-md-1">
                  <input v-model="form.ddd" type="text" class="form-control" placeholder="DDD" 
                         required>
                </div>
                <div class="form-group col-md-5">
                  <input v-model="form.telefone" type="text" class="col-md-6 form-control" placeholder="Celular" 
                         required>
                </div>
                <div class="form-group col-md-6">
                  <select v-model="form.perfilId" class="col-md-5 form-control" 
                          required
                          style="border-left:1px solid #333; border-right:1px solid #333; border-radius:5px;">
                    <option value="">
                      Selecione o perfil
                    </option>
                    <option v-for="profile in profiles" :key="profile.id" :value="profile.id">
                      {{ profile.descricao }}
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <input v-model="form.nome" type="text" class="form-control" placeholder="Nome" 
                         required>
                </div>
                <div class="form-group col-md-6">
                  <input v-model="form.sobrenome" type="text" class="form-control" placeholder="Sobrenome" 
                         required>
                </div>
                <div class="form-group col-md-6">
                  <input v-model="form.email" type="text" class="form-control" placeholder="Email" 
                         required>
                </div>
                <div class="form-group col-md-6">
                  <input v-model="form.senha" type="password" class="form-control" placeholder="Senha" 
                         required>
                </div>
                <div class="form-group text-left col-md-12">
                  <button class="btn btn-secondary">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import router from '../router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters } from 'vuex'
import MenuAdministracao from '../components/MenuAdministracao'
import { profile } from '../services/profile'
import { addUser } from '../services/users'

export default {
  name: 'Dashboard',
  components: { Loading, MenuAdministracao },
  data () {
    return {
      isLoading: false,
      profiles: [],
      perfilId: '',
      form: {
        email: null,
        nome: null,
        sobrenome: null,
        senha: null,
        telefone: null,
        ddd: null,
        perfilId: ''
      }
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
    async addUser () {
      this.isLoading = true
      const returnAPI = await addUser(this.form)
      this.isLoading = false

      objSwal.error.title = 'Atenção'
      
      if (returnAPI.status === 200) {
        objSwal.error.type = 'success'
      } else {
        objSwal.error.type = 'info'
      }

      objSwal.error.text = returnAPI.data.mensagem[0]
      Swal.fire(objSwal.error)
      
      if (returnAPI.status === 200) {
        router.push('administracao-usuario')
      }

    }
  }
}
</script>
