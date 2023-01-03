import { routerPathes } from 'router/routerPathes'

export const generatePathname = {
  categoriesCategoryId(categoryId: string) {
    return `${routerPathes.categories}/${categoryId}`
  },
  categoriesCategoryIdBrandId(categoryId: string, brandId: string) {
    return `${routerPathes.categories}/${categoryId}/${brandId}`
  },
  categoriesCategoryIdBrandIdProductId(categoryId: string, brandId: string, productId: string) {
    return `${routerPathes.categories}/${brandId}/${categoryId}/${productId}`
  },
}
