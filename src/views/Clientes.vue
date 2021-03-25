<template>
  <div v-if="checkAuth() == true"
       class="dashboard">
    <loading :active.sync="isLoading"
             :can-cancel="false" />
    <b-container class="mt-3">
      <b-row>
        <h4 class="mt-2 mr-3 mb-3">
          <i class="fa fa-users mr-2" />CLIENTES
        </h4>
      </b-row>

      <form style="margin-left:-10px;" @submit.prevent="searchClients">
        <div class="row">
          <div class="col-md-2">
            <input v-model="sTelefone" type="text" class="form-control" placeholder="Telefone">
          </div>
          <div class="col-md-5">
            <input v-model="sNome" type="text" class="form-control" placeholder="Nome">
          </div>
          <div class="col-md-5">
            <button type="submit" class="btn btn-primary">
              Pesquisar clientes
            </button>
            <a class="text-white ml-2 btn btn-secondary" @click="myFilter">
              Adicionar cliente
            </a>
          </div>
        </div>
      </form>

      <transition name="fade">
        <div v-if="search" class="row mt-4" style="margin-left:-20px;">
          <div class="col-md-12">
            <table id="example" class="table table-striped table-bordered" style="width:100%; font-size:11px;">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>E-mail</th>
                  <th>CPF</th>
                  <th style="text-align:center!important; width:100px;">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="client in clients" :key="client.id">
                  <td>{{ client.nome }}</td>
                  <td>({{ client.ddd }}) {{ client.telefone }}</td>
                  <td>{{ client.email }}</td>
                  <td>{{ client.cpf }}</td>
                  <td style="text-align:center!important;">
                    <a class="btn btn-primary btn-sm mr-2 text-white"><i class="fa fa-edit" /></a>
                    <a class="btn btn-danger btn-sm text-white" @click="deleteClient(client.id)"><i class="fa fa-trash-alt" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <a class="btn btn-primary float-right text-white" @click="search = false">Limpar</a>
          </div>
        </div>
      </transition>

      <hr class="mt-2" style="margin-left:-10px;">

      <transition name="fade">
        <form v-if="addCliente == true" class="{active: addCliente} mt-4" @submit.prevent="addClient">
          <div class="row mt-4" style="margin-left:-20px;">
            <div class="col-md-6">
              <div class="row">
                <div class="form-group col-md-2">
                  <input v-model="form.ddd" type="text" class="form-control" placeholder="DDD">
                </div>
                <div class="form-group col-md-5">
                  <input v-model="form.telefone" type="text" class="form-control" placeholder="Telefone">
                </div>
                <div class="form-group col-md-7">
                  <input v-model="form.cpf" type="text" class="form-control" placeholder="CPF">
                </div>
                <div class="form-group col-md-12">
                  <input v-model="form.nome" type="text" class="form-control" placeholder="Nome">
                </div>
                <div class="form-group col-md-12">
                  <input v-model="form.email" type="text" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group text-left col-md-12">
                  <button class="btn btn-primary">
                    Adicionar cliente
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="form-group col-md-12">
                  <input v-model="form.endereco.cep" type="text" class="form-control col-md-4" placeholder="CEP" 
                         @change="getCEP">
                </div>
                <div class="form-group col-md-9">
                  <input v-model="form.endereco.rua" type="text" class="form-control" placeholder="Rua">
                </div>
                <div class="form-group col-md-3">
                  <input v-model="form.endereco.numero" type="text" class="form-control" placeholder="Número">
                </div>
                <div class="form-group col-md-12">
                  <input v-model="form.endereco.complemento" type="text" class="form-control" placeholder="Complemento">
                </div>
                <div class="form-group col-md-5">
                  <input v-model="form.endereco.bairro" type="text" class="form-control" placeholder="Bairro">
                </div>
                <div class="form-group col-md-5">
                  <input v-model="form.endereco.cidade" type="text" class="form-control" placeholder="Cidade">
                </div>
                <div class="form-group col-md-2">
                  <input v-model="form.endereco.estado" type="text" class="form-control" placeholder="Estado">
                </div>
              </div>
            </div>
          </div>
        </form>
      </transition>
    </b-container>
  </div>
</template>

<script>
import router from '../router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters } from 'vuex'
import { returnClients, addClient, deleteClient, getCEP } from '../services/clients'

export default {
  name: 'Dashboard',
  components: { Loading },
  data () {
    return {
      isLoading: false,
      addCliente: false,
      search: false,
      clients: null,
      sNome: '',
      sTelefone: '',
      form: {
        cpf: null,
        email: null,
        nome: null,
        ddd: null,
        telefone: null,
        endereco: {
          rua: null,
          numero: null,
          complemento: null,
          bairro: null,
          cidade: null,
          estado: null,
          cep: null
        }
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
    async searchClients () {
      this.isLoading = true
      const clients = await returnClients(this.sNome, this.sTelefone)
      this.search = true
      this.clients = clients.data
      this.isLoading = false
    },
    myFilter: function () {
      this.addCliente = !this.addCliente
    },
    async deleteClient (id) {
      this.isLoading = true
      const returnAPI = await deleteClient(id)
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
    async addClient () {
      this.isLoading = true
      const returnAPI = await addClient(this.form)
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
    async getCEP ($event) {
      
      this.isLoading = true
      const returnAPI = await getCEP($event.target.value)
      this.isLoading = false

      objSwal.error.title = 'Atenção'
      
      if (returnAPI.status === 200) {
        objSwal.error.type = 'success'
      } else {
        objSwal.error.type = 'info'
      }    
      
      if (returnAPI.status === 200) {
        this.form.endereco.rua = returnAPI.data.logradouro
        this.form.endereco.complemento = returnAPI.data.complemento
        this.form.endereco.bairro = returnAPI.data.bairro
        this.form.endereco.cidade = returnAPI.data.localidade
        this.form.endereco.estado = returnAPI.data.uf       
      } else {
        objSwal.error.text = returnAPI.data.mensagem[0]
        Swal.fire(objSwal.error)
      }

    }
  }
}
</script>
