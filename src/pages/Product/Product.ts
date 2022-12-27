import { getCategoriesParams } from 'router'

export const Product = () => {
  const { productId = '' } = getCategoriesParams()

  const div = document.createElement('div')

  div.innerHTML = `<h1>Product: id - ${productId}</h1>`

  return div
}
