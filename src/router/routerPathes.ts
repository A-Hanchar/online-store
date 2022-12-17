import { RoutePathesKeys } from './types'

export const routerPathes: Record<RoutePathesKeys, string> = {
  home: '/',

  categories: '/categories',
  category: '/:categoryId',
  product: '/:productId',

  basket: '/basket',
  notFound: '/not-found',
}
