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
        if (response.data.sucesso == true) {
          await commit('auth_success', response.data.token)
          router.push('dashboard')
        } else {
          commit('auth_error', response.data.mensagem[0])
        }
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
