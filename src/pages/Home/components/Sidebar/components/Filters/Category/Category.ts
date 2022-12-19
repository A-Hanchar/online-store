import { getCategories, getProductsOfACategory } from 'api/products'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { capitalizeText } from 'helpers'
import commonStyles from '../commonStyles.css'

export const CategoryFilters = (async () => {
  const div = document.createElement('div')
  commonStyles.filterWrapper && div.classList.add(commonStyles.filterWrapper)

  const ul = document.createElement('ul')

  try {
    const categories = await getCategories()
    const productsOfCategories = await Promise.all(categories.map((category) => getProductsOfACategory(category)))

    const lists = await Promise.all(
      categories.map(async (category, index) => {
        const total = productsOfCategories[index]!.total
        const categoryText = category.split('-').join(' ')

        const li = document.createElement('li')
        li.append(
          await Button({ children: Text({ tagName: 'span', text: `${capitalizeText(categoryText)} (${total})` }) }),
        )

        return li
      }),
    )

    ul.append(...lists)
  } catch (error) {}

  div.append(Text({ tagName: 'h2', text: 'Categories', classname: commonStyles.title }), ul)

  return div
})()
