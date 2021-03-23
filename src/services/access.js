import axios from 'axios'
import { getHeaders } from './api'

export async function privileges () {
  return await axios.get('https://pizzaria-iunic.herokuapp.com/api/permissao', {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}