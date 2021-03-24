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
          <table id="example" class="table table-striped table-bordered" style="width:100%; font-size:11px;">
            <thead>
              <tr>
                <th>Descrição</th>
                <th style="text-align:center!important; width:100px;">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in categories" :key="category.id">
                <td>{{ category.descricao }}</td>
                <td style="text-align:center!important;">
                  <a class="btn btn-primary btn-sm mr-2 text-white"><i class="fa fa-edit" /></a>
                  <a class="btn btn-danger btn-sm text-white" @click="deleteCategory(category.id)"><i class="fa fa-trash-alt" /></a>
                </td>
              </tr>
            </tbody>
          </table>
          <router-link
            to="/administracao-categoria-adicionar"
            class="btn btn-secondary" style="padding:5px 10px; min-width:140px; font-weight:normal;">
            <span>Adicionar categoria</span>
          </router-link>
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
import { returnCategories, deleteCategory } from '../services/categories'

export default {
  name: 'Dashboard',
  components: { Loading, MenuAdministracao },
  data () {
    return {
      isLoading: false,
      categories: [],
      edit: null,
      showModal: false
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
      const categories = await returnCategories()
      this.categories = categories.data
      this.isLoading = false
    },
    async deleteCategory (id) {
      this.isLoading = true
      const returnAPI = await deleteCategory(id)
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
        router.go()
      }
      

    }
  }
}
</script>
