import { getCategoriesParams } from 'router'

export const Category = () => {
  const { categoryId = '' } = getCategoriesParams()

  const div = document.createElement('div')

  div.innerHTML = `<h1>${categoryId}</h1>`

  return div
}
