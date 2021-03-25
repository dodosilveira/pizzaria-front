import axios from 'axios'
import { getHeaders } from './api'

export async function returnClients (nome, telefone) {
  return await axios.get(`https://pizzaria-iunic.herokuapp.com/api/cliente?nome=${nome}&telefone=${telefone}`, {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}

export async function addClient (data) {

  return await axios.post('https://pizzaria-iunic.herokuapp.com/api/cliente', {
	  cpf: data.cpf,
    email: data.email,
    nome: data.nome,
    ddd: data.ddd,
    telefone: data.telefone,
    endereco: {
      rua: data.endereco.rua,
      numero: data.endereco.numero,
      complemento: data.endereco.complemento,
      bairro: data.endereco.bairro,
      cidade: data.endereco.cidade,
      estado: data.endereco.estado,
      cep: data.endereco.cep
    },
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

export async function getCEP (cep) {

  return await axios.get(`https://pizzaria-iunic.herokuapp.com/api/CEP/${cep}`, {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}