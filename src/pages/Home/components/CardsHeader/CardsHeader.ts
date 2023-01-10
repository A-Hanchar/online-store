import { AppearanceButton } from 'components/AppearanceButton'
import { SearchBy } from 'components/SearchBy'
import { SortBy } from 'components/SortBy'
import { createElementWithClassName } from 'helpers'

import styles from './styles.css'

export const CardsHeader = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })
  const sortWrapper = createElementWithClassName({ tagName: 'div', classname: styles.sortWrapper })

  sortWrapper.append(
    SortBy({
      elements: [
        { title: 'Price', key: 'price' },
        { title: 'Rating', key: 'rating' },
        { title: 'Title', key: 'title' },
        { title: 'Discount', key: 'discountPercentage' },
      ],
    }),
  )

  const searchAppearanceWrapper = createElementWithClassName({
    tagName: 'div',
    classname: styles.searchAppearanceWrapper,
  })

  searchAppearanceWrapper.append(SearchBy({ key: 'title', placeholder: 'Search By Title' }), AppearanceButton())

  wrapper.append(sortWrapper, searchAppearanceWrapper)

  return wrapper
}
