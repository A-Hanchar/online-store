import { getCategories, getProductsOfACategory } from 'api/products'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { capitalizeText, comma } from 'helpers'
import { Categories } from 'interfaces'
import { SEARCH_PARAMS } from 'types'
import commonStyles from '../commonStyles.css'

export const CategoryFilters = async () => {
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

        const handleClick = (category: Categories) => {
          const url = new URL(window.location.href)

          let searchValue = url.searchParams.get(SEARCH_PARAMS.CATERORY)

          if (searchValue) {
            if (searchValue.includes(category)) {
              searchValue = searchValue
                .split(comma)
                .filter((value) => value !== category)
                .join(comma)

              if (!searchValue) {
                url.searchParams.delete(SEARCH_PARAMS.CATERORY)
              }
            } else {
              searchValue += `${comma}${category}`
            }
          } else {
            searchValue = category
          }

          url.searchParams.set(SEARCH_PARAMS.CATERORY, searchValue)

          window.history.pushState({}, '', url.href)
        }

        const button = await Button({
          children: () => Text({ tagName: 'span', text: `${capitalizeText(categoryText)} (${total})` }),
          onclick: () => handleClick(category),
        })

        li.append(button)

        return li
      }),
    )

    ul.append(...lists)
  } catch (error) {}

  div.append(Text({ tagName: 'h2', text: 'Categories', classname: commonStyles.title }), ul)

  return div
}
