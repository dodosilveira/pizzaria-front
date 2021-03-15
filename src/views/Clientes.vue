<template>
  <div v-if="checkAuth() == true"
       class="dashboard">
    <b-container class="mt-3">
      <b-row>
        <h4 class="mt-2 mr-3 mb-3">
          <i class="fa fa-users mr-2" />CLIENTES
        </h4>
      </b-row>

      <form style="margin-left:-10px;">
        <div class="row">
          <div class="col-md-2">
            <input type="text" class="form-control" placeholder="Telefone">
          </div>
          <div class="col-md-5">
            <input type="text" class="form-control" placeholder="Nome">
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
      <div id="search" /><!-- LISTAGEM PESQUISA -->

      <hr style="margin-left:-10px;">

      <transition name="fade">
        <form v-if="addCliente == true" class="{active: addCliente}">
          <div class="row mt-3" style="margin-left:-20px;">
            <div class="col-md-6">
              <div class="row">
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" placeholder="Telefone">
                </div>
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" placeholder="CPF">
                </div>
                <div class="form-group col-md-12">
                  <input type="text" class="form-control" placeholder="Nome">
                </div>
                <div class="form-group col-md-12">
                  <input type="text" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group text-right col-md-12">
                  <button class="col-md-12 btn btn-primary">
                    Adicionar cliente
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="text" class="form-control col-md-4" placeholder="CEP">
                </div>
                <div class="form-group col-md-9">
                  <input type="text" class="form-control" placeholder="Rua">
                </div>
                <div class="form-group col-md-3">
                  <input type="text" class="form-control" placeholder="Número">
                </div>
                <div class="form-group col-md-12">
                  <input type="text" class="form-control" placeholder="Complemento">
                </div>
                <div class="form-group col-md-5">
                  <input type="text" class="form-control" placeholder="Bairro">
                </div>
                <div class="form-group col-md-5">
                  <input type="text" class="form-control" placeholder="Cidade">
                </div>
                <div class="form-group col-md-2">
                  <input type="text" class="form-control" placeholder="Estado">
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
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {},
  data () {
    return {
      addCliente: false
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
    myFilter: function () {
      this.addCliente = !this.addCliente
    }
  }
}
</script>
