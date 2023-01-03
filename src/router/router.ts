import { Products, Home, NotFound, Basket, Product, Category } from 'pages'
import { Brand } from 'pages/Brand'
import { routerPathes } from './routerPathes'
import { RouterOwnObject } from './types'

export const rootRoute: RouterOwnObject = {
  path: routerPathes.home,
  content: Home,
}

export const notFoundRoute: RouterOwnObject = {
  path: routerPathes.notFound,
  content: NotFound,
}

export const router: RouterOwnObject[] = [
  rootRoute,
  {
    path: routerPathes.categories,
    content: Products,
    childrenRoutes: [
      {
        path: routerPathes.category,
        content: Category,
        childrenRoutes: [
          {
            path: routerPathes.brand,
            content: Brand,
            childrenRoutes: [
              {
                path: routerPathes.product,
                content: Product,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: routerPathes.basket,
    content: Basket,
  },
  notFoundRoute,
]
