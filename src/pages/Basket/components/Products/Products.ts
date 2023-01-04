import { Pagination } from 'components/Pagination'
import { createElementWithClassName, localStorageInstanse, urlInstanse } from 'helpers'
import { products } from 'mock/products'

import { Product } from '../Product'
import styles from './styles.css'
import { ProductsProps } from './types'

export const Products = ({ callbackList }: ProductsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const productsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.productsWrapper })
  const pagination = Pagination({ totalElements: localStorageInstanse.getProducts().length })

  wrapper.append(productsWrapper, pagination)

  const renderItems = () => {
    productsWrapper.replaceChildren()
    const params = urlInstanse.getPaginationParam()

    if (!params) {
      return
    }

    const productIds = localStorageInstanse.getProducts().map(({ id }) => id)
    const productsList = products.filter(({ id }) => productIds.includes(id)).sort((a, b) => a.id - b.id)
    const { page, size } = params

    const firstIndex = (page - 1) * size
    const lastIndex = firstIndex + size

    for (let i = firstIndex; i < lastIndex; i++) {
      const product = productsList[i]

      if (product) {
        productsWrapper.append(Product({ callbackList, ...product, currentNumber: i + 1 }))
      }
    }
  }

  urlInstanse.addCallback(renderItems)

  return wrapper
}
