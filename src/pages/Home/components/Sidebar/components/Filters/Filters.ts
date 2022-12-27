import { ListFilter } from './ListFilter'
import { RangeFilter } from './RangeFilter'

export const Filters = () => {
  const fragment = document.createDocumentFragment()

  fragment.append(
    ListFilter({ title: 'Category', key: 'category' }),
    ListFilter({ title: 'Brand', key: 'brand' }),
    RangeFilter({ title: 'Price', key: 'price' }),
    RangeFilter({ title: 'Stock', key: 'stock' }),
  )

  return fragment
}
