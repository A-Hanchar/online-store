import { getCategories, getProductsOfACategory } from 'api/products'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { capitalizeText, comma } from 'helpers'
import { SEARCH_PARAMS } from 'types'
import commonStyles from '../commonStyles.css'
import { onClickFilterButton } from '../helpers/onClickFilterButton'

export const CategoryFilters = async () => {
  const div = document.createElement('div')
  commonStyles.filterWrapper && div.classList.add(commonStyles.filterWrapper)

  const ul = document.createElement('ul')

  try {
    const url = new URL(window.location.href)
    const searchCategoryValue = url.searchParams.get(SEARCH_PARAMS.CATERORY)?.split(comma)

    const categories = await getCategories()
    const productsOfCategories = await Promise.all(categories.map((category) => getProductsOfACategory(category)))

    const lists = await Promise.all(
      categories.map(async (category, index) => {
        const total = productsOfCategories[index]!.total
        const categoryText = category.split('-').join(' ')

        const li = document.createElement('li')

        const button = await Button({
          children: () => Text({ tagName: 'span', text: `${capitalizeText(categoryText)} (${total})` }),
          classname: commonStyles.filterButton,
        })

        button.addEventListener('click', () =>
          onClickFilterButton({ button, key: SEARCH_PARAMS.CATERORY, addedValue: category }),
        )

        if (searchCategoryValue?.includes(category)) {
          commonStyles.isActive && button.classList.add(commonStyles.isActive)
        }

        li.append(button)

        return li
      }),
    )

    ul.append(...lists)
  } catch (error) {}

  div.append(Text({ tagName: 'h2', text: 'Categories', classname: commonStyles.title }), ul)

  return div
}
