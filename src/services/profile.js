import axios from 'axios'
import { getHeaders } from './api'

export async function profile () {
  return await axios.get('https://pizzaria-iunic.herokuapp.com/api/perfil', {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}

export async function getProfile (id) {
  return await axios.get(`https://pizzaria-iunic.herokuapp.com/api/perfil/${id}`,{
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}
