import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import '@/assets/css/main.css'
import '@/assets/css/basic.css'
import '@/assets/js/all.js'
import VeeValidate from 'vee-validate'
import Swal from 'sweetalert2'
import objSwal from '@/constants/swalValues'
import NProgress from '@/utils/progress'
import money from 'v-money'
import dotenv from 'dotenv'
import VueMask from 'v-mask'
import VueTheMask from 'v-money'
import moment from 'moment'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(money, {precision: 4})
Vue.use(VueGoogleCharts)
Vue.use(VueTheMask)
Vue.use(VueMask)

dotenv.config()

window.NProgress = NProgress
window.loader = (obj) => {
  obj.active ? NProgress.start() : NProgress.done()
  store.dispatch('auth/loader', obj).then(res => res)
}

Vue.filter('dataFormatar', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
})

window.Swal = Swal
window.objSwal = objSwal

Vue.use(money, { precision: 4 })
Vue.config.consumerionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {
  locale: 'pt',
  fieldsBagName: 'veeFields'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
