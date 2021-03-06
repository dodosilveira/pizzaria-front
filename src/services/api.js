'use strict'

import axios from 'axios'

export function sendData (url, data, config) {
  return axios.post(url, data, config)
}

export function updateData (url, data, config) {
  return axios.put(url, data, config)
}

export function destroyData (url, config) {
  return axios.delete(url, config)
}

export function getData (url, config) {
  return axios.get(url, config)
}

export function getHeaders (token) {
  return {
    Authorization: token
  }
}
