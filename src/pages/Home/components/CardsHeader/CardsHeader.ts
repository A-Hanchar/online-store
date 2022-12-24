import { AppearanceButton } from 'components/AppearanceButton'
import { SearchBy } from 'components/SearchBy'
import { SortBy } from 'components/SortBy'
import { createElementWithClassName } from 'helpers'
import { SEARCH_PARAMS, SORT_KEY, SORT_TYPE } from 'types'
import styles from './styles.css'

export const CardsHeader = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const sortWrapper = createElementWithClassName({ tagName: 'div', classname: styles.sortWrapper })
  sortWrapper.append(
    SortBy({ title: 'Price', key: SORT_KEY.PRICE }),
    SortBy({ title: 'Stock', sort: SORT_TYPE.DESC, key: SORT_KEY.STOCK }),
    SortBy({ title: 'Rating', sort: SORT_TYPE.DESC, key: SORT_KEY.RATING }),
  )

  const searchAppearanceWrapper = createElementWithClassName({
    tagName: 'div',
    classname: styles.searchAppearanceWrapper,
  })
  searchAppearanceWrapper.append(
    SearchBy({ key: SEARCH_PARAMS.TITLE, placeholder: 'Search By Title' }),
    AppearanceButton({}),
  )

  wrapper.append(sortWrapper, searchAppearanceWrapper)

  return wrapper
}
