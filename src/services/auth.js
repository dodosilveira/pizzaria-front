import axios from 'axios'
import {  } from './api'

export async function login (data) {
  return await axios.post('https://pizzaria-iunic.herokuapp.com/api/Autenticacao', {
    email: data.email,
    senha: data.senha
  })
}

export function checkLogin () {
  if (!localStorage.token) {
    return false
  } else {
    return true
  }
}

export function logout () {
  localStorage.clear()
  if (!localStorage.token) {
    return true
  } else {
    return false
  }
}
