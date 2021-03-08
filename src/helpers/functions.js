'use strict'

export function realToCents (real) {
  const replaces = ['R', '$', '.', ',']
  const cents = []
  for (const key in real) {
    if (replaces.indexOf(real[key]) === -1) {
      cents.push(real[key])
    }
  }
  real = cents.join('')
  return real
}

export function centsToReal (cents) {
  cents = parseInt(cents)

  cents = String(cents)

  let add = 0
  // adicionando +1 pra contar a o hiffen do valor negativo
  if (cents < 0) add = 1

  let real = cents.replace(/([0-9]{2})$/g, ',$1')

  if (real.length === 3 + add) {
    real = cents.replace(/([0-9]{2})$/g, '0,$1')
  }

  if (real.length > 6 + add) {
    real = real.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
  }

  return String(real)
}

export default function validarCPF (strCPF) {
  var Soma
  var Resto
  var i = null
  Soma = 0
    
  if (strCPF == '00000000000') return false

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
  
  Resto = (Soma * 10) % 11

  if ((Resto == 10) || (Resto == 11))  Resto = 0
  if (Resto != parseInt(strCPF.substring(9, 10)) ) return false

  Soma = 0

  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

  Resto = (Soma * 10) % 11

  if ((Resto == 10) || (Resto == 11))  Resto = 0
  if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false
  return true
}
