import { SEARCH_PARAMS } from 'types'
import { ListFilter } from './ListFilter'
import { RangeFilter } from './RangeFilter'

export const Filters = () => {
  const fragment = document.createDocumentFragment()

  fragment.append(
    ListFilter({ title: 'Category', key: SEARCH_PARAMS.CATERORY }),
    ListFilter({ title: 'Brand', key: SEARCH_PARAMS.BRAND }),
    RangeFilter({ title: 'Price', key: SEARCH_PARAMS.PRICE }),
    RangeFilter({ title: 'Stock', key: SEARCH_PARAMS.STOCK }),
  )

  return fragment
}
