import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import VeeValidate from 'vee-validate'
import money from 'v-money'
import dotenv from 'dotenv'
import VueMask from 'v-mask'
import VueTheMask from 'v-money'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(money, {precision: 4})
Vue.use(VueGoogleCharts)
Vue.use(VueTheMask)
Vue.use(VueMask)

dotenv.config()

Vue.use(money, { precision: 4 })
Vue.config.consumerionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {
  locale: 'pt',
  fieldsBagName: 'veeFields'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
