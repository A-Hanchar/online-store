import { getCategories, getProductsOfACategory } from 'api/products'
import { capitalizeText } from 'helpers'
import commonStyles from '../commonStyles.css'

export const CategoryFilters = (async () => {
  const div = document.createElement('div')
  commonStyles.filterWrapper && div.classList.add(commonStyles.filterWrapper)

  const ul = document.createElement('ul')

  try {
    const categories = await getCategories()
    const productsOfCategories = await Promise.all(categories.map((category) => getProductsOfACategory(category)))

    const categoriesInfo = categories.map((category, index) => ({
      category,
      total: productsOfCategories[index]!.total,
    }))

    categoriesInfo.forEach(({ category, total }) => {
      const button = document.createElement('button')

      const categoryText = category.split('-').join(' ')

      button.innerText = `${capitalizeText(categoryText)} (${total})`
      button.addEventListener('click', (event: MouseEvent) => {
        event.preventDefault()

        console.info(button)
      })

      const li = document.createElement('li')

      li.append(button)
      ul.append(li)
    })
  } catch (error) {}

  div.append(ul)

  return div
})()
