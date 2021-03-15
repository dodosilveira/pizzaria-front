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