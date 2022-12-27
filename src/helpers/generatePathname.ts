import { routerPathes } from 'router/routerPathes'

export const generatePathname = {
  categoriesCategoryIdProductId(categoryId: string, productId: string) {
    return `${routerPathes.categories}/${categoryId}/${productId}`
  },
}
