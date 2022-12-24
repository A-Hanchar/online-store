export const regArr = [
  { id: 'name', regExp: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/ },
  { id: 'phone', regExp: /^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,}$/ },
  { id: 'address', regExp: /^(\w{5,}\s){2,}(\w{5,})/ },
  { id: 'email', regExp: /[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/ },
  { id: 'number', regExp: /^\d{16}$/ },
  { id: 'valid', regExp: /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/ },
  { id: 'code', regExp: /^\d{3}$/ },
]
