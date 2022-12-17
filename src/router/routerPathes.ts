import { RoutePathesKeys } from './types'

export const routerPathes: Record<RoutePathesKeys, string> = {
  home: '/',
  products: '/products',
  product: '/products/:productId',
  basket: '/basket',
  notFound: '/not-found',
}
