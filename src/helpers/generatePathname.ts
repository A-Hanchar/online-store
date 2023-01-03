import { routerPathes } from 'router/routerPathes'

export const generatePathname = {
  categoriesCategoryIdProductId(categoryId: string, brand: string, productId: string) {
    return `${routerPathes.categories}/${brand}/${categoryId}/${productId}`
  },
}
