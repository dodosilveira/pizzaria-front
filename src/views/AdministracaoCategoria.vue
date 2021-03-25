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
        <div v-if="!categ" class="col-md-10">
          <table id="example" class="table table-striped table-bordered" style="width:100%; font-size:11px;">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Ícone</th>
                <th style="text-align:center!important; width:100px;">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in categories" :key="category.id">
                <td>{{ category.descricao }}</td>
                <td><i :class="category.icone" style="font-size:20px; margin-top:5px;" /></td>
                <td style="text-align:center!important;">
                  <a class="btn btn-primary btn-sm mr-2 text-white" @click="getCategory(category.id)"><i class="fa fa-edit" /></a>
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

        <transition name="fade">
          <div v-if="categ" class="col-md-10">
            <form @submit.prevent="updateCategory">
              <div class="row">
                <div class="col-md-2 mb-3">
                  <input v-model="form.id" type="text" class="form-control" placeholder="ID"
                         disabled>
                </div>
                <div class="col-md-10 mb-3">
                  <input v-model="form.descricao" type="text" class="form-control" placeholder="Descrição">
                </div>

                <div class="col-md-12 mb-3">
                  <div class="row">
                    <div class="col-md-2">
                      <label style="font-size:13px; line-height:14px; text-align:right;">Escolha o ícone da categoria</label>
                    </div>
                    <div class="col-md-10" style="margin-top:-10px;">
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-pizza-slice" v-model="form.icone" type="radio" value="fa fa-pizza-slice">
                        <label for="fa-pizza-slice" style="padding-left:12px; padding-top:13px;"><span class="fa fa-pizza-slice" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="wine-bottle" v-model="form.icone" type="radio" value="fa fa-wine-bottle">
                        <label for="wine-bottle" style="padding-left:12px; padding-top:13px;"><span class="fa fa-wine-bottle" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-gift" v-model="form.icone" type="radio" value="fa fa-gift">
                        <label for="fa-gift" style="padding-left:12px; padding-top:13px;"><span class="fa fa-gift" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-hamburger" v-model="form.icone" type="radio" value="fa fa-hamburger">
                        <label for="fa-hamburger" style="padding-left:12px; padding-top:13px;"><span class="fa fa-hamburger" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-apple-alt" v-model="form.icone" type="radio" value="fa fa-apple-alt">
                        <label for="fa-apple-alt" style="padding-left:12px; padding-top:13px;"><span class="fa fa-apple-alt" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-carrot" v-model="form.icone" type="radio" value="fa fa-carrot">
                        <label for="fa-carrot" style="padding-left:12px; padding-top:13px;"><span class="fa fa-carrot" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-seedling" v-model="form.icone" type="radio" value="fa fa-seedling">
                        <label for="fa-seedling" style="padding-left:12px; padding-top:13px;"><span class="fa fa-seedling" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-leaf" v-model="form.icone" type="radio" value="fa fa-leaf">
                        <label for="fa-leaf" style="padding-left:12px; padding-top:13px;"><span class="fa fa-leaf" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-tint" v-model="form.icone" type="radio" value="fa fa-tint">
                        <label for="fa-tint" style="padding-left:12px; padding-top:13px;"><span class="fa fa-tint" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-coffee" v-model="form.icone" type="radio" value="fa fa-coffee">
                        <label for="fa-coffee" style="padding-left:12px; padding-top:13px;"><span class="fa fa-coffee" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-beer" v-model="form.icone" type="radio" value="fa fa-beer">
                        <label for="fa-beer" style="padding-left:12px; padding-top:13px;"><span class="fa fa-beer" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-fish" v-model="form.icone" type="radio" value="fa fa-fish">
                        <label for="fa-fish" style="padding-left:12px; padding-top:13px;"><span class="fa fa-fish" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-cocktail" v-model="form.icone" type="radio" value="fa fa-cocktail">
                        <label for="fa-cocktail" style="padding-left:12px; padding-top:13px;"><span class="fa fa-cocktail" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-cheese" v-model="form.icone" type="radio" value="fa fa-cheese">
                        <label for="fa-cheese" style="padding-left:12px; padding-top:13px;"><span class="fa fa-cheese" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-drumstick-bite" v-model="form.icone" type="radio" value="fa fa-drumstick-bite">
                        <label for="fa-drumstick-bite" style="padding-left:12px; padding-top:13px;"><span class="fa fa-drumstick-bite" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-hotdog" v-model="form.icone" type="radio" value="fa fa-hotdog">
                        <label for="fa-hotdog" style="padding-left:12px; padding-top:13px;"><span class="fa fa-hotdog" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-ice-cream" v-model="form.icone" type="radio" value="fa fa-ice-cream">
                        <label for="fa-ice-cream" style="padding-left:12px; padding-top:13px;"><span class="fa fa-ice-cream" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-cookie" v-model="form.icone" type="radio" value="fa fa-cookie">
                        <label for="fa-cookie" style="padding-left:12px; padding-top:13px;"><span class="fa fa-cookie" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-wine-glass-alt" v-model="form.icone" type="radio" value="fa fa-wine-glass-alt">
                        <label for="fa-wine-glass-alt" style="padding-left:12px; padding-top:13px;"><span class="fa fa-wine-glass-alt" style="font-size:22px;" /></label>
                      </div>
                      <div class="form-check form-check-inline" style="margin-right:19px; width:55px;">
                        <input id="fa-water" v-model="form.icone" type="radio" value="fa fa-water">
                        <label for="fa-water" style="padding-left:12px; padding-top:13px;"><span class="fa fa-water" style="font-size:22px;" /></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mb-4">
                  <button type="submit" class="btn btn-primary mr-3 text-white">
                    Atualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </transition>
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
import { returnCategories, getCategory, deleteCategory, updateCategory } from '../services/categories'

export default {
  name: 'Dashboard',
  components: { Loading, MenuAdministracao },
  data () {
    return {
      isLoading: false,
      categories: [],
      categ: null,
      edit: null,
      showModal: false,
      form: {
        id: null,
        descricao: null,
        icone: null
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
    },
    async getCategory (id) {
      this.isLoading = true

      const cat = await getCategory(id)
      this.isLoading = false
      this.categ = cat.data

      this.form.id = this.categ.id
      this.form.descricao = this.categ.descricao
    },
    async updateCategory () {
      this.isLoading = true
      const returnAPI = await updateCategory(this.form)
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
    },
  }
}
</script>
