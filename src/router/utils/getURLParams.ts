import { SYMBOL } from 'enums'
import { urlInstanse } from 'helpers'
import { routerPathes } from 'router/routerPathes'

export const getCategoriesParams = () => {
  const pathname = urlInstanse.getUrl().pathname

  if (pathname.includes(routerPathes.categories)) {
    const categoriesParams = pathname.replace(`${routerPathes.categories}${SYMBOL.SLASH}`, '')

    const [categoryId, brandId, productId] = categoriesParams.split(SYMBOL.SLASH)

    return {
      categoryId,
      brandId,
      productId,
    }
  }

  throw new Error('pathname must to start from "categories"')
}
