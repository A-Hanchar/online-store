import { BrandFilters } from './BrandFilters'
import { CategoryFilters } from './CategoryFilters'

export const Filters = () => {
  const fragment = document.createDocumentFragment()

  fragment.append(CategoryFilters(), BrandFilters())

  return fragment
}
