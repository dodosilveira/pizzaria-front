import axios from 'axios'
import { getHeaders } from './api'

export async function returnUsers () {
  return await axios.get('https://pizzaria-iunic.herokuapp.com/api/usuario', {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}
