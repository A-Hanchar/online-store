import { Text } from 'components/Text'
import { createElementWithClassName, workDataInstanse } from 'helpers'
import { SEARCH_PARAMS } from 'types'
import commonStyles from '../commonStyles.css'
import { ListElement } from '../ListElement'

export const BrandFilters = () => {
  const brands = workDataInstanse.getAllBrands()

  const div = createElementWithClassName({ tagName: 'div', classname: commonStyles.filterWrapper })
  const ul = document.createElement('ul')

  ul.append(
    ...brands.map((brand) =>
      ListElement({
        content: brand,
        searchKey: SEARCH_PARAMS.BRAND,
        searchValue: brand,
        countOfProducts: workDataInstanse.getCountProductsOfBrand(brand),
      }),
    ),
  )

  div.append(Text({ tagName: 'h2', text: 'Brand', classname: commonStyles.title }), ul)

  return div
}
