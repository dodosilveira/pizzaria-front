<template>
  <div v-if="checkAuth() == true"
       class="dashboard">
    <b-container class="mt-3">
      <b-row>
        <h4 class="mt-2 mr-3 mb-3">
          <i class="fa fa-clipboard-list mr-2" />PRODUTOS
        </h4>
      </b-row>
      <form style="margin-left:-10px;">
        <div class="row">
          <div class="col-md-5">
            <input type="text" class="form-control" placeholder="Nome">
          </div>
          <div class="col-md-5">
            <button type="submit" class="btn btn-primary">
              Pesquisar produtos
            </button>
            <span id="produto">
              <a class="text-white ml-2 btn btn-secondary" @click="myFilter">
                Adicionar produto
              </a>
            </span>
          </div>
        </div>
      </form>
      <div id="search" /><!-- LISTAGEM PESQUISA -->

      <hr style="margin-left:-10px;">

      <transition name="fade">
        <form v-if="addProduto == true" class="{active: addProduto}">
          <div class="row mt-3" style="margin-left:-20px;">
            <div class="col-md-6">
              <div class="row">
                <div class="form-group col-md-3">
                  <input type="text" class="form-control" placeholder="Codigo">
                </div>
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" placeholder="Categoria">
                </div>
                <div class="form-group col-md-9">
                  <input type="text" class="form-control" placeholder="Nome">
                </div>
                <div class="form-group col-md-3">
                  <input type="text" class="form-control" placeholder="R$">
                </div>
                <div class="form-group col-md-12">
                  <textarea class="form-control" />
                </div>
                <div class="form-group custom-file mb-3">
                  <input id="customFile" type="file" class="form-control custom-file-input">
                  <label class="form-control custom-file-label" for="customFile" style="margin-left:10px; border-color: #696969; width:555px;">Imagem/Foto do Produto</label>
                </div>
                <div class="form-group text-left col-md-12">
                  <button class="btn btn-primary">
                    Adicionar produto
                  </button>
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
  name: 'Produtos',
  components: {},
  data () {
    return {
      addProduto: false
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
      this.addProduto = !this.addProduto
    }
  }
}
</script>
