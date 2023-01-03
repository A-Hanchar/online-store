import { getCategoriesParams } from 'router'

export const Brand = () => {
  const { brandId = '' } = getCategoriesParams()
  const div = document.createElement('div')

  div.innerHTML = `<h1>${brandId}</h1>`

  return div
}
