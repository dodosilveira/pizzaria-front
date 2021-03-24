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
          <form @submit.prevent="addCategory">
            <div class="col-md-12">
              <div class="row">
                <div class="form-group col-md-5">
                  <input v-model="form.descricao" type="text" class="form-control" placeholder="Descrição" 
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
import { addCategory } from '../services/categories'

export default {
  name: 'Dashboard',
  components: { Loading, MenuAdministracao },
  data () {
    return {
      isLoading: false,
      form: {
        descricao: null
      }
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  methods: {
    checkAuth () {
      return this.isLoggedIn
    },
    async addCategory () {
      this.isLoading = true
      const returnAPI = await addCategory(this.form)
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
        router.push('administracao-categoria')
      }

    }
  }
}
</script>
