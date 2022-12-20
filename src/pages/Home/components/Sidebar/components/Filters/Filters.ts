import { CategoryFilters } from './Category'

export const Filters = (async () => {
  const fragment = document.createDocumentFragment()

  fragment.append(await CategoryFilters)

  return fragment
})()
