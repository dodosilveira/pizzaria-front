import axios from 'axios'
import { getHeaders, url } from './api'

export async function login (data) {
  return await axios.post(url('/login'), {
    email: data.email,
    senha: data.senha
  })
}

export async function checkLogin () {
  return await axios.get(url('/check'), {
    headers: getHeaders(`Bearer ${localStorage.access_token}`)
  })
}

export async function logout () {
  return await axios.post(url('/logout'), null, {
    headers: getHeaders(`Bearer ${localStorage.access_token}`)
  })
}
