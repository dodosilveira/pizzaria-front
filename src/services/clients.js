import axios from 'axios'
import { getHeaders } from './api'

export async function returnClients () {
  return await axios.get('https://pizzaria-iunic.herokuapp.com/api/cliente', {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}

export async function addClient (data) {
  return await axios.post('https://pizzaria-iunic.herokuapp.com/api/cliente', {
    id: 0,
	  cpf: data.cpf,
    email: data.email,
    nome: data.nome,
    ddd: data.ddd,
    telefone: data.telefone,
    endereco: {
      id: 0,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
      cep: data.cep,
      usuarioInclusaoId: 0,
    },
    usuarioInclusaoId: 0,
  },{
    headers: getHeaders(`Bearer ${localStorage.token}`)
  }).catch(function (error) {
    return error.response
  })
}

export async function deleteClient (id) {

  return await axios.delete(`https://pizzaria-iunic.herokuapp.com/api/cliente/${id}`, {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  }).catch(function (error) {
    return error.response
  })

}
