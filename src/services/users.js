import axios from 'axios'
import { getHeaders } from './api'

export async function returnUsers () {
  return await axios.get('https://pizzaria-iunic.herokuapp.com/api/usuario', {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}

export async function addUser (data) {
  return await axios.post('https://pizzaria-iunic.herokuapp.com/api/usuario', {
    id: 0,
	  email: data.email,
	  nome: data.nome,
	  sobrenome: data.sobrenome,
	  senha: data.senha,
	  perfilId: data.perfilId,
	  telefone: data.telefone,
	  ddd: data.ddd,
	  usuarioInclusaoId: 0
  },{
    headers: getHeaders(`Bearer ${localStorage.token}`)
  }).catch(function (error) {
    return error.response
  })
}

export async function deleteUser (id) {
  return await axios.delete(`https://pizzaria-iunic.herokuapp.com/api/usuario/${id}`, {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  }).catch(function (error) {
    return error.response
  })
}
