import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { products } from 'mock/products'
import { Product } from '../Product'
import styles from './styles.css'
import { ProductsProps } from './types'

export const Products = ({ callbackList }: ProductsProps) => {
  const productIds = localStorageInstanse.getProducts().map(({ id }) => id)
  const productsList = products.filter(({ id }) => productIds.includes(id))

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(...productsList.map((product) => Product({ callbackList, ...product })))

  return wrapper
}
