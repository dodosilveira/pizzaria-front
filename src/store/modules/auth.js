import { checkLogin, login, logout } from '../../services/auth'
import router from '../../router'

export default {
  namespaced: true,
  state: {
    status: null,
    token: localStorage.getItem('token') || null,
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
    check () {
      if (checkLogin() != true) {
        window.location = '/'
        logout()
      }
    },
    logout () {
      if (logout() == true) {
        logout()
      } else {
        console.log(logout())
      }
    }
  },
  mutations: {
    auth_success (state, token) {
      localStorage.setItem('token', token)
      state.status = 'success'
      state.token = token
    },
    auth_error (state, msg) {
      localStorage.removeItem('token')
      state.token = null
      state.status = 'error'
      state.error = msg
    },
    auth_logout (state) {
      localStorage.removeItem('token')
      state.token = null
      state.status = 'logout'
      router.push('/')
    }
  }
}
