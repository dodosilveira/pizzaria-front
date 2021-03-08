import { checkLogin, login, logout } from '../../services/auth'
import router from '../../router'

export default {
  namespaced: true,
  state: {
    status: null,
    token: localStorage.getItem('access_token') || null,
    error: null
  },
  getters: {
    isLoggedIn: state => !!state.token,
    error: state => state.error
  },
  actions: {
    async loginStore ({ commit }, user) {
      return login(user).then(async response => {
        if (response.status === 200) {
          await commit('auth_success', response.data.token)
          /*return router.push('/dashboard')*/
          window.location = '/dashboard'
        } else {
          objSwal.error.title = 'Erro'
          Swal.fire(objSwal.error)
        }
      }).catch(function (err) {
        let msg = null
        if (!err.response) {
          msg = 'Erro de conexão'
        } else if (err.response.status === 401) {
          msg = 'Usuário ou senha inválida'
        } else {
          msg = 'Erro ao realizar o login'
        }
        commit('auth_error', msg)
      })
    },
    check ({ commit }) {
      checkLogin().then(response => {
        if (response.data != true) {
          commit('auth_logout')
        } else {
          commit('check')
        }
      }).catch(function (err) {
        console.error(err)
        commit('auth_logout')
      })
    },
    logout ({ commit }) {
      logout().then(response => {
        console.log(response.data)
        objSwal.success.title = 'Sucesso'
        /*Swal.fire(objSwal.success)*/
      }).catch(function (err) {
        objSwal.error.title = 'Erro'
        objSwal.error.text = JSON.stringify(err.message)
        Swal.fire(objSwal.error)
      })
      commit('auth_logout')
    }
  },
  mutations: {
    check (state) {
      console.log('check', state)
    },
    auth_success (state, token) {
      localStorage.setItem('access_token', token)
      state.status = 'success'
      state.token = token
    },
    auth_error (state, msg) {
      localStorage.removeItem('access_token')
      state.token = null
      state.status = 'error'
      state.error = msg
    },
    auth_logout (state) {
      localStorage.removeItem('access_token')
      state.token = null
      state.status = 'logout'
      router.push('/')
    }
  }
}
