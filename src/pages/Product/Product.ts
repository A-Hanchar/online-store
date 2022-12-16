import { getURLParams } from 'router'

export const Product = (() => {
  const { productId } = getURLParams()

  const div = document.createElement('div')

  div.innerHTML = `<h1>Product: id - ${productId ?? ''}</h1>`

  return div
})()
