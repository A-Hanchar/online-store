import { Text } from 'components/Text'
import { capitalizeText, createElementWithClassName, workDataInstanse } from 'helpers'
import { SEARCH_PARAMS, SYMBOL } from 'types'
import commonStyles from '../commonStyles.css'
import { ListElement } from '../ListElement'

export const CategoryFilters = () => {
  const categories = workDataInstanse.getAllCategories()

  const div = createElementWithClassName({ tagName: 'div', classname: commonStyles.filterWrapper })
  const ul = document.createElement('ul')

  ul.append(
    ...categories.map((category) => {
      const categoryText = category.split(SYMBOL.DASH).join(SYMBOL.SPACE)

      return ListElement({
        content: capitalizeText(categoryText),
        searchKey: SEARCH_PARAMS.CATERORY,
        searchValue: category,
        countOfProducts: workDataInstanse.getCountProductsOfCategory(category),
      })
    }),
  )

  div.append(Text({ tagName: 'h2', text: 'Category', classname: commonStyles.title }), ul)

  return div
}
