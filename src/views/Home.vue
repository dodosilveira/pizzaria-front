<template>
  <div class="home">
    <loading :active.sync="isLoading"
             :can-cancel="false" />
    <div class="scroll mt-3 page-body">
      <div class="container container-xs pb-5">
        <div class="card card-box">
          <div class="card-body p-4">
            <b-form @submit.prevent="loginStore">
              <div class="form-group text-left">
                <label for="input-email"
                       class="label font-weight-bold">
                  Usuário <span class="text-danger">*</span>
                </label>
                <input id="email"
                       v-model="form.email"
                       v-validate="'required'"
                       type="text"
                       required
                       name="email"
                       placeholder="exemplo@gmail.com"
                       class="form-control">
              </div>
              <div class="form-group text-left">
                <label for="input-password"
                       class="label font-weight-bold">
                  Senha <span class="text-danger">*</span>
                </label>
                <input id="password"
                       v-model="form.senha"
                       type="password"
                       required
                       placeholder="**********"
                       class="form-control">
              </div>
              <div class="row align-items-left">
                <div class="col-12 col-sm-6 mb-3 text-left">
                  <a href="/forgot-password-send-email"
                     class="font-weight-bold">
                    Esqueceu sua senha?
                  </a>
                </div>
                <div class="col-12 col-sm-6 text-right">
                  <b-form-group>
                    <b-button
                      variant="primary"
                      type="submit">
                      Entrar
                    </b-button>
                  </b-form-group>
                </div>
              </div>
              <b-row>
                <b-col>
                  <p v-if="error"
                     class="alert alert-danger">
                    {{ error }} <span style="display:none;">{{ isLoading = false }}</span>
                  </p>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: { Loading },
  data () {
    return {
      isLoading: false,
      form: {
        email: null,
        senha: null
      }
    }
  },
  computed: {
    ...mapGetters({
      error: 'auth/error',
    })
  },
  methods: {
    loginStore () {
      this.isLoading = true
      this.$validator.validate().then(resp => {
        this.$store.dispatch('auth/loginStore', this.form)
        console.log(resp)
      })
    }
  }
}
</script>
