import { Products, Home, NotFound, Basket, Product } from 'pages'
import { routerPathes } from './routerPathes'

export const router = [
  {
    id: 'home',
    pathname: routerPathes.home,
    content: Home,
  },
  {
    id: 'products',
    pathname: routerPathes.products,
    content: Products,
  },
  {
    id: 'product',
    pathname: routerPathes.product,
    content: Product,
  },
  {
    id: 'basket',
    pathname: routerPathes.basket,
    content: Basket,
  },
  {
    id: 'notFound',
    pathname: routerPathes.notFound,
    content: NotFound,
  },
]
